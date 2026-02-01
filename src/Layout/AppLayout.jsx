import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Sidebar from "../Header/Sidebar";
import ProfileModal from "../components/ProfileModal"
const AppLayout = () => {
  return (
    <div data-theme="dark" className="h-screen flex flex-col">

      {/* TOP — always visible */}
      <Navbar />

      {/* BELOW NAVBAR */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebars */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-base-100">
          <Outlet />
        </main>

      </div>
      <ProfileModal />
    </div> 
  );
};

export default AppLayout;
