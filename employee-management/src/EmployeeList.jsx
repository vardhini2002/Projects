import EmployeeCard from './components/EmployeeCard'
import { getEmployees,editEmployee,deleteEmployee } from './services/employeeService';
import { useMutation,useQuery } from '@tanstack/react-query';
// import { deleteEmployeeAsync, editEmployeeAsync } from "./redux/slice/EmployeeSlice";
// import { useDispatch, useSelector } from 'react-redux';
function EmployeeList() {

    // const dispatch = useDispatch();

    // const employees = useSelector(
    //     state => state.employee.employees
    // );
    const { data: employees = [] } = useQuery({
        queryKey: ["employees"],
        queryFn: getEmployees
    });

    const editMutation = useMutation({
        mutationFn: ({ id, employee }) =>
            editEmployee(id, employee)
    });

    const deleteMutation = useMutation({
        mutationFn: deleteEmployee
    });

    function handleDelete(empId) {
        // dispatch(deleteEmployeeAsync({employeeId: empId}));
        deleteMutation.mutate(deleteEmployee(empId));
    }

    function handleEdit(empId) {
        const emp = employees.find(employee => employee.id === empId);

        if (!emp) return;
        const updatedName = prompt( "Enter new name:", emp.name);
        if (updatedName === null) return;
        const updatedRole = prompt( "Enter new role:", emp.role);
        if (updatedRole === null) return;

        // dispatch(
        //     editEmployeeAsync({
        //         employeeId: empId,
        //         employee: {
        //             name: updatedName,
        //             role: updatedRole
        //         }
        //     })
        // );
        editMutation.mutate(editEmployee({
            employeeId: empId,
            employee: {
                name: updatedName,
                role: updatedRole
            }
        }))
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