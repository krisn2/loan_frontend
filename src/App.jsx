import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Contact from "./component/contect";
import bg from "./assets/bg.jpeg";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* <div  className="min-h-screen bg-cover bg-center text-neutral-300"
        style={{
          backgroundImage: `url(${bg})`,
          width: '100%',
          height: '100vh',
          fixed: 'true',
        }}> */}
        <Navbar />
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Hero />} />
          <Route path="/loans" element={<Hero />} /> {/* You can reuse Hero for Loans */}
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        </div>
      {/* </div> */}
    </Router>
  );
};

export default App;
