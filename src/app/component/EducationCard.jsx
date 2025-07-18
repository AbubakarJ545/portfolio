import React from "react";
import { GraduationCap, CalendarDays, Building2 } from "lucide-react";

export default function EducationCard() {
  return (
    <section
      id="education"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 flex flex-col items-center transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold mb-2 text-center text-gray-800 dark:text-white">
        Education
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl mb-10">
        My academic journey in computer science and software engineering.
      </p>

      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-6 max-w-2xl w-full relative transition-colors duration-300">
        <div className="absolute -top-6 left-6 bg-blue-100 dark:bg-blue-900 p-3 rounded-xl">
          <GraduationCap className="text-blue-600 dark:text-blue-400 w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-6">
          Master in Information Technology
        </h3>
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          Bahauddin Zakariya University (BZU), Multan
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          2012 – 2014
        </p>

        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span>Bahauddin Zakariya University (BZU), Multan</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span>2012 – 2014</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">CGPA:</span>
            <span>2.74</span>
          </div>
        </div>
      </div>
    </section>
  );
}
