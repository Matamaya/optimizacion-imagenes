import ImageOptimizer from "./ImageOptimizer";
import TestEjercicio1 from "./TestEjercicio1";

const Ejercicio1 = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Ejercicio 1: Optimización de Imágenes</h1>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Suba una imagen y conviértala a diferentes formatos. Luego, compare los tamaños de archivo.
            </p>
            <ImageOptimizer />
            {/* Test añadido a la web */}
            <TestEjercicio1 />
        </div>
    );
};
export default Ejercicio1;