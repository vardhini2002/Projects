import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import EmployeeCard from './components/EmployeeCard'

function App() {
const employees = [
    {
        id: 1,
        name: "Harsha",
        role: "React Developer"
    },
    {
        id: 2,
        name: "John",
        role: "PHP Developer"
    },
    {
        id: 3,
        name: "Priya",
        role: "UI Designer"
    }
];
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Dashboard />
      <h1>Employee Management System</h1>
      <p>Welcome Harsha!</p>
      {
        employees.map((employee)=>{
          return <EmployeeCard employee={employee} key={employee.id}/>
        })
      }
    </div>
  )
}

export default App
