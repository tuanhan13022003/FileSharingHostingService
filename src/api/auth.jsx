
const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/api/Auth/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      throw new Error("Lỗi đăng ký người dùng");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};