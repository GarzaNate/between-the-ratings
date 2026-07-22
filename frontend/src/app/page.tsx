import Navbar from "@/components/layout/Navbar";
import Hero from "@/features/home/components/Hero";
import React from "react";
import FeatureStrip from "@/features/books/components/FeatureStrip";
import BookStrip from "@/features/books/components/BookStrip";
import ReviewSection from "@/features/home/components/ReviewSection";

const Home = () => {
  console.log("Home page loaded");
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <BookStrip />
      <FeatureStrip />
      <ReviewSection />
    </main>
  );
};

export default Home;
