import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";

const MarkdownEditor = () => {
    const [text, setText] = useState(() => {
        return localStorage.getItem("tutorialContent") || "Escribe aquí tus notas...";
    });

    useEffect(() => {
        localStorage.setItem("tutorialContent", text);
    }, [text]);

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text(text, 10, 10);
        doc.save("Tutorial_Notas.pdf");
    };

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setText((prev) => prev + `\n\n![Imagen subida](${reader.result})`);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 transition-colors">Adjuntar Imagen</span>
                    <input type="file" onChange={handleImageUpload} className="hidden" />
                </label>

                <button
                    onClick={exportToPDF}
                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Exportar PDF
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[450px]">
                <div className="flex flex-col h-full">
                    <span className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Editor</span>
                    <textarea
                        className="flex-grow w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-4 text-gray-800 dark:text-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Escribe tus reflexiones técnicas aquí..."
                    />
                </div>

                <div className="flex flex-col h-full">
                    <span className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Vista Previa</span>
                    <div className="flex-grow w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl overflow-auto prose prose-sm dark:prose-invert max-w-none">
                        <ReactMarkdown>{text}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MarkdownEditor;