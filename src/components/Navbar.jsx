import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const navLinks = [
        { name: "Inicio", path: "/" },
        { name: "Optimización", path: "/ejercicio1" },
        { name: "Lazy Loading", path: "/ejercicio2" },
        { name: "Canvas API", path: "/ejercicio3" },
        { name: "Figma to React", path: "/ejercicio4" },
        { name: "Tutorial", path: "/ejercicio5" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-nav backdrop-blur-md dark:border-gray-800/50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">

                <Link to="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 text-white shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Img<span className="text-indigo-600 dark:text-indigo-400">Optimizer</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 ${isActive
                                    ? "text-indigo-600 dark:text-indigo-400"
                                    : "text-gray-600 dark:text-gray-400"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    {/* Botón menú móvil (proximamente) */}
                    <button className="md:hidden p-2 text-gray-600 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
