import LazyImage from "./LazyImage";
import TestEjercicio2 from "./TestEjercicio2";

const Ejercicio2 = () => {
    const images = [
        "/img-hell.jpg",
        "/img-sea.jpg",
        "/img-sky.jpg",
    ];

    return (
        <div className="max-w-6xl mx-auto py-10 px-6">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Ejercicio 2: Lazy Loading
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Mejora el rendimiento de carga descargando imágenes solo cuando el usuario las necesita. Haz scroll para ver el efecto.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {images.map((src, index) => (
                    <div key={index} className="group overflow-hidden rounded-2xl shadow-lg bg-card hover:shadow-2xl flex flex-col h-full border border-gray-100 dark:border-gray-800">
                        <LazyImage src={src} alt={`Imagen de ejemplo ${index + 1}`} />
                        <div className="p-5 flex-grow flex flex-col justify-center">
                            <p className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 transition-colors">
                                Ejemplo de carga diferida {index + 1}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <TestEjercicio2 />
        </div>
    );
};

export default Ejercicio2;