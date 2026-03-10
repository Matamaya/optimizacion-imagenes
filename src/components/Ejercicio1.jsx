import ImageOptimizer from "./ImageOptimizer";
import TestEjercicio1 from "./TestEjercicio1";

const Ejercicio1 = () => {
    return (
        <div className="max-w-5xl mx-auto py-10 px-6 prose dark:prose-invert">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Ejercicio 1: Optimización de Imágenes
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Aprende a reducir el peso de tus archivos multimedia utilizando formatos de última generación. Experimenta con la conversión en tiempo real.
                </p>
            </header>

            <div className="space-y-16">
                <section>
                    <ImageOptimizer />
                </section>

                <section>
                    <TestEjercicio1 />
                </section>
            </div>
        </div>
    );
};

export default Ejercicio1;