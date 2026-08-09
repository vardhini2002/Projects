import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: JSX.Element }) {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
        return null;
    }

    return children;
}

export default ProtectedRoute;
