import React from "react";
import { Briefcase, Calendar, Building2 } from "lucide-react";

export default function ExperienceCard() {
  return (
    <section
      id="exp"
      className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 flex flex-col items-center text-gray-800 dark:text-white transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-2">
        Professional Journey
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
        My experience in Web Development has shaped my expertise in creating
        innovative solutions.
      </p>

      <div className="relative w-full max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full border-l-4 border-blue-100 dark:border-blue-900"></div>

        {/* Experience Card 1 */}
        <div className="ml-10 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 relative transition-colors duration-300">
          <div className="absolute -left-5 top-6 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            <Briefcase size={18} className="text-white" />
          </div>

          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            MERN Stack Developer
          </h3>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 text-sm">
            <Building2 size={16} />
            <span>NexTek Solutions</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
            <Calendar size={16} />
            <span>Jan 2025 – May 2025</span>
            <span className="ml-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-0.5 text-xs rounded-full">
              5m
            </span>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">Key Responsibilities:</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
              <li>
                Developed dynamic, responsive web applications. Worked with
                senior developers on UI/UX. Improved performance and usability.
              </li>
              <li>Write high-quality code following best practices</li>
              <li>Integrate external APIs</li>
              <li>
                Publish responsive and SEO-optimized web apps with Next.js to
                Vercel and other cloud platforms
              </li>
            </ul>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className="ml-10 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 relative transition-colors duration-300 mt-8">
          <div className="absolute -left-5 top-6 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            <Briefcase size={18} className="text-white" />
          </div>

          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            Intelligence Officer
          </h3>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 text-sm">
            <Building2 size={16} />
            <span>Special Branch Punjab Police</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
            <Calendar size={16} />
            <span>April 2016 – Dec 2024</span>
            <span className="ml-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-0.5 text-xs rounded-full">
              9y 8m
            </span>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">Key Responsibilities:</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
              <li>
                Gather intelligence on political, religious, social, and
                extremist activities.
              </li>
              <li>
                Monitor individuals or groups suspected of anti-state or
                subversive behavior.
              </li>
              <li>Conduct covert surveillance and shadowing of suspects.</li>
              <li>
                Identify potential threats to public safety or national
                security.
              </li>
              <li>
                Collaborate with local police, CTD (Counter Terrorism
                Department), IB (Intelligence Bureau), and ISI when necessary.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
