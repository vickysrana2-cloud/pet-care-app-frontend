import React, { useState } from "react";
import Logo from "../../sections/Logo";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    setOpen(false);
  };

  const userName= JSON.parse(localStorage.getItem("user"))?.name || "User";

  // console.log("NavBar userName:", userName);

 const firstLetter = userName
  .trim()
  .split(/\s+/)        // split by one or more spaces
  .slice(0, 2)         // take first & last name only
  .map(word => word[0])
  .join("")
  .toUpperCase();


  // console.log("NavBar firstLetter:", firstLetter);


  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem
              label="Home"
              onClick={() => handleNavClick("/dashboardpage")}
            />
            <NavItem
              label="Pets"
              onClick={() => handleNavClick("/dashboardpage/pets")}
            />

            {/* Premium Profile */}
            <ProfileNavItem
            firstLetter={firstLetter}
              onClick={() =>
                handleNavClick("/dashboardpage/profile")
              }
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-amber-600"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="md:hidden mt-4 space-y-3">
            <MobileNavItem
              label="Home"
              onClick={() => handleNavClick("/dashboardpage")}
            />
            <MobileNavItem
              label="Pets"
              onClick={() => handleNavClick("/dashboardpage/pets")}
            />

            {/* Mobile Profile */}
            <MobileProfileNavItem
            firstLetter={firstLetter}
              onClick={() =>
                handleNavClick("/dashboardpage/profile")
              }
            />
          </div>
        )}
      </div>
    </header>
  );
};

/* ---------- Reusable UI Items ---------- */

const NavItem = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="text-gray-700 hover:text-amber-600 
               font-medium transition-colors"
  >
    {label}
  </button>
);

/* ---------- Premium Profile (Desktop) ---------- */

const ProfileNavItem = ({ onClick, firstLetter }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-3 py-1.5
               rounded-full border border-amber-200
               bg-amber-50 hover:bg-amber-100
               transition shadow-sm"
  >
    {/* Avatar */}
    <div className="w-8 h-8 flex items-center justify-center
                    rounded-full bg-amber-600 text-white
                    font-semibold text-sm">
      {firstLetter ? (
        firstLetter
      ) : (
        <FaUserCircle className="text-xl" />
      )}
    </div>

    {/* Label */}
    <span className="text-sm font-medium text-amber-800">
      Profile
    </span>
  </button>
);

/* ---------- Mobile Items ---------- */

const MobileNavItem = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="block w-full text-left 
               text-gray-700 hover:text-amber-600 
               font-medium"
  >
    {label}
  </button>
);

const MobileProfileNavItem = ({ onClick, firstLetter }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 w-full 
               px-4 py-2 rounded-lg 
               bg-amber-50 border border-amber-200 
               text-amber-800 font-medium"
  >
    {/* Avatar */}
    <div className="w-8 h-8 flex items-center justify-center
                    rounded-full bg-amber-600 text-white
                    font-semibold text-sm">
      {firstLetter ? (
        firstLetter
      ) : (
        <FaUserCircle className="text-xl" />
      )}
    </div>

    Profile
  </button>
);

export default NavBar;
