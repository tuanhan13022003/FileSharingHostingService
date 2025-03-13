import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Folder,
  ChevronRight,
  ChevronDown,
  Share2,
  ChartPie,
  Star,
  Trash2,
  AlignEndHorizontal,
  Settings,
  LogOut,
} from "lucide-react";

const LeftSidebar = ({ isOpen }) => {
  const [isAllFilesOpen, setIsAllFilesOpen] = useState(true);

  return (
    <div
      className={`fixed top-10 left-0 h-full w-64 bg-white shadow-lg overflow-y-auto transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav className="p-5 text-sm">
        <ul className="space-y-4">
          {/* All Files */}
          <li className="font-bold text-base text-gray-700 px-2 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Folder size={16} /> All Files
            </span>
            <button
              onClick={() => setIsAllFilesOpen(!isAllFilesOpen)}
              className="text-gray-600 hover:text-blue-800"
            >
              {isAllFilesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          </li>

          {/* Danh sách thư mục con */}
          {isAllFilesOpen && (
            <div className="pl-5 space-y-2 text-gray-600">
              <button className="flex items-center gap-2 hover:text-blue-800">
                <ChevronRight size={16} /> Work Documents
              </button>
              <button className="flex items-center gap-2 hover:text-blue-800">
                <ChevronRight size={16} /> Promotion Photos
              </button>
              <button className="flex items-center gap-2 hover:text-blue-800">
                <ChevronRight size={16} /> Internship Program
              </button>
              <button className="flex items-center gap-2 hover:text-blue-800">
                <ChevronRight size={16} /> Marketing Media
              </button>
              <Link to="/brand-guideline" className="flex items-center gap-2 hover:text-blue-800">
                <ChevronRight size={16} /> Brand Guideline
              </Link>
              <button className="flex items-center gap-2 hover:text-blue-800">
                <ChevronRight size={16} /> Financial Reports
              </button>
            </div>
          )}

          <li className="border-t my-3"></li>

          {/* Các mục khác */}
          <button className="flex items-center gap-2 px-2 text-gray-600 hover:text-blue-800">
            <Share2 size={16} /> Shared with me
          </button>
          <button className="flex items-center gap-2 px-2 text-gray-600 hover:text-blue-800">
            <ChartPie size={16} /> Recent
          </button>
          <button className="flex items-center gap-2 px-2 text-gray-600 hover:text-blue-800">
            <Star size={16} /> Starred
          </button>
          <button className="flex items-center gap-2 px-2 text-gray-600 hover:text-blue-800">
            <Trash2 size={16} /> Bin
          </button>
        </ul>
      </nav>

      {/* Admin & Logout */}
      <div className="border-t py-3">
        <p className="font-bold text-base text-gray-700 px-7">ADMIN</p>
        <ul className="mt-2 space-y-2 text-sm">
          <button className="flex items-center gap-2 px-7 text-gray-600 hover:text-blue-800">
            <AlignEndHorizontal size={16} /> Insights
          </button>
          <button className="flex items-center gap-2 px-7 text-gray-600 hover:text-blue-800">
            <Settings size={16} /> Settings
          </button>
        </ul>
      </div>
      <div className="border-t py-3 px-7">
        <button className="flex items-center gap-2 font-bold text-red-400 w-full hover:text-blue-800">
          <LogOut size={24} /> Log Out
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
