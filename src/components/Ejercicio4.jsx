import FigmaComponent from "./FigmaComponent";
import TestEjercicio4 from "./TestEjercicio4";

const Ejercicio4 = () => {
    return (
        <div className="max-w-5xl mx-auto py-10 px-6 font-primary">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                    Ejercicio 4: Figma to React
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Aprende el flujo de trabajo profesional desde el lienzo de diseño hasta el código vivo. Descubre cómo transformar prototipos en interfaces interactivas de alto rendimiento.
                </p>
            </header>

            <div className="space-y-20">
                <section>
                    <FigmaComponent />
                </section>

                <section>
                    <TestEjercicio4 />
                </section>
            </div>
        </div>
    );
};

export default Ejercicio4;