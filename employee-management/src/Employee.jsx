import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import EmployeeList from './EmployeeList';

import { useState } from 'react';
// import {useDispatch} from 'react-redux';
import { useQuery,useMutation } from '@tanstack/react-query';
import { getEmployees,addEmployee } from './services/employeeService';


function Employee() {
    const [newEmployee, setNewEmployee] = useState({ name: '', role: '' });
    // const dispatch = useDispatch();
    const mutation = useMutation({
        mutationFn: addEmployee
    });
    const { data } = useQuery({
        queryKey: ["employees"],
        queryFn: getEmployees
    });
    // useEffect(() => {
    //     dispatch(fetchEmployeesAsync());
    // }, [dispatch]);



    function handleAddEmployee() {

        if (!newEmployee.name.trim() || !newEmployee.role.trim()) {
            alert("Please enter name and role");
            return;
        }
        // dispatch(addEmployeeAsync(newEmployee));
        mutation.mutate(newEmployee);
        setNewEmployee({
            name:"",
            role:""
        });
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