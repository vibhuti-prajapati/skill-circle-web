import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Sidebar from "../Header/Sidebar";

const AppLayout = () => {
  return (
    <div className="h-screen flex flex-col">

      {/* TOP — always visible */}
      <Navbar />

      {/* BELOW NAVBAR */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebars */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AppLayout;
