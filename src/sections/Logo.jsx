import React from "react";
import { FaPaw, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div  onClick={()=>navigate("/")} className="flex items-center space-x-2 cursor-pointer">
      <div className="relative">
        <FaPaw className="text-amber-500 text-3xl animate-pulse" />
        <FaHeart className="text-rose-500 text-xs absolute -top-1 -right-1 animate-bounce" />
      </div>

      <span className="text-2xl font-black bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
        Pawsitive
      </span>
    </div>
  );
};

export default Logo;
