import { useState } from "react";

// Tarea extra: Añadir más preguntas
const questions = [
    {
        question: "¿Cuál es el formato más eficiente para imágenes en la web?",
        options: ["JPEG", "PNG", "WebP", "AVIF"],
        answer: "AVIF",
    },
    {
        question: "¿Qué herramienta permite diseñar interfaces web?",
        options: ["Photoshop", "Figma", "GIMP"],
        answer: "Figma",
    },
    {
        question: "¿Para qué sirve el Intersection Observer?",
        options: ["Para optimizar SVGs", "Para aplicar Lazy Loading detectando la visibilidad", "Para dar estilo a botones"],
        answer: "Para aplicar Lazy Loading detectando la visibilidad",
    },
    {
        question: "¿Qué hook de React hemos usado para guardar la referencia del Canvas?",
        options: ["useState", "useEffect", "useRef"],
        answer: "useRef",
    }
];

const Test = () => {
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(""));

    const handleSelect = (index, option) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };

    const checkAnswers = () => {
        const correct = selectedAnswers.filter((ans, i) => ans === questions[i].answer).length;
        alert(`Has respondido correctamente ${correct} de ${questions.length}`);
    };

    return (
        <div className="p-8 bg-card rounded-3xl shadow-2xl mt-12 border border-gray-100 dark:border-gray-800 transition-all">
            <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                Test Final de Conceptos
            </h2>
            <div className="space-y-10">
                {questions.map((q, i) => (
                    <div key={i} className="group">
                        <p className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-start">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-black mr-3 shrink-0 mt-0.5">
                                {i + 1}
                            </span>
                            {q.question}
                        </p>
                        <div className="flex flex-wrap gap-3 ml-10">
                            {q.options.map((opt) => (
                                <button
                                    key={opt}
                                    className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 border ${selectedAnswers[i] === opt
                                            ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-500/30 scale-105"
                                            : "bg-gray-50 dark:bg-gray-900/30 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-red-300 dark:hover:border-red-900/50"
                                        }`}
                                    onClick={() => handleSelect(i, opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={checkAnswers}
                className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black px-10 py-5 mt-12 rounded-2xl shadow-xl shadow-red-500/20 transition-all hover:-translate-y-1 active:scale-95"
            >
                Finalizar y Verificar Respuestas
            </button>
        </div>
    );
};

export default Test;