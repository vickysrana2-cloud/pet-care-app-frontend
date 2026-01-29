
import React from "react";


// Pages
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";

// Features
import ProtectedRoute from "./routes/ProtectedRoute";
import PetGrid from "./features/pets/PetGrid";
import PetDetails from "./features/pets/PetDetails";
import Dashboard from "./features/dashboard/Dashboard";
import Profile from "./features/dashboard/Profile";




export const routeConfig = [
  // Marketing / Public Routes
  {
    path: "/",
    element: <LandingPage />,
  },

  // Dashboard / Internal App Group
  {
    element: <ProtectedRoute />,
    children:[
      {
        path: "/dashboardpage",
        element: <DashboardPage /> , // This acts as your layout with Navbar & Sidebar
        children: [
          { index: true, element: <Dashboard /> },
          {path: "profile", element: <Profile />},
          { 
            path: "pets", 
            children: [
              { index: true, element: <PetGrid /> },
              { path: ":id", element: <PetDetails /> },
            ]
          },
        ],
      }
    ]
  },

  // Fallback 404
  {
    path: "*",
    element: <NotFound />,
  },
];