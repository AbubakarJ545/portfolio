"use client";
import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = [
    { name: "Home", icon: <FaHome />, link: "#hero" },
    { name: "Projects", icon: <GrProjects />, link: "#project" },
    { name: "Skills", icon: <GiSkills />, link: "#skills" },
    { name: "Work", icon: <MdWorkHistory />, link: "#exp" },
    { name: "Education", icon: <FaGraduationCap />, link: "#education" },
    { name: "Contact", icon: <FaGlobe />, link: "#contact" },
  ];

  return (
    <div className="fixed top-1 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-gray-100/80 px-6 py-2 rounded-full shadow-lg border border-gray-200">
        <div className="flex gap-9 items-center justify-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group flex flex-col items-center text-gray-600 hover:text-black transition-all duration-300"
            >
              <div className="text-xl">{item.icon}</div>
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.name}
              </span>
            </a>
          ))}

          {/* Toggle Button with "Light" or "Dark" on hover */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="group flex flex-col items-center text-gray-600 hover:text-black transition-all duration-300"
            title="Toggle Theme"
          >
            <div className="text-xl">{darkMode ? <BsSun /> : <BsMoon />}</div>
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {darkMode ? "Light" : "Dark"}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
