import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./components/Sidebar";
import Navbar from './components/navbar';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="app flex flex-nowrap">
      <SideBar />
      <Navbar />
    </div>
  );
}

export default App;
