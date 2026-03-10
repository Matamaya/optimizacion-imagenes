import EjercicioCard from "./EjercicioCard";
import MarkdownEditor from "./MarkdownEditor";
import Test from "./Test";

const ejercicios = [
    { id: 1, title: "Optimización de Imágenes", path: "/ejercicio1" },
    { id: 2, title: "Lazy Loading", path: "/ejercicio2" },
    { id: 3, title: "Manipulación con Canvas", path: "/ejercicio3" },
    { id: 4, title: "Figma a React", path: "/ejercicio4" },
];

const Tutorial = () => {
    return (
        <div className="max-w-5xl mx-auto py-10 px-6 font-primary">
            <header className="mb-16 text-center">
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                    Guía de Aprendizaje
                </span>
                <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent italic">
                    Tutorial Interactivo
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Un espacio dedicado para documentar tu progreso, repasar conceptos clave y poner a prueba tus conocimientos sobre la optimización de activos digitales.
                </p>
            </header>

            <section className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold">Módulos del Curso</h2>
                    <div className="h-px flex-grow bg-gray-200 dark:bg-gray-800"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ejercicios.map((ejercicio) => (
                        <EjercicioCard key={ejercicio.id} title={ejercicio.title} path={ejercicio.path} />
                    ))}
                </div>
            </section>

            <section className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold">Notas Personales</h2>
                    <div className="h-px flex-grow bg-gray-200 dark:bg-gray-800"></div>
                    <span className="text-xs font-medium text-gray-400">Guarda tus reflexiones aquí</span>
                </div>
                <div className="bg-card p-4 sm:p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                    <MarkdownEditor />
                </div>
            </section>

            <section className="mb-12">
                <Test />
            </section>
        </div>
    );
};

export default Tutorial;