import axios from "axios";
import api from "../../../services/api";
import type{ EmployeeType } from "../types/EmployeeType";

export const getEmployees = async():Promise<EmployeeType[]> => {
    const response = await api.get("/employees");
    return response.data;
}

export const addEmployee = async(employee:Omit<EmployeeType, "id">):Promise<EmployeeType> => {
    const response = await api.post("/employees",employee);
    return response.data;
}

export const editEmployee = async(id:number, employee:Omit<EmployeeType, "id">):Promise<EmployeeType> =>{
    const response = await api.put(`/employees/${id}`, employee);
    return response.data;
}

export const deleteEmployee = async (id: number): Promise<void> => {
    await api.delete(`/employees/${id}`);
};