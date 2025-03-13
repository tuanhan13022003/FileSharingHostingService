import { useState } from "react";
import { Info, List, ChevronDown, MoreVertical, Upload, Plus, Filter } from "lucide-react";
import React from "react";
import ViewModeToggle from "../ViewModeToggle";
const HeaderMainContent = ({ viewMode, setViewMode }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Last Modified");

  const options = ["Last Modified", "Name (A-Z)", "Size (Largest)"];
  console.log("HeaderMainContent - viewMode:", viewMode);
  return (
    <div className="flex flex-wrap items-center justify-between bg-white px-5 py-3 shadow-md">
      {/* Tiêu đề & dropdown */}
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold uppercase">My porta</h1>
        <ChevronDown className="w-4 h-4 text-gray-500 cursor-pointer" />
      </div>
      
      {/* ViewModeToggle */}
        <div className="flex items-center gap-4">
          <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
          <Info className="text-gray-500 cursor-pointer w-5 h-5" />
        </div>


      {/* Nút chức năng */}
      <div className="flex w-full justify-between items-center mt-2">
        {/* Bên trái */}
        <div className="flex items-center gap-4">
          <button className="border px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-blue-gray-200">
            <Upload className="w-4 h-4" /> Upload
          </button>
          <button className="border px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-blue-gray-200">
            <Plus className="w-4 h-4" /> Create new
          </button>
          <MoreVertical className="text-gray-500 cursor-pointer w-5 h-5" />
        </div>

        {/* Bên phải */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 border px-4 py-2 rounded-lg"
          >
            <Filter className="w-4 h-4" />
            Sort: {selected}
            <ChevronDown className="w-4 h-4" />
          </button>

          {open && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md">
              {options.map((option) => (
                <li
                  key={option}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMainContent;
