import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import React from "react";
import FeatureStrip from "@/components/FeatureStrip";
import BookStrip from "@/components/BookStrip";

const Home = () => {
  console.log("Home page loaded");
  return (
    <main className="bg-background min-h-screen">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      <BookStrip />
      <FeatureStrip />
    </main>
  );
};

export default Home;
