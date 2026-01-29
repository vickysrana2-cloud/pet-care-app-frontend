import React from "react";
import { FaPaw, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 px-6">
      <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 shadow-xl border border-amber-100">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center">
            <FaPaw className="text-amber-600 text-4xl" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-6xl font-extrabold text-gray-900 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-8">
          Looks like this page wandered off.  
          Let’s get you back to managing your pet.
        </p>

        {/* Action */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center gap-3
                     bg-linear-to-r from-amber-500 to-orange-500
                     text-white px-6 py-3 rounded-xl font-semibold
                     hover:shadow-lg transition"
        >
          <FaHome />
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
