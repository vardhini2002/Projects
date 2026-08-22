import type { EmployeeType } from "../types/EmployeeType";

type EmployeeItemProps = {
    employee: EmployeeType;
    handleDelete: (id: number) => void;
    setEditingEmployee: (employee: EmployeeType) => void;
};
function EmployeeItem({ employee, handleDelete, setEditingEmployee }: EmployeeItemProps) {
    return(
        <div key={employee.id}>

            <p>
                Name: {employee.name}
            </p>

            <p>
                Email: {employee.email}
            </p>

            <p>
                Department: {employee.department}
            </p>

            <button
                onClick={() =>
                    setEditingEmployee(employee)
                }
            >
                Edit
            </button>

            <button
                onClick={() =>
                    handleDelete(employee.id)
                }
            >
                Delete
            </button>

            <hr />
        </div>
    );
}
export default EmployeeItem;