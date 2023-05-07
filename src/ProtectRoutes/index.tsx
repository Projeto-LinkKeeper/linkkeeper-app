import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { LinkProvider } from "../Providers/LinkContext";
import { UserContext } from "../Providers/UserContext"

export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext);
    return user ? (
        <LinkProvider>
            <Outlet />
        </LinkProvider>
    ) : (
        <Navigate to="/" />
    );
};