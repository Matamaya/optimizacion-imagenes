import { Link } from "react-router-dom";

const Home = () => {
    const exercises = [
        {
            id: 1,
            title: "Optimización",
            description: "Aprende a reducir el peso de las imágenes sin perder calidad.",
            path: "/ejercicio1",
            color: "from-blue-500 to-cyan-400"
        },
        {
            id: 2,
            title: "Lazy Loading",
            description: "Implementa carga diferida para mejorar el rendimiento de carga.",
            path: "/ejercicio2",
            color: "from-purple-500 to-pink-400"
        },
        {
            id: 3,
            title: "Canvas API",
            description: "Manipula píxeles y aplica filtros en tiempo real.",
            path: "/ejercicio3",
            color: "from-orange-500 to-yellow-400"
        },
        {
            id: 4,
            title: "Figma to React",
            description: "Integra diseños profesionales directamente en tu código.",
            path: "/ejercicio4",
            color: "from-green-500 to-emerald-400"
        },
        {
            id: 5,
            title: "Tutorial",
            description: "Guía paso a paso sobre las mejores prácticas.",
            path: "/ejercicio5",
            color: "from-red-500 to-rose-400"
        }
    ];

    return (
        <div className="flex flex-col gap-12 pb-20">
            <section
                className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-20 text-center shadow-2xl"
                style={{
                    /* Para añadir tu fondo, descomenta la línea de abajo y cambia la URL */
                    /* backgroundImage: 'url("/path/to/your/image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' */
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent pointer-events-none"></div>

                <div className="relative z-10">
                    <h1 className="mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
                        Optimización de Imágenes
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
                        Explora técnicas avanzadas de optimización, manipulación y rendimiento para crear experiencias web visualmente impactantes.
                    </p>
                </div>

                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
            </section>

            <section>
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-3xl font-bold">Ejercicios Prácticos</h2>
                    <div className="h-1 flex-grow mx-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {exercises.map((ex) => (
                        <Link
                            key={ex.id}
                            to={ex.path}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-card p-1 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
                        >

                            <div className={`h-2 w-full bg-gradient-to-r ${ex.color}`}></div>
                            <div className="flex flex-col p-6">
                                <span className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                    Ejercicio {ex.id}
                                </span>
                                <h3 className="mb-2 text-2xl font-bold group-hover:text-blue-500 transition-colors">
                                    {ex.title}
                                </h3>
                                <p className="mb-6 text-gray-600 dark:text-gray-400">
                                    {ex.description}
                                </p>
                                <div className="mt-auto flex items-center font-semibold text-blue-500">
                                    Comenzar ahora
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;


// Tonyto1_8