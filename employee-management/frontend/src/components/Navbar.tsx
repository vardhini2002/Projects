import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import "./Navbar.css";

function Navbar() {

    const user = useSelector(
        (state: RootState) => state.auth.user
    );

    return (
        <header className="navbar">

            <div className="navbar__title">
                Salary Management
            </div>

            <div className="navbar__right">

                <button className="navbar__notification">
                    🔔
                </button>

                <div className="navbar__user">

                    <div className="navbar__avatar">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>

                    <div>
                        <p className="navbar__name">
                            {user?.name}
                        </p>

                        <p className="navbar__role">
                            {user?.role}
                        </p>
                    </div>

                </div>

            </div>

        </header>
    );
}

export default Navbar;