
import { useState } from "react";
import { MoreVertical, Download, Copy, Trash, Edit, Move, Share } from "lucide-react";
import HeaderMainContent from "../MainContents/HeaderMainContens";

const files = [
  { name: "Design Materials.zip", size: "4.9 MB", date: "Jun 23, 2023", users: 5, type: "zip" },
  { name: "Branding Package.pdf", size: "3.7 MB", date: "Jun 23, 2023", users: 5, type: "pdf" },
  { name: "Key Visuals.jpg", size: "64 KB", date: "Jun 23, 2023", users: 5, type: "image" },
  { name: "POSM mockup.jpg", size: "127 KB", date: "Jun 23, 2023", users: 0, type: "image" },
];

export default function FileList() {
  const [menuOpen, setMenuOpen] = useState(null);
  const [viewMode, setViewMode] = useState("list");
  console.log("MainContentsss - viewMode:", viewMode);
  return (
    <div className="w-full mx-auto bg-white shadow-md overflow-hidden">
      <HeaderMainContent viewMode={viewMode} setViewMode={setViewMode} />
      {viewMode === "list" ? (
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Size</th>
              <th className="p-3">Last Modified</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index} className="border-b">
                <td className="p-3 flex items-center">
                  <span className="mr-2">{file.type === "image" ? "🖼️" : "📄"}</span>
                  {file.name}
                </td>
                <td className="p-3">{file.size}</td>
                <td className="p-3">{file.date}</td>
                <td className="p-3 text-right relative">
                  <button onClick={() => setMenuOpen(menuOpen === index ? null : index)}>
                    <MoreVertical size={18} />
                  </button>
                  {menuOpen === index && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border">
                      <button className="flex items-center w-full px-3 py-2 hover:bg-gray-100">
                        <Download size={16} className="mr-2" /> Download
                      </button>
                      <button className="flex items-center w-full px-3 py-2 hover:bg-gray-100">
                        <Share size={16} className="mr-2" /> Share
                      </button>
                      <button className="flex items-center w-full px-3 py-2 hover:bg-gray-100">
                        <Copy size={16} className="mr-2" /> Copy
                      </button>
                      <button className="flex items-center w-full px-3 py-2 hover:bg-gray-100">
                        <Edit size={16} className="mr-2" /> Rename
                      </button>
                      <button className="flex items-center w-full px-3 py-2 hover:bg-gray-100">
                        <Move size={16} className="mr-2" /> Move
                      </button>
                      <button className="flex items-center w-full px-3 py-2 text-red-500 hover:bg-gray-100">
                        <Trash size={16} className="mr-2" /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {files.map((file, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
              <span className="text-lg">{file.type === "image" ? "🖼️" : "📄"}</span>
              <p className="font-semibold">{file.name}</p>
              <p className="text-sm text-gray-600">{file.size}</p>
              <p className="text-xs text-gray-500">{file.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
