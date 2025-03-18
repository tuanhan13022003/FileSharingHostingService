import { useState } from "react";
import { Mail, Key, Hash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ResetPassword = () => {
    const [Email, setEmail] = useState("");
    const [Token, setToken] = useState("");
    const [NewPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;
    const handleResetPassword = async (e) => {
        setLoading(true);
        setError("");
        setMessage("");
        e.preventDefault();
        console.log("Sending request with:", { Email, Token, NewPassword }); // Debug

        try {
            const response = await axios.post(
                `${API_URL}/api/Auth/login`,
                {
                email: Email,
                token: Token,
                newPassword: NewPassword,
            }, {
                headers: { "Content-Type": "application/json" },
                mode: "cors",
            });
            if (response.status === 200) {
                setMessage("Password reset successfully! Redirecting...");
                navigate("/Login") // Chuyển hướng sau 2 giây
            } else {
                setError(response.message || "Failed to reset password. Try again.");
            }
        } catch (err) {
            console.error("Reset Password Error:", err);
            console.log("Response Data:", err.response?.data);
            setError(
                err.response?.data?.message || "An error occurred. Please try again."
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
                <h2 className="text-2xl text-black font-semibold text-center mb-6">RESET PASSWORD</h2>

                <div className="relative mb-4">
                    <input
                        type="Email"
                        placeholder="Enter your Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full py-2 pl-3 pr-10 bg-transparent border placeholder-green-400 border-green-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <Mail className="absolute right-3 top-2 text-green-500" />
                </div>

                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Enter OTP Code"
                        value={Token}
                        onChange={(e) => setToken(e.target.value)}
                        className="w-full py-2 pl-3 pr-10 bg-transparent border placeholder-green-400 border-green-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <Hash className="absolute right-3 top-2 text-green-500" />
                </div>

                <div className="relative mb-4">
                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={NewPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full py-2 pl-3 pr-10 bg-transparent border placeholder-green-400 border-green-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <Key className="absolute right-3 top-2 text-green-500" />
                </div>
                <button
                    className="w-full bg-green-500 py-2 rounded-md text-black font-semibold hover:bg-green-400 active:bg-red-700 transition"
                    onClick={handleResetPassword}
                    disabled={loading}
                >
                    {loading ? "Resetting..." : "Reset Password"}
                </button>

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
            </div>
        </section>
    );
};

export default ResetPassword;
