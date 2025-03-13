// import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Header from "../../components/Header/Header.jsx";
// import LeftSidebar from "../../components/SideBar/LeftSideBar.jsx";
// import RightSideBar from "../../components/SideBar/RightSideBar.jsx";
// import MainContent from "../../components/MainContents/MainContents.jsx";
// import BrandGuideline from "../Brand Guideline/BrandGuideline.jsx";

// const MainPage = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [viewMode, setViewMode] = useState("grid");
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     return (
//         <div className="flex h-screen">
//             {/* Header */}
//             <Header 
//                 toggleSidebar={toggleSidebar} 
//                 viewMode={viewMode} 
//                 setViewMode={setViewMode} 
//             />
//             {/* Sidebar trái */}
//             <LeftSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

//             {/* Nội dung chính */}
//             <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
//                 <div className="flex-1 bg-white p-6 mt-16">
//                     <Routes>
//                         <Route path="/" element={<MainContent viewMode={viewMode} />} />
//                         <Route path="/brand-guideline" element={<BrandGuideline />} />
//                     </Routes>
//                 </div>
//             </div>

//             {/* Sidebar phải */}
//             <RightSideBar />
//         </div>
//     );
// };


// export default MainPage;

import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import LeftSidebar from "../../components/SideBar/LeftSideBar.jsx";
import RightSideBar from "../../components/SideBar/RightSideBar.jsx";
import MainContent from "../../components/MainContents/MainContents.jsx";
import BrandGuideline from "../Brand Guideline/BrandGuideline.jsx";

const MainPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [viewMode, setViewMode] = useState("grid");
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const location = useLocation(); // ✅ Lấy đường dẫn hiện tại

    return (
        <div className="flex h-screen">
            {/* Header */}
            <Header 
                toggleSidebar={toggleSidebar} 
                viewMode={viewMode} 
                setViewMode={setViewMode} 
            />

            {/* Sidebar trái */}
            <LeftSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

            {/* Nội dung chính */}
            <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
                <div className="flex-1 bg-white p-6 mt-16">
                    {location.pathname === "/brand-guideline" ? (
                        <BrandGuideline />
                    ) : (
                        <MainContent viewMode={viewMode} />
                    )}
                </div>
            </div>

            {/* Sidebar phải */}
            <RightSideBar />
        </div>
    );
};

export default MainPage;
