import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar__logo">
                PayFlow
            </div>

            <nav className="sidebar__nav">

                <NavLink
                    to="/dashboard"
                    className="sidebar__link"
                >
                    <span>▦</span>
                    Dashboard
                </NavLink>

                <p className="sidebar__section">
                    EMPLOYEES
                </p>

                <NavLink
                    to="/employees"
                    className="sidebar__link"
                >
                    <span>♙</span>
                    Employees
                </NavLink>

                <NavLink
                    to="/departments"
                    className="sidebar__link"
                >
                    <span>▤</span>
                    Departments
                </NavLink>

                <p className="sidebar__section">
                    PAYROLL
                </p>

                <NavLink
                    to="/salary"
                    className="sidebar__link"
                >
                    <span>₹</span>
                    Salary
                </NavLink>

                <NavLink
                    to="/payslips"
                    className="sidebar__link"
                >
                    <span>▧</span>
                    Payslips
                </NavLink>

                <p className="sidebar__section">
                    WORKFORCE
                </p>

                <NavLink
                    to="/attendance"
                    className="sidebar__link"
                >
                    <span>◷</span>
                    Attendance
                </NavLink>

                <NavLink
                    to="/leave"
                    className="sidebar__link"
                >
                    <span>□</span>
                    Leave
                </NavLink>

                <NavLink
                    to="/reports"
                    className="sidebar__link"
                >
                    <span>▥</span>
                    Reports
                </NavLink>

            </nav>

        </aside>
    );
}

export default Sidebar;