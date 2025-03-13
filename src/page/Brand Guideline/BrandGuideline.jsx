
// import React, { useState } from "react";
// import Header from "../../components/Header/Header.jsx";
// import HeaderMainContent from "../../components/MainContents/HeaderMainContens.jsx";
// import LeftSidebar from "../../components/SideBar/LeftSideBar.jsx";
// import RightSideBar from "../../components/SideBar/RightSideBar.jsx";
// //import MainContent from "../../components/MainContents/MainContents.jsx";
// const BrandGuideline = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };
//     return (
//         <div className="flex h-screen">
//             {/* Header */}
//             <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//             {/* Sidebar trái */}
            
//             <LeftSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

//             {/* Phần chính của trang */}
//             <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
                

//                 {/* Nội dung chính */}
//                 <div className="flex-1  bg-white p-6 mt-16">

//                 <HeaderMainContent setViewMode={setViewMode} />
//                     <BrandGuideline />


//                 </div>
//             </div>

//             {/* Sidebar phải */}
//             <RightSideBar />
//         </div>
//     );
// };

// export default BrandGuideline;

import React, { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import HeaderMainContent from "../../components/MainContents/HeaderMainContens.jsx";
import LeftSidebar from "../../components/SideBar/LeftSideBar.jsx";
import RightSideBar from "../../components/SideBar/RightSideBar.jsx";
import FileList from "../../components/Brand Guideline/FileList.jsx";
const BrandGuideline = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen">
            {/* Header */}
            <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            {/* Sidebar trái */}
            <LeftSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(!isSidebarOpen)} />

            {/* Phần chính của trang */}
            <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
                
                {/* Nội dung chính */}
                <div className="flex-1 bg-white p-6 mt-16">                   
                    <FileList/>
                </div>
            </div>

            {/* Sidebar phải */}
            <RightSideBar />
        </div>
    );
};

export default BrandGuideline;
