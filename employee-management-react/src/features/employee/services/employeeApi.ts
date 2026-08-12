import axios from "axios";
import api from "../../../services/api";
import type{ EmployeeType } from "../types/EmployeeType";

export const getEmployees = async():Promise<EmployeeType[]> => {
    const response = await api.get("/employees");
    return response.data;
}

export const addEmployee = async(Omit<EmployeeType, "id">):Promise<EmployeeType> => {
    const response = await api.post("/employee/add",employee);
    return response.data;
}