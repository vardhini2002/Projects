import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import type {EmployeeType}  from "../types/employee";
import {
    employeeSchema,
    type EmployeeData,
} from "../schemas/employeeSchema";
import { addEmployee , editEmployee,deleteEmployee } from "../services/employeeApi";
import { useEffect } from "react";

type EmployeeProps = {
    employee?: EmployeeType | null;
}
function EmployeeAdd({employee}: EmployeeProps){
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<EmployeeData>({
        resolver: zodResolver(employeeSchema),
        defaultValues: {
            status: "active",
        },
    });

     const mutation = useMutation({
        mutationFn: (data: EmployeeData) => {

            if (employee) {

                return editEmployee(
                    employee.id,
                    data
                );

            }

            return addEmployee(data);
        },

        onSuccess: () => {

            QueryClient.invalidateQueries({
                queryKey: ["employees"],
            });

            reset();
        },
    });

    const deleteMutation =useMutation({
        mutationFn: deleteEmployee,

        onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ["employees"],
        });
    },
    })
 
     const onSubmit = (data: EmployeeData) => {
        mutation.mutate(data);
    };

    useEffect(() => {

    if (employee) {

        reset({
            name: employee.name,
            email: employee.email,
            department: employee.department,
            salary: employee.salary,
            phone: employee.phone,
            status: employee.status,
        });

    } else {

        reset({
            name: "",
            email: "",
            department: "",
            salary: 0,
            phone: "",
            status: "active",
        });

    }

}, [employee, reset]);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
         <div>
                <label>Name</label>

                <input
                    type="text"
                    {...register("name")}
                />

                {errors.name && (
                    <p>{errors.name.message}</p>
                )}
            </div>

            <div>
                <label>Email</label>

                <input
                    type="email"
                    {...register("email")}
                />

                {errors.email && (
                    <p>{errors.email.message}</p>
                )}
            </div>

            <div>
                <label>Department</label>

                <input
                    type="text"
                    {...register("department")}
                />

                {errors.department && (
                    <p>{errors.department.message}</p>
                )}
            </div>

            <div>
                <label>Phone</label>

                <input
                    type="text"
                    {...register("phone")}
                />

                {errors.phone && (
                    <p>{errors.phone.message}</p>
                )}
            </div>

            <div>
                <label>Status</label>

                <select {...register("status")}>

                    <option value="active">
                        Active
                    </option>

                    <option value="inactive">
                        Inactive
                    </option>

                </select>
            </div>

            <button
                type="submit"
                disabled={mutation.isPending}
            >
                {mutation.isPending
                    ? "Saving..."
                    : employee
                        ? "Update Employee"
                        : "Add Employee"
                }
            </button>

        </form>
    );
}
export default EmployeeAdd;