function EmployeeItem({ employee }: { employee: EmployeeType }) {
    return(
        <div>
            <strong>{employee.name}</strong> - {employee.position}
        </div>
    );
}
export default EmployeeItem;