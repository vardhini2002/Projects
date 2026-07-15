import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import {getEmployees} from "../services/employeeService";
function Employee() {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({ name: '', role: '' });
    

    useEffect(() => {
        getEmployees()
            .then(response => { 
                setEmployees(response.data);
            });
    }, []);

    function handleAddEmployee(employee) {
        setEmployees([...employees, employee]);
        setNewEmployee({ name: '', role: '' });
    }

return(
    <div>
        <Navbar />
        <Sidebar />
        <Dashboard />
        <h4>Employee Management System</h4>
        <p>Welcome Harsha!</p>

        <div className="form">
            <input 
                value={newEmployee.name} 
                placeholder="Enter Name" 
                onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
                />
            <input 
                value={newEmployee.role} 
                placeholder="Enter Role" 
                onChange={(e) => setNewEmployee({...newEmployee, role: e.target.value})}
            />
            <button onClick={() => handleAddEmployee(newEmployee)}>Add Employee</button>
        </div>
        <EmployeeList employees={employees} setEmployees={setEmployees} />
        
    </div>
    )
}

export default Employee;