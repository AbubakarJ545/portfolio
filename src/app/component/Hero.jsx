"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col md:flex-row items-center justify-center md:gap-10 px-6 py-10 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center md:text-left transition-colors"
    >
      {/* Image Left */}
      <div className="relative w-40 h-40 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-blue-500 shadow-lg mb-6 md:mb-0 md:mr-10">
        <Image
          src="/profile.enc"
          alt="Profile Picture"
          fill
          className="object-cover"
        />
      </div>

      {/* Text Right */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Abubakar Jamal
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4 max-w-md">
          MERN Stack Developer | React & Next.js Enthusiast
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2 mb-6 max-w-md">
          Passionate about building robust web applications in MERN stack
          development. Specialized in developing scalable, full-stack solutions
          using MongoDB, Express.js, React.js, and Node.js—delivering
          high-performance, user-friendly interfaces and efficient backend
          systems.
        </p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start mb-4">
          <a
            href="/Abubakar-webDevResume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all"
          >
            Resume
          </a>
          <a
            href="#project"
            className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-full transition-all"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-full transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
