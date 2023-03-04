import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children, logged }) {
	if (!logged) return <Navigate to={"/"}/>

	return children ? children : <Outlet />
}

export default ProtectedRoute;
