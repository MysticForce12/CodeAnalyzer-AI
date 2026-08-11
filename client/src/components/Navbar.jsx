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

    return (
        <nav className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-6">

            <div className="flex items-center gap-8">

                <NavLink to="/" className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                        🔅
                    </span>

                    <span className="text-sm font-semibold text-white">
                        CodeAnalyzer
                        <span className="text-orange-400"> AI</span>
                    </span>
                </NavLink>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-sm font-medium transition ${
                            isActive ? "text-slate-200" : "text-slate-500 hover:text-slate-100"
                        }`
                    }
                >
                    Dashboard
                </NavLink>

            </div>

            <div className="flex items-center gap-5">

                {isAuthenticated ? (
                    <>
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-xs font-semibold text-blue-400">
                                {user.name?.charAt(0).toUpperCase()}
                            </div>

                            <span className="text-sm text-slate-300">
                                {user.name}
                            </span>
                        </div>

                        <button onClick={handleLogout} className="text-sm font-medium text-slate-400 transition hover:text-red-400">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `text-sm font-medium transition ${
                                    isActive ? "text-blue-400" : "text-slate-400 hover:text-slate-200"
                                }`
                            }
                        >
                            Register
                        </NavLink>

                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `text-sm font-medium transition ${
                                    isActive ? "text-blue-400" : "text-slate-400 hover:text-slate-200"
                                }`
                            }
                        >
                            Login
                        </NavLink>
                    </>
                )}

            </div>

        </nav>
    );
}

export default Navbar;