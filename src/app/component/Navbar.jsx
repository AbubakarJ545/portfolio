"use client";
import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaHome, FaGlobe, FaGraduationCap } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
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
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-gray-100/80 dark:bg-gray-800/80 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-9">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300"
            >
              <div className="text-sm sm:text-base">{item.icon}</div>
              <span className="text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.name}
              </span>
            </a>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="group flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300"
            title="Toggle Theme"
          >
            <div className="text-sm sm:text-base">
              {darkMode ? <BsSun /> : <BsMoon />}
            </div>
            <span className="text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {darkMode ? "Light" : "Dark"}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
