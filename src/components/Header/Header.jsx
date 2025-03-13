import React from "react";
import { Bell, Settings, Menu, Search } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="bg-white shadow-sm px-4 py-2 flex items-center fixed w-full top-0 z-50 h-12">
      {/* Nút mở Sidebar */}
      <button className="p-2 rounded-full hover:bg-gray-200" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>

      {/* Logo */}
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.XioRbqbYzhUz5dU9w4hPiQHaD-&pid=Api&P=0&h=180"
        alt="Porta Logo"
        className="h-8 w-auto ml-2"
      />

      {/* Thanh tìm kiếm */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1.5 pl-8 border rounded-full bg-gray-100 text-sm focus:outline-none"
          />
          <Search className="absolute left-2.5 top-2 text-gray-500" size={16} />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Bell size={24} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;
