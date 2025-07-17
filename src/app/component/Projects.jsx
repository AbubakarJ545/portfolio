import React from "react";

export default function Projects() {
  const buttons = [
    "Next.js",
    "MongoDB-Atlas",
    "Tailwind-CSS",
    "NextAuth.js",
    "Vercel",
  ];

  const buttons1 = [
    "React",
    "Redux-Toolkit",
    "Tailwind-CSS",
    "OpenWeatherMap-AP",
  ];
  const buttons2 = ["React.js", "React-Router-DOM", "HTML5", "CSS3"];
  return (
    <div id="project" className="min-h-screen px-6 py-12 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Here are some of the projects I've worked on, showcasing skills in
          full-stack development and UI/UX design.
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center items-stretch gap-6">
        <div className="card bg-base-100 w-full sm:w-[22rem] shadow-md flex flex-col rounded-2xl">
          <a
            href="https://jamalfoodexpress.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="relative h-48 overflow-hidden group cursor-pointer">
              <img
                src="/Untitled.png"
                alt="Project"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
            </figure>
          </a>

          <div className="card-body flex-1 flex flex-col items-center p-4 text-center">
            <div>
              <h2 className="card-title justify-center font-extrabold">
                Jamal Food Express
              </h2>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Full-Stack Web Application
              </p>
            </div>
            <div className="card-actions justify-end mt-4">
              <div className="flex flex-wrap gap-3 justify-center items-center">
                {buttons.map((item, index) => (
                  <button
                    key={index}
                    className="py-2 px-4 rounded shadow-md bg-white border border-gray-200 hover:shadow-lg transition
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600
                   hover:from-purple-600 hover:to-blue-500"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Secend Card */}
        <div className="card bg-base-100 w-full sm:w-[22rem] shadow-md flex flex-col rounded-2xl">
          <a
            href="https://weather-by-jamal.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="relative h-48 overflow-hidden group cursor-pointer">
              <img
                src="/Untitled1.png"
                alt="Project"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
            </figure>
          </a>

          <div className="card-body flex-1 flex flex-col items-center p-4 text-center">
            <div>
              <h2 className="card-title justify-center font-extrabold">
                Weather Application
              </h2>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                React & Redux Toolkit
              </p>
            </div>
            <div className="card-actions justify-end mt-4">
              <div className="flex flex-wrap gap-3 justify-center items-center">
                {buttons1.map((item, index) => (
                  <button
                    key={index}
                    className="py-2 px-4 rounded shadow-md bg-white border border-gray-200 hover:shadow-lg transition
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600
                   hover:from-purple-600 hover:to-blue-500"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="card bg-base-100 w-full sm:w-[22rem] shadow-md flex flex-col rounded-2xl">
          <figure className="relative h-48 overflow-hidden  group">
            <img
              src="/Untitled3.png"
              alt="Project"
              className="w-full h-full object-contain  transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
          </figure>

          <div className="card-body flex-1 flex flex-col items-center p-4 text-center">
            <div>
              <h2 className="card-title justify-center font-extrabold">
                CRUD Application
              </h2>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                React.js
              </p>
            </div>
            <div className="card-actions justify-end mt-4">
              <div className="flex flex-wrap gap-3 justify-center items-center">
                {buttons2.map((item, index) => (
                  <button
                    key={index}
                    className="py-2 px-4 rounded shadow-md bg-white border border-gray-200 hover:shadow-lg transition
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600
                   hover:from-purple-600 hover:to-blue-500"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
