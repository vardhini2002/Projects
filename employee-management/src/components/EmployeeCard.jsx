function EmployeeCard({ employee,handleDelete,handleEdit }) {
    return (
        <div>
            <h1>Employee Card</h1>
            <p>{employee.name}</p>
            <p>{employee.role}</p>
            <p>{employee.experience}</p>
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
            <button onClick={() => handleEdit(employee.id)}>Edit</button>
        </div>

    );
}
   


export default EmployeeCard;