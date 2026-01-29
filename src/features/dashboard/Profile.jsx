import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaSignOutAlt, FaPaw } from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  /* ---------------- NO USER STATE ---------------- */
  if (!user || !user.email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 to-orange-100 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
          <FaPaw className="text-6xl text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-amber-900 mb-2">
            No Profile Found
          </h2>
          <p className="text-amber-700 mb-6">
            Please log in to see your Pawsitive profile
          </p>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-md"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- PROFILE ---------------- */
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 to-orange-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-amber-900">
            Your Pawsitive Profile
          </h1>
          <p className="mt-3 text-lg text-amber-700">
            A little snapshot of you and your pet journey
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-linear-to-r from-amber-500 to-orange-500 px-8 py-12 text-center">
            <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6 border-4 border-white/30">
              <FaUser className="text-6xl text-white" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-2">
              {user.name}
            </h2>

            <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-medium px-5 py-2 rounded-full">
              <FaPaw />
              Pawsitive Member
            </span>
          </div>

          {/* Content */}
          <div className="px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* name */}
              <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-xl mr-4">
                    <FaUser className="text-2xl text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-900">
                    name
                  </h3>
                </div>

                <p className="text-2xl font-bold text-amber-900">
                  {user.name}
                </p>
                <p className="mt-3 text-sm text-amber-700">
                  Your display name in Pawsitive
                </p>
              </div>

              {/* Email */}
              <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4">
                    <FaEnvelope className="text-2xl text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-900">
                    Email
                  </h3>
                </div>

                <p className="text-2xl font-bold text-amber-900 break-all">
                  {user.email}
                </p>
                <p className="mt-3 text-sm text-amber-700">
                  Used for account communication
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-12 pt-8 border-t border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-6 text-center">
                Account Actions
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-3 bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-8 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all shadow-md"
                >
                  <FaSignOutAlt />
                  Logout
                </button>

                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center justify-center bg-amber-100 text-amber-900 font-semibold py-3 px-8 rounded-xl hover:bg-amber-200 transition-all"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-amber-50 px-8 py-6 border-t border-amber-200">
            <p className="text-center text-amber-700 text-sm">
              Your profile data is safely stored in your browser
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
