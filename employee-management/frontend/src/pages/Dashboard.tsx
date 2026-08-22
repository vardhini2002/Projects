import Footer from "../components/Footer";
import { logout } from "../slice/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const handleLogout = (): void => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <div>
            <h3>Dashboard</h3>

            <div>
                {user
                    ? `Welcome, ${user.email}!`
                    : "Please log in."
                }
            </div>

            <button type="button" onClick={handleLogout}>
                Logout
            </button>

            <Footer />
        </div>
    );
}

export default Dashboard;