import React from "react";
import { EmployeeType } from "../types/EmployeeType";
import EmployeeItem from "./EmployeeItem";
function EmployeeList() {
    return (
        <div>
            <h3>Employee List</h3>
            {employee.length > 0 ? (
                <div>
                    {employee.map((emp) => (
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