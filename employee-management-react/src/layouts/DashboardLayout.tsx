import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./DashboardLayout.css";

function DashboardLayout() {
    return (
        <div className="dashboard-layout">

            <Sidebar />

            <div className="dashboard-layout__main">

                <Navbar />

                <main className="dashboard-layout__content">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}

export default DashboardLayout;