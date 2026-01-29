import React from "react";
import { FaPaw, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Login from "../features/auth/Login.jsx";
import heroPet from "../assets/heropet10.png";
import SignUp from "../features/auth/SignUp.jsx";

const HeroSection = () => {
  const [authModal, setAuthModal] = useState(null);
  // null | "login" | "signup"

  const userLognedIn = localStorage.getItem("user") || null;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full mb-6">
            <FaPaw className="mr-2" />
            Join 10,000+ Pet Lovers
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Love. Care.
            <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Pawsitive.
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            The all-in-one platform for pet parents to track health, schedule
            care, and connect with a community that truly loves animals.
          </p>

          {/* 🔥 BUTTON instead of Link */}

          {!userLognedIn && (
            <button
              onClick={() => setAuthModal("login")}
              className="group bg-linear-to-r w-fit from-amber-500 to-orange-500 text-white px-8 py-4 cursor-pointer rounded-2xl font-bold flex items-center"
            >
              Start Free Trial
              <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
          )}
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-80 h-80 bg-linear-to-r from-amber-300 to-orange-400 rounded-full opacity-20 blur-3xl" />

          <img src={heroPet} alt="Happy pet" className="w-full max-w-md" />

          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
            <FaPaw className="text-amber-500" />
            <span className="text-sm font-semibold text-gray-700">
              Trusted by Pet Parents
            </span>
          </div>
        </div>
      </section>

      {/* 🔥 LOGIN POPUP */}
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

export default HeroSection;
