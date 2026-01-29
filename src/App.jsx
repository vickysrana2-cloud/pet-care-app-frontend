// import React, { useState } from "react";
// import LandingPage from "./pages/LandingPage";
// import DashboardPage from "./pages/DashboardPage";

// const App = () => {


//   return (
//     <div className="min-h-screen">
//       <DashboardPage/>
//       <LandingPage />
//     </div>
//   );
// };

// export default App;

// src/App.jsx
import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { routeConfig } from "./routes";

const AppContent = () => {
  // This generates the JSX based on your object
  const routes = useRoutes(routeConfig);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans antialiased text-slate-900 bg-white">
        <AppContent />
      </div>
    </BrowserRouter>
  );
};

export default App;