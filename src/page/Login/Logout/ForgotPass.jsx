import { useState } from "react";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Cần import axios nếu sử dụng nó

const ForgotPassword = () => {
    const [Email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;
    const handleForgotPassword = async () => {
        if (!Email || !Email.includes("@")) {
            setError("Please enter a valid Email address.");
            return;
        }

        setLoading(true);
        setError("");
        setSuccessMessage("");

        try {
            const response = await axios.post(
                 `${API_URL}/api/Auth/login`,
                { Email }, 
                {
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Forgot Password response:", response.data);

            if (response.status === 200) {
                setSuccessMessage("OTP has been sent to your Email.");
                navigate("/ResetPassword", { state: { Email } }); // Chuyển đến trang nhập OTP
            } else {
                setError(response?.data?.message || "Failed to send OTP. Try again.");
            }
        } catch (err) {
            console.error("Forgot Password error:", err);
            setError(err.response?.data?.message || "An error occurred. Try again.");
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
                <h2 className="text-2xl text-black font-semibold text-center mb-6">
                    FORGOT PASSWORD
                </h2>

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

                <button
                    onClick={handleForgotPassword}
                    disabled={loading}
                    className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400"
                >
                    {loading ? "Processing..." : " Continue Reset Password"}
                </button>

                {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                {successMessage && <p className="text-green-500 text-center mt-2">{successMessage}</p>}
            </div>
        </section>
    );
};

export default ForgotPassword;
