import Footer from "../components/Footer";

import { logout } from "../slice/authSlice";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmployeeList from "../features/employee/components/EmployeeList";

function Dashboard() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const handleLogout =()=>{
        dispatch(logout());
        navigate("/");
    }
    return(
        <div>
            <h3>Dashboard</h3>
            <div>{user ? `Welcome, ${user.email}!` : "Please log in."}</div>
            <EmployeeList />
            <button type="submit" onClick={handleLogout}>
                Logout
            </button>
            <Footer />
        </div>
    );
}

export default Dashboard;