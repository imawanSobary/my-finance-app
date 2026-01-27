import dashboard from "../assets/myIcon/dashboard_16596694.png";
import wallet from "../assets/myIcon/wallet_2527572.png";

function SideBar() {
  return (
    <div className="sideBar bg-slate-900 w-64 h-screen flex flex-col px-6 py-8 gap-5 place-items-center">
      <div className="header-user  flex flex-none ">
        <div className="box-icon bg-pink-600 w-10 h-10">a</div>
        <div className="bio place-content-center">
          <p className="name-user text-slate-200">Lorem, ipsum.</p>
          <p className="tier text-slate-400">Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="menu-option grow">
        <div className="dashboard flex text-slate-200">
          <img src={dashboard} alt=" " className="w-5 h-5" />
          <p>Dashboard</p>
        </div>
        <div className="accounts flex">
          <img src={wallet} alt=" " className="w-5 h-5" />
          <p>Accounts</p>
        </div>
        <div className="Budgets flex">
          <img src="{dashboard}" alt=" " />
          <p>Budgets</p>
        </div>
        <div className="reports flex">
          <img src="{dashboard}" alt=" " />
          <p>Reports</p>
        </div>
        <div className="Settings flex">
          <img src="{dashboard}" alt=" " />
          <p>Settings</p>
        </div>
      </div>
      <div className="footers  text-slate-200 flex-none">
        <ol>
          <li>Help Center</li>
          <li>Log Out</li>
        </ol>
      </div>
    </div>
  );
}

export default SideBar;
