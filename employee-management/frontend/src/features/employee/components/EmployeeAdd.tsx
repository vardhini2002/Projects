import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    employeeSchema,
    type EmployeeData,
} from "../schemas/employeeSchema";

import { addEmployee } from "../services/employeeApi";

function EmployeeAdd() {
    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<EmployeeData>({
        resolver: zodResolver(employeeSchema),
        defaultValues: {
            status: "active",
            salary: 0,
        },
    });

    const mutation = useMutation({
        mutationFn: addEmployee,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["employees"],
            });

            reset();
        },
    });

    const onSubmit = (data: EmployeeData): void => {
        mutation.mutate(data);
    };

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
                    : "Add Employee"}
            </button>

        </form>
    );
}

export default EmployeeAdd;