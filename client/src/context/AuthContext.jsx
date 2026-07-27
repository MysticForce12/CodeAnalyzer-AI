import { createContext, useState, useEffect } from "react";
import authService from "../services/authService.js";

const AuthContext = createContext();

export function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !!user;

    const refreshUser = async() =>{
        try{
            const response = await authService.getCurrentUser();
            setUser(response.user);
        } catch{
            setUser(null);
        } finally{
            setLoading(false);
        }
    };

    const register = async(credentials)=>{
        await authService.register(credentials);
    }

    const login = async (credentials) => {
        await authService.login(credentials);
        await refreshUser();
    };

    const logout = async () => {
        await authService.logout();
        setUser(null);
    };

    useEffect(()=>{

        refreshUser();

    }, []);
    
    return (
        <AuthContext.Provider value={{ user, loading, isAuthenticated, register, login, logout, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;