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
        <div className="p-6 bg-white dark:bg-gray-800 rounded shadow mt-6">
            <h2 className="text-2xl font-bold mb-4">Test de Conocimientos</h2>
            {questions.map((q, i) => (
                <div key={i} className="mb-4">
                    <p className="font-semibold">{q.question}</p>
                    {q.options.map((opt) => (
                        <button
                            key={opt}
                            className={`mr-2 px-4 py-2 mt-2 rounded transition ${selectedAnswers[i] === opt ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                                }`}
                            onClick={() => handleSelect(i, opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            ))}
            <button onClick={checkAnswers} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 mt-4 rounded shadow">
                Verificar respuestas
            </button>
        </div>
    );
};

export default TestEjercicio1;