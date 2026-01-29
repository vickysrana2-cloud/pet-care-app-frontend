import React, { useState } from "react";
import { loginUser } from "../../services/authService";
import BunnyImage from "../../assets/loginPet.png";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = ({ close, openSignup }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);

      // console.log("Login response:", response);
      // console.log("Login Data:", formData);
      // console.log("Response Status:", response.status);

      if (response.email === formData.email) {
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/dashboardpage");
      }

    } catch (err) {
      console.error("Login error:", err.response.data);
    }finally{
      setFormData({
        email: "",
        password: "",
      });
      close();
    }
  };

  return (
    /* OVERLAY */
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      {/* MODAL */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-3xl text-amber-600 hover:text-amber-800 transition"
        >
          <FaTimes />
        </button>

        {/* Left Image Section */}
        <div className="hidden md:flex items-center justify-center bg-amber-100 p-8">
          <div className="flex flex-col items-center">
            <img
              src={BunnyImage}
              alt="Cute rabbits"
              className="w-full max-w-sm object-contain drop-shadow-xl"
            />
            <p className="text-xs tracking-wide text-amber-700 text-center mt-4">
              Because even the smallest paws deserve big care.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-amber-900">
              Welcome Back
            </h2>
            <p className="text-slate-500 mt-2">
              Log in to continue caring for your pets
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-amber-800 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-amber-800 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-amber-200 transition active:scale-95"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-slate-500 mt-6">
            New to Pawsitive?{" "}
            <button
              onClick={openSignup}
              className="text-amber-600 font-semibold hover:underline"
            >
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
