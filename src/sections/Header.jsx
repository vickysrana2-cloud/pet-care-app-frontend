import React, { useState } from "react";
import Logo from "../sections/Logo";
import Login from "../features/auth/Login.jsx";
import SignUp from "../features/auth/SignUp.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null);

  const userLognedIn = localStorage.getItem("user") || null;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#explore" className="hover:text-amber-600">Explore Pets</a>
              <a href="#features" className="hover:text-amber-600">Features</a>
              <Link to="/dashboardpage" className="hover:text-amber-600">Dashboard</Link>

            {
              !userLognedIn && (
              <button
                onClick={() => setAuthModal("login")}
                className="bg-linear-to-r from-amber-500 to-orange-500 text-white px-5 py-2 rounded-xl cursor-pointer font-semibold hover:shadow-lg transition"
              >
                Get Started
              </button>
              )
            }


            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-amber-600"
              aria-label="Toggle Menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-amber-100">
            <nav className="flex flex-col space-y-4 px-6 py-6">
              <a href="#explore" className="hover:text-amber-600" onClick={() => setIsOpen(false)}>Explore Pets</a>
              <a href="#features" className="hover:text-amber-600" onClick={() => setIsOpen(false)}>Features</a>
              <Link to="/dashboardpage" className="hover:text-amber-600" onClick={() => setIsOpen(false)}>Dashboard</Link>

              {
                !userLognedIn && (
                  <button
                    onClick={() => {
                      setAuthModal("login");
                      setIsOpen(false);
                    }}
                    className="bg-linear-to-r from-amber-500 to-orange-500 text-white py-2 cursor-pointer rounded-xl font-semibold"
                  >
                    Get Started
                  </button>
                )
              }
            </nav>
          </div>
        )}
      </header>

      {/* AUTH MODALS (GLOBAL) */}
      {authModal === "login" && (
        <Login
          close={() => setAuthModal(null)}
          openSignup={() => setAuthModal("signup")}
        />
      )}

      {authModal === "signup" && (
        <SignUp
          close={() => setAuthModal(null)}
          openLogin={() => setAuthModal("login")}
        />
      )}
    </>
  );
};

export default Header;
