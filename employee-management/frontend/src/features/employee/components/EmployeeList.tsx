import { useState } from "react";
import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";

import {
    deleteEmployee,
    getEmployees,
} from "../services/employeeApi";

import type { EmployeeType } from "../types/EmployeeType";
import EmployeeAdd from "../components/EmployeeAdd";

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

    const handleDelete = (id: number) => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmed) {
            return;
        }

        deleteMutation.mutate(id);
    };

    const filteredEmployees = employees?.filter((employee) => {

        const matchesSearch =
            employee.name
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

            {/* Search */}

            <input
                type="text"
                placeholder="Search employees..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Department Filter */}

            <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            >
                <option value="">
                    All Departments
                </option>

                <option value="IT">
                    IT
                </option>

                <option value="HR">
                    HR
                </option>

                <option value="Finance">
                    Finance
                </option>
            </select>

            {/* Employee Form */}

            <EmployeeAdd
                employee={editingEmployee}
                onSuccess={() => {
                    setEditingEmployee(null);
                }}
            />

            <hr />

            {/* Employee List */}

            {filteredEmployees?.length === 0 ? (

                <p>
                    No employees found.
                </p>

            ) : (

                filteredEmployees?.map((employee) => (

                    <div key={employee.id}>

                        <p>
                            Name: {employee.name}
                        </p>

                        <p>
                            Email: {employee.email}
                        </p>

                        <p>
                            Department: {employee.department}
                        </p>

                        <button
                            onClick={() =>
                                setEditingEmployee(employee)
                            }
                        >
                            Edit
                        </button>

                        <button
                            onClick={() =>
                                handleDelete(employee.id)
                            }
                            disabled={deleteMutation.isPending}
                        >
                            {deleteMutation.isPending
                                ? "Deleting..."
                                : "Delete"}
                        </button>

                        <hr />

                    </div>

                ))

            )}

        </div>
    );
}

export default EmployeeList;