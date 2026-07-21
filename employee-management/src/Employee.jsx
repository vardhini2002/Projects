import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import EmployeeList from './EmployeeList';

import { useState , useEffect } from 'react';
import {useDispatch} from 'react-redux';

import {addEmployeeAsync} from './redux/slice/EmployeeSlice';
import {getEmployees} from "./services/employeeService";

function Employee() {
    const [newEmployee, setNewEmployee] = useState({ name: '', role: '' });
    const dispatch = useDispatch();

    useEffect(() => {
        getEmployees()
            .then(response => {
                response.data.forEach(employee => {
                    dispatch(addEmployeeAsync(employee));
                });

            });

    }, [dispatch]);

    function handleAddEmployee() {
        dispatch(addEmployeeAsync(newEmployee));
        setNewEmployee({ name: '', role: '' });
    }

return(
    <div>
        <Navbar />
        <Sidebar />
        <Dashboard />
        <h4>Employee Management System</h4>
        <p>Welcome Harsha!</p>
        {/* form */}
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
            <button onClick={handleAddEmployee}>Add Employee</button>
        </div>
        <EmployeeList />
    </div>
    )
}

export default Employee;