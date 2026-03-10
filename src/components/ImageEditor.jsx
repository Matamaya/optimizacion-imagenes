import { useRef, useState } from "react";

const ImageEditor = () => {
    const [image, setImage] = useState(null);
    const canvasRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const applyFilter = (filter) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx || !image) return;

        const img = new Image();
        img.src = image;
        img.onload = () => {
            canvas.width = img.width / 2;
            canvas.height = img.height / 2;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                if (filter === "grayscale") {
                    let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    data[i] = data[i + 1] = data[i + 2] = avg;
                } else if (filter === "invert") {
                    data[i] = 255 - data[i];
                    data[i + 1] = 255 - data[i + 1];
                    data[i + 2] = 255 - data[i + 2];
                } else if (filter === "brightness") {
                    // Reto resuelto: Sumamos 40 a cada canal para aumentar el brillo
                    data[i] = Math.min(255, data[i] + 40);
                    data[i + 1] = Math.min(255, data[i + 1] + 40);
                    data[i + 2] = Math.min(255, data[i + 2] + 40);
                }
            }
            ctx.putImageData(imageData, 0, 0);
        };
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            {!image ? (
                /* Upload Dropzone */
                <div className="relative group">
                    <input
                        type="file"
                        onChange={handleImageUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        accept="image/*"
                    />
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl p-16 text-center transition-all bg-card/30 backdrop-blur-sm group-hover:border-orange-500 group-hover:bg-orange-500/5">
                        <div className="flex flex-col items-center">
                            <div className="h-20 w-20 rounded-2xl bg-orange-600/10 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Editor de Imagen</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs">Sube una fotografía para empezar a aplicar filtros con Canvas</p>
                            <span className="px-8 py-3 rounded-xl bg-orange-600 text-white font-bold shadow-lg shadow-orange-600/30">
                                Seleccionar Imagen
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5">
                    {/* Controls Bar */}
                    <div className="bg-card/50 backdrop-blur-md p-4 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-center gap-4 shadow-lg">
                        <button
                            onClick={() => applyFilter("grayscale")}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold transition-all hover:-translate-y-0.5"
                        >
                            <div className="h-4 w-4 rounded-full bg-gray-500"></div>
                            Gris
                        </button>
                        <button
                            onClick={() => applyFilter("invert")}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 font-bold transition-all hover:-translate-y-0.5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            Invertir
                        </button>
                        <button
                            onClick={() => applyFilter("brightness")}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-100 dark:bg-yellow-900/20 hover:bg-yellow-200 dark:hover:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400 font-bold transition-all hover:-translate-y-0.5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            Brillo
                        </button>
                        <button
                            onClick={() => setImage(null)}
                            className="px-5 py-2.5 rounded-xl text-gray-400 hover:text-red-500 font-bold transition-colors"
                        >
                            Cambiar imagen
                        </button>
                    </div>

                    {/* Canvas Area */}
                    <div className="relative group flex justify-center items-center">
                        <div className="absolute inset-0 bg-orange-600/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative dark:bg-gray-950 p-4 rounded-3xl overflow-hidden inline-block min-w-[200px]">
                            <canvas
                                ref={canvasRef}
                                className="max-w-full h-auto rounded-xl"
                            ></canvas>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default ImageEditor;