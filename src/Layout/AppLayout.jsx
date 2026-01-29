import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Sidebar from "../Header/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex h-screen">

      {/* Sidebar always visible */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Navbar always visible */}
        <Navbar />

        {/* Page content changes here */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default AppLayout;