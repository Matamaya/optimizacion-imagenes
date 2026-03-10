const FigmaComponent = () => {
    return (
        <div className="bg-card p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 text-center transition-all duration-500 hover:shadow-indigo-500/10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                Diseño Exportado de <span className="text-indigo-600 dark:text-indigo-400">Figma</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-lg mx-auto leading-relaxed mb-8">
                Este componente fue diseñado originalmente en Figma y convertido a React utilizando Tailwind CSS para mantener la fidelidad visual y los espaciados del prototipo.
            </p>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-10 py-4 rounded-2xl shadow-xl shadow-indigo-500/30 transition-all hover:-translate-y-1 active:scale-95 mb-12">
                ¡Haz clic aquí!
            </button>

            <div className="relative group overflow-hidden rounded-[2rem] border-4 border-white dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-xl transition-all duration-700">
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-black text-white tracking-widest uppercase">
                    Figma Asset
                </div>
                <img
                    src="/figma-exported-image.jpg"
                    alt="Exportado de Figma"
                    className="w-full h-auto object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
                />
            </div>
        </div>
    );
};

export default FigmaComponent;
