import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar(){

    const { user, isAuthenticated, logout} = useAuth();

    const handleLogout = async()=>{
        try{
            await logout();
        } catch(err){
            console.error(err);
        }
    };

    return(
        <nav className="flex gap-4 p-4 border-b">
            <NavLink to="/" className={({ isActive }) =>isActive ? "text-blue-500 font-bold" : ""}>Dashboard</NavLink>
            
            {
                isAuthenticated ? (
                    <>
                        <p>Welcome, {user.name}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <NavLink to="/register" className={({ isActive }) =>isActive ? "text-blue-500 font-bold" : ""}>Register</NavLink>
                        <NavLink to="/login"  className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Login</NavLink>
                    </>
                )
            }

        </nav>
    );
}

export default Navbar;