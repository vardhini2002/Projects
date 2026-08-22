import './App.css'
import LoginPage from './features/login/pages/LoginPage';
import ProtectedRoute from './routes/ProtectedRoute';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DashboardLayout from "./layouts/DashboardLayout";
import EmployeeAdd from './features/employee/components/EmployeeAdd';
import EmployeeList from "./features/employee/components/EmployeeList";


function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<LoginPage />}
                />

                <Route
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/employees"
                        element={<EmployeeList />}
                    />

                    <Route
                        path="/employee/add"
                        element={<EmployeeAdd />}
                    />


                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;
