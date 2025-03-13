import { FileText, Play, File, Folder, MoreVertical, Image, Mic } from "lucide-react";
import HeaderMainContent from "./HeaderMainContens";
import { useState } from "react";
const MainContent = () => {
    
  const [viewMode, setViewMode] = useState("grid");
  const recommends = [
    { id: 1, title: "Media report - Nov 2023", image: "https://tse2.mm.bing.net/th?id=OIP.GyGiZRv7UJjt2f09MSujvQHaHA&pid=Api&P=0&h=180", icon: <FileText className="w-5 h-5 text-blue-500" /> },
    { id: 2, title: "(Demo) TVC Concept Art", image: "https://tse2.mm.bing.net/th?id=OIP.ZrauiyJ6pg4TZTO0iS3E1AHaEK&pid=Api&P=0&h=180", icon: <Play className="w-5 h-5 text-yellow-500" /> },
    { id: 3, title: "Rebrand 2023 - Proposal", image: "https://tse3.mm.bing.net/th?id=OIP.76JBHFl9Ltm3C9zbKv-DjgHaI5&pid=Api&P=0&h=180", icon: <File className="w-5 h-5 text-red-500" /> },
  ];

  const folders = [
    "Work Documents",
    "Promotion Photoshop",
    "Internship Program",
    "Marketing Media",
    "Brand Guideline",
    "Financial Reports",
  ];

  const files = [
    { id: 1, title: "TVC Script - Brainstorm", image: "https://tse2.mm.bing.net/th?id=OIP.GyGiZRv7UJjt2f09MSujvQHaHA&pid=Api&P=0&h=180", icon: <FileText className="w-5 h-5 text-blue-500" /> },
    { id: 2, title: "Client Feedback Form", image: "https://tse2.mm.bing.net/th?id=OIP.GyGiZRv7UJjt2f09MSujvQHaHA&pid=Api&P=0&h=180", icon: <FileText className="w-5 h-5 text-blue-500" /> },
    { id: 3, title: "Ads Performance Budget", image: "https://tse2.mm.bing.net/th?id=OIP.GyGiZRv7UJjt2f09MSujvQHaHA&pid=Api&P=0&h=180", icon: <FileText className="w-5 h-5 text-green-500" /> },
    { id: 4, title: "Podcast rough cut 01", image: "https://tse2.mm.bing.net/th?id=OIP.GyGiZRv7UJjt2f09MSujvQHaHA&pid=Api&P=0&h=180", icon: <Mic className="w-5 h-5 text-yellow-500" /> },
    { id: 5, title: "Instagram Post - Dec 20", image: "https://tse2.mm.bing.net/th?id=OIP.GyGiZRv7UJjt2f09MSujvQHaHA&pid=Api&P=0&h=180", icon: <Image className="w-5 h-5 text-purple-500" /> },
    { id: 6, title: "Key Visuals", image: "https://tse2.mm.bing.net/th?id=OIP.GyGiZRv7UJjt2f09MSujvQHaHA&pid=Api&P=0&h=180", icon: <File className="w-5 h-5 text-blue-500" /> },
  ];
  console.log("MainContent - viewMode:", viewMode);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <HeaderMainContent viewMode={viewMode} setViewMode={setViewMode} />
      {/* Recommend */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-3">Recommend</h2>
        <div className={viewMode === "grid" ? "grid grid-cols-3 gap-4" : "space-y-3"}>
          {recommends.map((item) => (
            <div
              key={item.id}
              className={`p-4 bg-white rounded-lg shadow ${viewMode === "list" ? "flex items-center gap-4" : ""}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-36 object-cover rounded-lg p-5"
              />
              <div className="mb-2">{item.icon}</div>
              <p className="text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Folders */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-3">Folders</h2>
        <div className={viewMode === "grid" ? "grid grid-cols-3 gap-4" : "space-y-3"}>
          {folders.map((folder, index) => (
            <div key={index} className="p-4 flex justify-between items-center bg-white rounded-lg shadow">
              <div className="flex items-center gap-2">
                <Folder className="w-5 h-5 text-yellow-500" />
                <p className="text-gray-700">{folder}</p>
              </div>
              <MoreVertical className="w-4 h-4 text-gray-500 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
      {/* Files */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-3">Files</h2>
        <div className={viewMode === "grid" ? "grid grid-cols-3 gap-4" : "space-y-3"}>
          {files.map((file) => (
            <div key={file.id} className="p-4 bg-white rounded-lg shadow">
              <img src={file.image} alt={file.title} className="w-full h-36 object-cover rounded-lg" />
              <div className="flex items-center gap-2 mt-2">
                {file.icon}
                <p className="text-gray-700 text-sm truncate">{file.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default MainContent;
