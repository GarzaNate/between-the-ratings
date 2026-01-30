import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  console.log("Home page loaded");
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
    </main>
  );
};

export default Home;
