import { useState } from "react";

const questions = [
    {
        question: "¿Qué API de JavaScript permite manipular imágenes en un canvas?",
        options: ["WebGL", "Canvas API", "Intersection Observer"],
        answer: "Canvas API",
    },
    {
        question: "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?",
        options: ["getContext()", "getImageData()", "setTimeout()"],
        answer: "getImageData()",
    },
    {
        question: "¿Cómo se calcula matemáticamente el filtro de escala de grises para un píxel?",
        options: ["Promediando los valores RGB", "Restando 255 a cada color", "Multiplicando por cero"],
        answer: "Promediando los valores RGB",
    }
];

const TestEjercicio3 = () => {
    const [selectedAnswers, setSelectedAnswers] = useState([]);

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
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded shadow mt-6">
            <h2 className="text-2xl font-bold mb-4">Test de Manipulación de Imágenes</h2>
            {questions.map((q, i) => (
                <div key={i} className="mb-4">
                    <p className="font-semibold">{q.question}</p>
                    {q.options.map((opt) => (
                        <button
                            key={opt}
                            className={`mr-2 px-4 py-2 mt-2 rounded ${selectedAnswers[i] === opt ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
                            onClick={() => handleSelect(i, opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            ))}
            <button onClick={checkAnswers} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 mt-4 rounded">Verificar respuestas</button>
        </div>
    );
};
export default TestEjercicio3;