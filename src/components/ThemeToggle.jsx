import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const theme = localStorage.getItem("theme");
        if (theme) return theme === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            root.style.colorScheme = "dark";
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            root.style.colorScheme = "light";
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);


    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/50 px-3 py-1.5 text-sm font-medium transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800"
            aria-label="Alternar tema"
        >
            {darkMode ? (
                <>
                    <span className="text-yellow-400">☀️</span>
                    <span className="hidden sm:inline text-gray-200">Claro</span>
                </>
            ) : (
                <>
                    <span className="text-indigo-400">🌙</span>
                    <span className="hidden sm:inline text-gray-700">Oscuro</span>
                </>
            )}
        </button>
    );
};
export default ThemeToggle;
