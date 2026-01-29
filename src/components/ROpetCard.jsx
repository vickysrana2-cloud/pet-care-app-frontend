import React from "react";
import { FaStar } from "react-icons/fa";

const ROpetCard = ({ pet, onClick }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="group bg-white rounded-3xl border border-amber-100 shadow-sm
                 cursor-pointer transition-all duration-300
                 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100/60
                 focus:outline-none focus:ring-2 focus:ring-amber-400"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-3xl">
        <img
          src={pet.image}
          alt={pet.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform
                     duration-500 group-hover:scale-110"
        />

        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur
                         px-3 py-1 rounded-full text-xs font-semibold
                         text-amber-700 shadow capitalize">
          {pet.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title & Rating */}
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-lg font-semibold text-amber-900">
            {pet.name}
          </h3>

          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
            <FaStar className="text-amber-500 text-xs" />
            <span className="text-sm font-semibold text-amber-700">
              {pet.rating}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="text-sm text-slate-500">
          {pet.age}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 line-clamp-2">
          {pet.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {pet.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2.5 py-1 bg-amber-50
                         text-amber-700 rounded-lg font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-amber-100 flex justify-between">
          <span className="text-xs text-slate-400 font-medium">
            View details
          </span>
          <span className="text-xs font-semibold text-amber-600 opacity-0
                           translate-x-2 transition-all
                           group-hover:opacity-100 group-hover:translate-x-0">
            →
          </span>
        </div>
      </div>
    </div>
  );
};

export default ROpetCard;
