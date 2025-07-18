export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center py-6 text-sm text-gray-700 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700  transition-colors duration-300">
      Made by{" "}
      <span className="font-bold text-gray-900 dark:text-white">
        Abubakar Jamal
      </span>{" "}
      using{" "}
      <span className="font-semibold text-blue-600 dark:text-blue-400">
        Next.js
      </span>{" "}
      © {new Date().getFullYear()}
    </footer>
  );
}
