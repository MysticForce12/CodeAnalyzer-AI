import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }){
    
    const { loading, isAuthenticated } = useAuth();
    
    if(loading){
        return <h1>Loading...</h1>;
    }

    if(!isAuthenticated){
        return <Navigate to="/login" replace />;
    }

    return children;

}

export default ProtectedRoute;