import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./components/sidebar";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app flex flex-nowrap">
      <SideBar />
      <div className="menu">
        <Navbar />
        <div className="content" id="detail">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
