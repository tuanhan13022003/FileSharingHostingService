
import { useState } from "react";
import { Mail, KeySquare, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [PasswordHash, setPasswordHash] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    const handleSignUp = async () => {
        setLoading(true);
        setError("");
    
        try {
            // Kiểm tra nếu chưa nhập đủ dữ liệu
            if (!Username || !PasswordHash || !Email) {
                setError("Please fill in all fields.");
                setLoading(false);
                return;
            }
    
            const userData = {
                username: Username.trim(),  
                email: Email.trim(),        
                password: PasswordHash.trim(),  // Sửa lỗi tên biến
            };
    
            console.log("Sending sign-up data:", userData);
    
            const response = await axios.post(
                `${API_URL}/api/Auth/login`,
                userData,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
    
            console.log("SignUp response:", response.data);
    
            if (response.status === 200) {
                alert("Sign up successful! You can now log in.");
                navigate("/Login");
            } else {
                setError(response?.data?.message || "Sign up failed! Please try again.");
            }
        } catch (err) {
            console.error("SignUp error:", err);
            setError(
                err.response?.data?.message ||
                "An error occurred during sign up. Please check your details."
            );
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
                <h2 className="text-2xl text-black font-semibold text-center mb-6">SIGN UP HERE</h2>

                <div className="relative mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full py-2 pl-3 pr-10 bg-transparent border placeholder-green-400 border-green-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <Mail className="absolute right-3 top-2 text-green-500" />
                </div>

                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={Username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full py-2 pl-3 pr-10 bg-transparent border placeholder-green-400 border-green-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <User className="absolute right-3 top-2 text-green-500" />
                </div>

                <div className="relative mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        value={PasswordHash}
                        onChange={(e) => setPasswordHash(e.target.value)}
                        className="w-full py-2 pl-3 pr-10 bg-transparent border placeholder-green-400 border-green-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <KeySquare className="absolute right-3 top-2 text-green-500" />
                </div>

                <button
                    className="w-full bg-green-500 py-2 rounded-md text-black font-semibold hover:bg-green-400 active:bg-red-700 transition"
                    onClick={handleSignUp}
                    disabled={loading}
                >
                    {loading ? "Signing up..." : "SIGN UP"}
                </button>

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                <p className="text-center mt-4 text-sm">
                    Do you have an account?{" "}
                    <Link to="/Login" className="text-green-400 font-bold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default SignUp;
