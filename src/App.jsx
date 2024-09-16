import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;