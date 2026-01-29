import React from "react";
import { FaPaw, FaUserPlus } from "react-icons/fa";
import { useState } from "react";
import Login from "../features/auth/Login.jsx";
import SignUp from "../features/auth/SignUp.jsx";

const CtaSection = () => {
  const [authModal, setAuthModal] = useState(null);

  const userLognedIn = localStorage.getItem("user") || null;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-linear-to-r from-amber-500 to-orange-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-8">
            <FaPaw className="text-white text-3xl" />
          </div>

          <h3 className="text-4xl font-black mb-6">
            Ready to Give Your Pet the Best Care?
          </h3>

          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of pet parents who trust Pawsitive every day.
          </p>

          {!userLognedIn && (
            <button
              onClick={() => setAuthModal("login")}
              className="bg-white text-amber-600 px-10 py-4 cursor-pointer rounded-2xl font-bold shadow-xl flex items-center mx-auto"
            >
              <FaUserPlus className="mr-3" />
              Start Free Account
            </button>
          )}

          <p className="mt-8 text-white/80">Your pet’s care starts here</p>
        </div>
      </section>
      {/* 🔥 AUTH MODALS (GLOBAL) */}
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

export default CtaSection;
