import { RiDashboardFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdAccountBalanceWallet, MdLiveHelp } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdSettings, IoMdExit } from "react-icons/io";
import Piplup from "../assets/retratosanime-1060.jpg";
import { Outlet, Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sideBar bg-slate-800 w-64 h-screen flex flex-col px-6 py-3 gap-5  mb-6">
      <div className="header-user  flex flex-none gap-2 items-center-safe rounded-full">
        <div className="box-icon w-10 h-10  ">
          <img src={Piplup} alt="piplup" className="rounded-full" />
        </div>
        <div className="bio place-content-center">
          <p className="name-user text-slate-200 text-md">Lorem, ipsum.</p>
          <p className="tier text-slate-400 text-sm">Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="menu-option grow text-slate-200 text-md ">
        <div className="dashboard flex gap-3 mb-5 items-center-safe">
          <RiDashboardFill />
          <Link to={`dashboard`}>Dashboard</Link>
        </div>
        <div className="accounts flex gap-3 mb-5 items-center-safe">
          <MdAccountBalanceWallet />
          <Link to={`account`}>Account</Link>
        </div>
        <div className="Budgets flex gap-3 mb-5 items-center-safe">
          <RiMoneyDollarCircleFill />
          <Link to={`budget`}>Budget</Link>
        </div>
        <div className="reports flex gap-3 mb-5 items-center-safe">
          <HiOutlineDocumentReport />
          <Link to={`report`}>Report</Link>
        </div>
        <div className="Settings flex gap-3 mb-5 items-center-safe">
          <IoMdSettings />
          <Link to={`setting`}>Setting</Link>
        </div>
      </div>
      <div className="footers  text-slate-200 flex-none">
        <div className="help flex gap-3 mb-5 items-center-safe">
          <MdLiveHelp />
          <Link to={`help`}>Help Desk</Link>
          {/* <p>Help Desk</p> */}
        </div>
        <div className="logOut flex gap-3 mb-5 items-center-safe ">
          <IoMdExit />
          {/* <p>Log Out</p> */}
          <Link to={`/`}>Log Out</Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
