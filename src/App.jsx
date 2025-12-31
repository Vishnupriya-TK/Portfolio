import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Connect from "./pages/Connect";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* NAVBAR – appears on ALL pages */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-grow pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>

      {/* FOOTER – appears on ALL pages */}
      <Footer />
    </div>
  );
};

export default App;
