import { useState } from "react";
import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import {
    addEmployee,
    deleteEmployee,
    getEmployees,
} from "../services/employeeApi";
import type { EmployeeType } from "../types/EmployeeType";
import EmployeeAdd from "../components/EmployeeAdd";
import EmployeeItem from "./EmployeeItem";

function EmployeeList() {
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("");

    const [editingEmployee, setEditingEmployee] =
        useState<EmployeeType | null>(null);

    const queryClient = useQueryClient();

    const {
        data: employees,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["employees"],
        queryFn: getEmployees,
    });

    const deleteMutation = useMutation({
        mutationFn: deleteEmployee,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["employees"],
            });
        },
    });

    const addMutation = useMutation({
        mutationFn: addEmployee,

        onSuccess: () => {
            setEditingEmployee(null);

            queryClient.invalidateQueries({
                queryKey: ["employees"],
            });
        },
    });

    const handleDelete = (id: number): void => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmed) {
            return;
        }

        deleteMutation.mutate(id);
    };

    const handleAdd = (): void => {
        setEditingEmployee(null);
        navigation.navigate("/employee/add");
    };

    const handleSubmit = (employee: EmployeeType): void => {
        addMutation.mutate(employee);
    };

    const filteredEmployees = employees?.filter((employee) => {
        const matchesSearch = employee.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesDepartment =
            department === "" ||
            employee.department === department;

        return matchesSearch && matchesDepartment;
    });

    if (isLoading) {
        return <p>Loading employees...</p>;
    }

    if (isError) {
        return <p>Failed to load employees.</p>;
    }

    return (
        <div>
            <h1>Employees</h1>

            <input
                type="text"
                placeholder="Search employees..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={handleAdd}>
                Add Employee
            </button>

            {editingEmployee === null && (
                <EmployeeAdd
                    onSubmit={handleSubmit}
                />
            )}

            {filteredEmployees?.length === 0 ? (
                <p>No employees found.</p>
            ) : (
                filteredEmployees?.map((employee) => (
                    <EmployeeItem
                        key={employee.id}
                        employee={employee}
                        handleDelete={handleDelete}
                        setEditingEmployee={setEditingEmployee}
                    />
                ))
            )}
        </div>
    );
}

export default EmployeeList;