import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PuppyImg from "../../assets/signupPet.png";
import { signupUser } from "../../services/authService";

const SignUp = ({ close, openLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await signupUser(formData);
      alert("Signup successful");
    } catch (error) {
      if (error.response) {
        alert(error.response.data); // Email already registered
      } else {
        alert("Something went wrong");
      }
    } finally {
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      close();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Image Section */}
        <div className="hidden md:flex items-center justify-center bg-linear-to-br from-amber-100 to-orange-200 p-10">
          <div className="text-center">
            <img src={PuppyImg} alt="Cute puppy" />
            <h3 className="mt-6 text-2xl font-bold text-amber-900">
              Welcome to Pawsitive
            </h3>
            <p className="text-amber-800 mt-2 text-sm">
              Care, track, and love your pets in one place
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-8 md:p-12">
          <div className="mb-8 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <span className="text-2xl">🐾</span>
            </div>
            <h2 className="text-3xl font-extrabold text-amber-900">
              Create Account
            </h2>
            <p className="text-slate-500 mt-2">
              Join and start managing your furry friends
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 focus:ring-2 focus:ring-amber-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 focus:ring-2 focus:ring-amber-400 outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 focus:ring-2 focus:ring-amber-400 outline-none"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 focus:ring-2 focus:ring-amber-400 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-amber-200 transition active:scale-95"
            >
              SignUp
            </button>
          </form>

          <button
            onClick={close}
            className="absolute top-4 right-4 text-3xl text-amber-600 hover:text-amber-800"
          >
            <FaTimes />
          </button>

          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{" "}
            <button
              onClick={openLogin}
              className="text-amber-600 font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
