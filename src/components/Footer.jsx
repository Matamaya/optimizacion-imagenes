const Footer = () => {
    return (
        <footer className="mt-20 border-t border-gray-200/50 bg-nav backdrop-blur-md dark:border-gray-800/50 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-indigo-600/10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            Img<span className="text-indigo-600 dark:text-indigo-400">Optimizer</span>
                        </span>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} M9 DAW. Todos los derechos reservados.
                    </p>

                    <div className="flex gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Términos</a>
                        <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contacto</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
