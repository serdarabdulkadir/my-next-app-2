"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["About", "#About"],
    ["Technologies", "#Technologies"],
    ["Products", "#Product"],
    ["Discover", "#Discover"],
    ["Team", "#Team"],
    ["Pricing", "#Pricing"],
    ["Buy Premium", "#Buy_Premium"],
  ];

  // ESC ile menüyü kapatma
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center h-16 md:h-20 relative">
        {/* Logo */}
        <div className="flex justify-center w-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-50">
          <Link href="#Hero" className="flex items-center gap-2">
            <img src="vector.svg" alt="logo" className="w-6 h-6" />
            <span className="text-base md:text-lg font-medium tracking-wide text-white">
              Promptverse AI
            </span>
          </Link>
        </div>

        {/* Desktop Menü */}
        <ul className="hidden lg:flex items-center space-x-10 text-sm md:text-base font-normal z-50 text-white">
          {links.slice(0, 4).map(([name, link]) => (
            <li key={name}>
              <Link
                href={link}
                className="hover:text-gray-300 transition transform hover:scale-105"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="hidden lg:flex items-center space-x-10 text-sm md:text-base font-normal z-50 text-white">
          {links.slice(4).map(([name, link]) => (
            <li key={name}>
              <Link
                href={link}
                className="hover:text-gray-300 transition transform hover:scale-105"
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#"
              className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-neutral-200 transition transform hover:scale-105 shadow-sm"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Hamburger Menü Butonu */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((s) => !s)}
          className="lg:hidden p-2 rounded-md hover:bg-neutral-800 transition z-50 text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobil Menü Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-max-h duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } bg-black`}
      >
        <ul className="flex flex-col items-center gap-6 py-4 text-lg text-white">
          {links.map(([name, link]) => (
            <li key={name}>
              <Link
                href={link}
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300 transition transform hover:scale-105"
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#"
              onClick={() => setMenuOpen(false)}
              className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-neutral-200 transition transform hover:scale-105 shadow-sm"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
