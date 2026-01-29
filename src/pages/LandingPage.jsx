import React from "react";
import { useEffect } from "react";
import Header from "../sections/Header";
import HeroSection from "../sections/HeroSection";
import ExplorePetsSection from "../sections/ExplorePetsSection";
import FeaturesSection from "../sections/FeaturesSection";
import CtaSection from "../sections/CtaSection";
import Footer from "../sections/Footer";
import PetBlog from "../components/PetBlog";




const LandingPage = () => {
  
  
   useEffect(()=>{
    document.title = "Pawsitive - Home";
  },[]);

  return (
    <div className="bg-linear-to-br from-amber-50 to-orange-100">
      <Header />
      <HeroSection />
      <ExplorePetsSection />
      <FeaturesSection />
      <CtaSection />
      <PetBlog />
      <Footer />
    </div>
  );
};

export default LandingPage;
