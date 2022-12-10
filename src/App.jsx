import React from "react";
import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[317px] h-[780px] flex flex-col justify-between bg-[#1A1B21] rounded-[10px]">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
