import { useState } from "react";
import { User, KeySquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useUser} from "../../../components/User/UserContex"
const Login = () => {
    const [Username, setUsername] = useState("");
    const [PasswordHash, setPasswordHash] = useState("");
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useUser();
    const API_URL = import.meta.env.VITE_API_URL;
    const handleLogin = async () => {
        setLoading(true);
        setError("");
    
        try {
            const response = await axios.post(
                `${API_URL}/api/Auth/login`,
                {
                    username: Username,
                    password: PasswordHash,
                },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
    
            console.log("Login response:", response.data);
    
            if (response.status === 200) {
                alert("Login successful!");
                localStorage.setItem("token", response.data.token);
                login(Username);
                navigate("/Home");
            } else {
                setError("Login failed! Please check your credentials.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError(err.response?.data?.message || "An error occurred while logging in.");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <section className="min-h-screen flex  justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('https://wallpapercave.com/wp/wp4676576.jpg')",
            }}
        >
            <div className="w-full max-w-md h-96 pt-12 bg-blue-gray-50 bg-opacity-10 p-6 rounded-lg mt-24 ">
                <h2 className="text-2xl text-black font-semibold text-center mb-6">LOGIN HERE</h2>

                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={Username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full py-2 pl-3 pr-10 placeholder-green-400 bg-transparent border border-green-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <User className="absolute right-3 top-2 text-green-500" />
                </div>

                <div className="relative mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        value={PasswordHash}
                        onChange={(e) => setPasswordHash(e.target.value)}
                        className="w-full py-2 pl-3 pr-10 placeholder-green-400 bg-transparent border border-green-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <KeySquare className="absolute right-3 top-2 text-green-500" />
                </div>

                <div className="flex justify-between items-center mb-4 text-sm">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={() => setRemember(!remember)}
                            className="accent-green-500 w-4 h-4"
                        />
                        <span>Remember me</span>
                    </label>

                    <Link to="/ForgotPassWord" className="text-green-400 hover:underline">
                        Forgot password?
                    </Link>
                </div>

                <button
                    className="w-full bg-green-500 py-2 rounded-md text-black font-semibold hover:bg-green-400 active:bg-red-700 transition"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "LOGIN"}
                </button>

                <p className="text-center mt-4 text-sm">
                    Don't have an account?{" "}
                    <Link to="/SignUp" className="text-green-400 font-bold hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Login;
