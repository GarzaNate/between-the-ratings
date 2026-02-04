import React from "react";

const Navbar = () => {
  return (
    <nav
      className="uppercase absolute top-0 left-0 right-0 px-8 py-4 flex items-center justify-between z-50 bg-linear-to-b from-black/60 to-transparent">
      {/* Left - Logo */}
      <div className="flex-1">
        <a href="#" className="text-4xl font-bold text-text-primary">
          <span className="text-primary">B</span>
          TR
        </a>
      </div>

      {/* Middle - Navigation Links */}
      <div className="flex gap-8 flex-1 justify-center">
        <a
          href="#"
          className="text-text-secondary hover:text-primary transition-colors font-medium"
        >
          Discover
        </a>
        <a
          href="#"
          className="text-text-secondary hover:text-primary transition-colors font-medium"
        >
          About
        </a>
      </div>

      {/* Right - Auth Buttons */}
      <div className="flex-1 flex justify-end gap-4">
        <button className="px-6 py-2 border border-primary text-text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-medium">
          Create Account
        </button>
        <button className="px-6 py-2 bg-primary text-text-primary rounded-lg transition-all font-medium">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
