import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Register(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { register } = useAuth();
    const navigate = useNavigate();

    const { name, email, password } = formData;

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
            await register(formData);
            navigate("/login");
        } catch(err){
            setError(err.response?.data?.message || "Something went wrong.");
        } finally{
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12">

            <div className="w-full max-w-md">

                <div className="mb-8 text-center">

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
                       🔅
                    </div>

                    <h1 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                        Create your account
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                        Start analyzing your code with AI-powered insights.
                    </p>

                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl">

                    {error && (
                        <div className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>

                        <div className="mb-5">
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-600 transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-600 transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-300">
                                Password
                            </label>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-600 transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                placeholder="Create a password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Creating account..." : "Create account"}
                        </button>

                    </form>

                </div>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="font-medium text-blue-400 transition hover:text-blue-300"
                    >
                        Sign in
                    </button>
                </p>

            </div>

        </div>
    );
}

export default Register;