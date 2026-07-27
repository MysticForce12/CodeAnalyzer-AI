import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }){

    const { loading, isAuthenticated } = useAuth();

    if(loading){
        return <h1>Loading...</h1>;
    }

    if(isAuthenticated){
        return <Navigate to="/" replace />;
    }

    return children;
}

export default PublicRoute;