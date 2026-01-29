import React from "react";
import { FaPaw } from "react-icons/fa";
import ROpetGrid from "../components/ROpetGrid";


const ExplorePetsSection = () => {
  return (
    <section id="explore" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
          <FaPaw className="text-amber-400 text-4xl" />
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Meet Our <span className="text-amber-600">Pawsome</span> Friends
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Each pet has a unique story, personality, and lots of love to give.
        </p>
      </div>

      <ROpetGrid/>
    </section>
  );
};

export default ExplorePetsSection;
