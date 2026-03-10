import ImageEditor from "./ImageEditor";
import TestEjercicio3 from "./TestEjercicio3";

const Ejercicio3 = () => {
    return (
        <div className="max-w-5xl mx-auto py-10 px-6 font-primary">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                    Ejercicio 3: Canvas API
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Manipula datos de píxeles directamente en el navegador. Sube una imagen y aplica filtros personalizados mediante programación en tiempo real.
                </p>
            </header>

            <div className="space-y-16">
                <section className="bg-card p-1 sm:p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <ImageEditor />
                </section>

                <section>
                    <TestEjercicio3 />
                </section>
            </div>
        </div>
    );
};

export default Ejercicio3;