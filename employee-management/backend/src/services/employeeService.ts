import type { EmployeeType } from "../types/EmployeeType";
import * as employeeModel from "../models/employeeModel";

export const getEmployees = async (): Promise<EmployeeType[]> => {
    return await employeeModel.findAll();
};