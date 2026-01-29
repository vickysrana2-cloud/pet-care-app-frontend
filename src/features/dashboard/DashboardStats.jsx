import React, { useEffect, useState } from "react";
import { FaBell, FaHeart } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { getDashboardStats } from "../../services/dashboardStatsService";

const DashboardStats = () => {

  const [stat , setStat] = useState({});

  const user =JSON.parse(localStorage.getItem("user"));
  const userId =user?.id;
  // console.log("User ID in DashboardStats:", userId);  

  useEffect(()=>{

    if(!userId) return; 

    const featchStats = async() =>{
      try{
        const response = await getDashboardStats (userId);
        setStat (response);
      }catch(error){
        console.error("Failed to fetch dashboard stats", error);
      }
    }

    featchStats();

  },[userId]);

  // console.log("Dashboard Stats:", stat); 

  const { totalPets, totalReminders, totalHealth } = stat;


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        icon={<MdPets className="w-6 h-6 text-amber-600" />}
        label="Total Pets"
        value={totalPets}
        bg="bg-amber-100"
      />

      <StatCard
        icon={<FaBell className="w-6 h-6 text-orange-600" />}
        label="Pending Reminders"
        value={totalReminders}
        bg="bg-orange-100"
      />

      <StatCard
        icon={<FaHeart className="w-6 h-6 text-green-600" />}
        label="Pending Health Status"
        value={totalHealth}
        bg="bg-green-100"
      />
    </div>
  );
};

const StatCard = ({ icon, label, value, bg }) => (
  <div className="bg-white p-6 rounded-3xl border border-amber-50 shadow-sm flex items-center gap-4">
    <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-slate-400">
        {label}
      </p>
      <p className="text-2xl font-bold text-amber-900">
        {value}
      </p>
    </div>
  </div>
);

export default DashboardStats;
