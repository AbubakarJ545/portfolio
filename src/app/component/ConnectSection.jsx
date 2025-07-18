"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";
import { SlSocialLinkedin } from "react-icons/sl";

export default function ConnectSection() {
  const icons = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Email",
      link: "mailto:abubakarjamal840@gmail.com",
      bg: "bg-red-500",
      glow: "rgba(239,68,68,0.8)", // red-500
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: "Phone",
      link: "tel:+923026828404",
      bg: "bg-green-500",
      glow: "rgba(34,197,94,0.8)", // green-500
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      label: "WhatsApp",
      link: "https://wa.me/923026828404",
      bg: "bg-emerald-500",
      glow: "rgba(16,185,129,0.8)", // emerald-500
    },
    {
      icon: <SlSocialLinkedin className="w-8 h-8" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/abubakar-jamal-8b2716350/",
      bg: "bg-blue-700",
      glow: "rgba(59,130,246,0.8)", // blue-700
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-24 px-6 text-center bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* 🔥 Keyframes for colorful glowing animation */}
      <style jsx>{`
        @keyframes glowPulse {
          0%,
          100% {
            box-shadow: 0 0 15px var(--glow-color);
          }
          50% {
            box-shadow: 0 0 30px var(--glow-color);
          }
        }

        .glow-animate {
          animation: glowPulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Glow background bubbles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
        Get in Touch
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Looking to collaborate or hire? Let’s work together to craft something
        impactful.
      </p>

      <div className="flex justify-center gap-10 flex-wrap">
        {icons.map((item, idx) => (
          <div key={idx} className="relative group">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                "--glow-color": item.glow,
              }}
              className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${item.bg} flex items-center justify-center text-white transition-all duration-300 hover:scale-110 glow-animate`}
            >
              {item.icon}
            </a>
            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 px-2 py-1 rounded shadow transition-all duration-300">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
