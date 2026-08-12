import { z } from "zod";

export const employeeSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters"),

    email: z
        .string()
        .email("Enter a valid email"),

    department: z
        .string()
        .min(1, "Department is required"),

    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits"),

    status: z.enum(["active", "inactive"]),
});

export type EmployeeFormData = z.infer<typeof employeeSchema>;