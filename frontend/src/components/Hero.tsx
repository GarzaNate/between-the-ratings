import React from "react";
import Image from "next/image";
// import heroImage from "../../public/bookReviewHeroImg.png";

const Hero = () => {
  const images = [
    "/covers/cover1.jpg",
    "/covers/cover2.jpg",
    "/covers/cover3.jpg",
    "/covers/cover4.jpg",
    "/covers/cover5.jpg",
    "/covers/cover6.jpg",
    "/covers/cover7.jpg",
    "/covers/cover8.jpg",
    "/covers/cover9.jpg",
    "/covers/cover10.jpg",
    "/covers/cover11.jpg",
    "/covers/cover12.jpg",
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background collage */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-1 brightness-75">
        {images.map((src, i) => (
          <div
            key={i}
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-background" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-2xl px-10 pb-24 text-white space-y-6">
          <span className="uppercase tracking-widest text-sm text-accent">
            The hub for passionate readers
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Track books.
            <br />
            Write reviews.
            <br />
            Discover your next favorite.
          </h1>

          <p className="text-lg text-text-secondary max-w-xl">
            Build your reading identity. Follow friends. Share opinions. Create
            a living library of everything you’ve read and want to read.
          </p>

          <div className="flex gap-4 pt-4">
            {/* <button className="px-6 py-3 rounded-lg bg-primary hover:opacity-90 transition">
              Create free account
            </button> */}
            <button className="px-6 py-3 rounded-lg bg-primary hover:opacity-90 transition">
              Explore reviews
            </button>
          </div>

          <p className="text-sm text-text-muted pt-2">
            Not Goodreads. Not Amazon. Built for readers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
