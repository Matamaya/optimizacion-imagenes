const FigmaComponent = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center mt-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Diseño Exportado de Figma</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Este componente fue diseñado en Figma y convertido en React.</p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                ¡Haz clic aquí!
            </button>
            {/* Nota: Necesitas añadir una imagen en la carpeta 'public' llamada 'figma-exported-image.png' para que esto se vea */}
            <img src="/figma-exported-image.png" alt="Exportado de Figma" className="mt-4 mx-auto w-40" />
        </div>
    );
};
export default FigmaComponent;