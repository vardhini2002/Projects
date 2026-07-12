function EmployeeCard({ employee }) {
    return (
        <div>
            <h1>Employee Card</h1>
            <p>{employee.name}</p>
            <p>{employee.role}</p>
            <p>{employee.experience}</p>
        </div>
    );
}
export default EmployeeCard;