import './App.css'
import Employee from './Employee.jsx'
import Login from './Login.jsx'
import { Routes, Route } from "react-router-dom";
import AuthProvider from './context/AuthContext.jsx';

function App() {
    

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
		<Route path="/employees" element={<Employee />} />
	</Routes>
	</AuthProvider>
  )
}


export default App;