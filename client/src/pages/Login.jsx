import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Login(){

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const { email, password } = formData;

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
        try{
            await login(formData);
            navigate("/");
        } catch(err){
            setError(err.response?.data?.message || "Something went wrong.");
        } finally{
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                
                <h1 className="text-3xl font-bold text-center mb-6">
                    Login
                </h1>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}  
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        {loading ? "Loading..." : "Login"}
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Login;