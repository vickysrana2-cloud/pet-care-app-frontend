import NavBar from "../features/dashboard/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const DashboardPage = () => {

  useEffect(() => {
    document.title = "Pawsitive - Dashboard";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 bg-linear-to-br from-amber-50 to-orange-100">
      <NavBar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardPage;
