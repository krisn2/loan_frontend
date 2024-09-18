import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Contact from "./component/contect";
import Loans from "./component/loans";
import Apply from "./component/Apply";
import Footer from "./component/footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
     
        <Navbar />
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Hero />} />
          <Route path="/loans" element={<Loans />} /> {/* You can reuse Hero for Loans */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />}></Route>
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
        </div>

    </Router>
  );
};

export default App;
