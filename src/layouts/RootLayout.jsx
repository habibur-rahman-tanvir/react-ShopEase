import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="mt-16 overflow-y-auto flex-1 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
