import React from "react";
import { MdSearch } from "react-icons/md";

function NavBar() {
  return (
    <div className="header h-full w-screen px-8 py-4 gap-8 flex items-center justify-between bg-slate-900">
      <div className="search-bar text-slate-200 flex flex-wrap items-center-safe">
                <MdSearch className="search"/>
        <input className="placeholder:text-gray-500 
        placeholder:italic  
        border-b border-slate-300 w-110 h-10
        p-4 search"
  placeholder="Search for anything..."
  type="text"
          name="search" />

      </div>
      <div className="user-profile">
        <div className="header-user  flex flex-none gap-5 items-center-safe ">
                <div className="bio place-content-center">
                  <p className="name-user text-slate-200 text-xl">Lorem, ipsum.</p>
            <p className="tier text-slate-400 text-sm">Lorem, ipsum dolor.</p>
          </div>
                          <div className="box-icon w-10 h-10 bg-pink-600">
                  {/* <img src={Piplup} alt="piplup" /> */}
                </div>
              </div>
      </div>
    </div>
  );
}

export default NavBar;
