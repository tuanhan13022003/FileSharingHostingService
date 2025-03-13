import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./page/Home/Home";
import BrandGuideline from "./page/Brand Guideline/BrandGuideline";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/brand-guideline" element={<BrandGuideline />} />
      </Routes>
    </Router>
  );
};

export default App;