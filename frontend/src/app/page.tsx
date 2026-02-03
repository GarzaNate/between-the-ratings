import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import React from "react";
import FeatureStrip from "@/components/FeatureStrip";

const Home = () => {
  console.log("Home page loaded");
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      < Hero />
      <FeatureStrip />
    </main>
  );
};

export default Home;
