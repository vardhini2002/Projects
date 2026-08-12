import React from "react";
import { EmployeeType } from "../types/EmployeeType";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../services/employeeApi";
import EmployeeItem from "./EmployeeItem";
function EmployeeList() {
    const {isLoading,isError,data:employees}= useQuery({
            querKey:["employees"],
            queryfn:getEmployees,
    })
    if (isLoading) {
        return <p>Loading employees...</p>;
    }

    if (isError) {
        return <p>Failed to load employees.</p>;
    }
    return (
        <div>
            <h3>Employee List</h3>
            {employees.length > 0 ? (
                <div>
                    {employees.map((emp) => (
                        <EmployeeItem key={emp.id} employee={emp} />
                    ))}
                </div>
            ) : (
                <p>No employees found.</p>
            )}
        </div>
    );
}
export default EmployeeList;