import React from "react";
import { MdSearch } from "react-icons/md";
import Piplup from "../assets/retratosanime-1060.jpg";

function NavBar() {
  return (
    <div className="header h-20 w-fit px-8 py-4 gap-75 flex justify-between bg-slate-800">
      <div className="search-bar text-slate-200 flex flex-wrap items-center-safe order-1">
        <MdSearch className="search" />
        <input
          className="placeholder:text-gray-500 
        placeholder:italic  
        border-1 rounded-xl border-slate-300 w-110 h-10
        p-4 search"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </div>
      <div className="user-profile order-2">
        <div className="header-user  flex flex-none gap-5 items-center-safe ">
          <div className="bio place-content-center">
            <p className="name-user text-slate-200 text-xl">Lorem, ipsum.</p>
            <p className="tier text-slate-400 text-sm">Lorem, ipsum dolor.</p>
          </div>
          <div className="box-icon w-10 h-10">
            <img src={Piplup} alt="piplup" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
