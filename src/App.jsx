// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop"; 
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Experience from "./pages/Experience";
// import Certificates from "./pages/Certificates";
// import Connect from "./pages/Connect";

// const App = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
     
//       <Navbar />

//       <ScrollToTop /> 

//       <main className="flex-grow pt-24">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/certificates" element={<Certificates />} />
//           <Route path="/connect" element={<Connect />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default App;
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Connect from "./pages/Connect";
import ParticlesBackground from "./components/ParticlesBackground"; // ✅ Add this

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* 🌌 Particle Background */}
      <ParticlesBackground />

      {/* 🔝 Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">

        <Navbar />
        <ScrollToTop />

        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;