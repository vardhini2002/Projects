import './App.css'
import Employee from './Employee.jsx'
import NavBar from './components/Navbar.jsx'
import { Routes, Route } from "react-router-dom";

function App() {
    
  return (
	<Routes>
		<Route path="/" element={<Employee />} />
		<Route path="/employees" element={<NavBar />} />
	</Routes>
  )
}


export default App;