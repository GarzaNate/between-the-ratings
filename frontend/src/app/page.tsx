import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import React from "react";
import FeatureStrip from "@/components/FeatureStrip";
import BookStrip from "@/components/BookStrip";
import ReviewSection from "@/components/ReviewSection";

const Home = () => {
  console.log("Home page loaded");
  return (
    <main className="bg-background">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      <BookStrip />
      <FeatureStrip />
      <ReviewSection />
    </main>
  );
};

export default Home;
