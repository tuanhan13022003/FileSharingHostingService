import { useUser } from "../User/UserContex";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const { user, logout } = useUser();

  if (!user) {
    return (
      <div className="flex space-x-4">
        <Link to="/login" className="text-blue-600 hover:underline">
          Log in
        </Link>
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-700">{user.username}</span>
      <img
        src={user.avatar || "https://via.placeholder.com/30"} // Placeholder avatar
        alt="Avatar"
        className="w-8 h-8 rounded-full"
      />
      <button
        onClick={logout}
        className="text-red-600 hover:underline text-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default UserInfo;