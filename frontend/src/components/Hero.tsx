import React from "react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center bg-background text-white">
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="rounded-4xl border border-white/10 bg-background-elevated/90 p-10 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.85)] backdrop-blur-xl">
          <div className="rounded-full bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-sky-300 ring-1 ring-white/10 backdrop-blur-sm">
            Designed for thoughtful readers
          </div>

          <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            A sharper way to track, review, and discover books.
          </h1>

          <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
            Capture your reading journey with minimal distraction. Share honest
            thoughts, follow people you trust, and keep your next reads within reach.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-full bg-sky-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
              Explore reviews
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-sky-300 hover:text-sky-300">
              Start your reading list
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
