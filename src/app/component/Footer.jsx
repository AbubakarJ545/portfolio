// components/Footer.js
export default function Footer() {
  return (
    <footer className="text-center py-4 text-sm text-gray-900 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-10">
      Made by <span className="text-sm font-extrabold">Abubakar Jamal</span>{" "}
      using Next.js © {new Date().getFullYear()}
    </footer>
  );
}
