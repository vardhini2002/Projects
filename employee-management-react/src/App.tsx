import './App.css'
import Login from './features/login/pages/LoginPage';
import ProtectedRoute from './routes/ProtectedRoute';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <h4>Employee Management System</h4>
      

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
