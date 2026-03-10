import { useState } from "react";

const questions = [
    {
        question: "¿Cuál de estos formatos soporta transparencia?",
        options: ["JPEG", "PNG", "WebP", "AVIF"],
        answer: "PNG",
    },
    {
        question: "¿Qué formato es más eficiente en la web?",
        options: ["PNG", "JPEG", "WebP", "AVIF"],
        answer: "AVIF",
    },
];

const TestEjercicio1 = () => {
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
        <div className="p-8 bg-card rounded-2xl shadow-xl mt-12 border border-gray-100 dark:border-gray-800 transition-all">
            <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Test de Conocimientos
            </h2>
            <div className="space-y-8">
                {questions.map((q, i) => (
                    <div key={i} className="group">
                        <p className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">
                            <span className="mr-2 text-indigo-500 font-black">0{i + 1}.</span>
                            {q.question}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-4">
                            {q.options.map((opt) => (
                                <button
                                    key={opt}
                                    className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${selectedAnswers[i] === opt
                                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105"
                                            : "bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
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
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold px-10 py-4 mt-10 rounded-2xl shadow-xl shadow-green-500/20 transition-all hover:-translate-y-1"
            >
                Verificar respuestas
            </button>
        </div>

    );
};

export default TestEjercicio1;