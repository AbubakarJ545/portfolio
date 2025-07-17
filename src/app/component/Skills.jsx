import React from "react";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "React",
    "Next.js",
    "TypeScript",
    "Postman",
    "Functional Components",
    "Class Components",

    "Node.js",
    "Express.js",
    "MongoDB",

    "Git & GitHub",
    "Teamwork",
    "Time Management",
    "Problem Solving",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white text-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Technical Skills
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mb-10">
        A comprehensive set of technologies and tools I work with to create
        exceptional mobile applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl w-full">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl px-4 py-6 text-center font-semibold text-gray-900 hover:shadow-lg hover:bg-blue-500 hover:text-amber-50 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
