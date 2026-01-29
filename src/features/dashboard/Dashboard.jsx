import DashboardHeader from "../dashboard/DashboardHeader";
import DashboardStats from "../dashboard/DashboardStats";
import PetGrid from "../pets/PetGrid";


const Dashboard = () => {


  return (
    <div className="space-y-10">
      <DashboardHeader />

      <DashboardStats />

      <section>
        <h3 className="text-2xl font-bold text-amber-900 mb-6">
          Your Pets
        </h3>
        <PetGrid />
      </section>
    </div>
  );
};

export default Dashboard;
