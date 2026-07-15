import EmployeeCard from './components/EmployeeCard'

function EmployeeList({ employees, setEmployees }) {
    
    function handleDelete(empId) {
        setEmployees(employees.filter(employee => employee.id !== empId));
    }

    function handleEdit(empId) {
        const emp=employees.find(employee => employee.id === empId);
        if(emp){
            const updatedName = prompt("Enter new name:", emp.name);
            const updatedRole = prompt("Enter new role:", emp.role);
            if (updatedName && updatedRole) {
                setEmployees(employees.map(employee => 
                    employee.id === empId ? { ...employee, name: updatedName, role: updatedRole } : employee
                ));
            }
        }
    }

    return(
        <div>
        {
            employees.map((employee)=>{
                return <EmployeeCard 
                    employee={employee}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    key={employee.id}
                />
            })
        }
        </div>
    )
}

export default EmployeeList;