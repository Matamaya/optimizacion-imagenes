import { useState } from "react";

const ImageOptimizer = () => {
    const [originalFile, setOriginalFile] = useState(null);
    const [optimizedImages, setOptimizedImages] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            setOriginalFile(file);
            generateOptimizedImages(file);
        }
    };

    const generateOptimizedImages = (file) => {
        const formats = ["image/webp", "image/avif"];
        const optimized = formats.map((format) => ({
            format,
            url: URL.createObjectURL(file),
        }));
        setOptimizedImages(optimized);
    };

    return (
        <div className="w-full">
            {/* Upload Area */}
            <div className="relative group mb-12">
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    accept="image/*"
                />
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl p-12 text-center transition-all bg-card/50 backdrop-blur-sm group-hover:border-indigo-500 group-hover:bg-indigo-500/5 group-active:scale-[0.98]">
                    <div className="flex flex-col items-center">
                        <div className="h-20 w-20 rounded-2xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xl shadow-indigo-600/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sube tu imagen</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto mb-8">Arrastra y suelta o haz clic para explorar tus archivos</p>
                        <span className="inline-flex items-center px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5 pointer-events-none">
                            Seleccionar Archivo
                        </span>
                    </div>
                </div>
            </div>

            {originalFile && (
                <div className="space-y-16 animate-in fade-in slide-in-from-bottom-5 duration-500">
                    <div className="text-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4 block">Vista Previa Original</span>
                        <div className="relative inline-block group">
                            <div className="absolute inset-0 bg-indigo-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                            <img
                                src={URL.createObjectURL(originalFile)}
                                alt="Original"
                                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800 transition-transform group-hover:scale-[1.02]"
                            />
                        </div>
                        <p className="mt-4 text-sm font-medium text-gray-500">{originalFile.name} ({(originalFile.size / 1024).toFixed(1)} KB)</p>
                    </div>

                    {optimizedImages.length > 0 && (
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-2xl font-bold">Resultados de Optimización</h2>
                                <div className="h-px flex-grow bg-gray-200 dark:bg-gray-800"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {optimizedImages.map((img, index) => (
                                    <div key={index} className="bg-card rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-xl transition-all hover:shadow-2xl">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="px-4 py-1.5 rounded-full bg-indigo-600/10 text-indigo-600 text-xs font-black uppercase tracking-wider italic">
                                                {img.format.split("/")[1]}
                                            </span>
                                            <span className="text-[10px] font-bold text-gray-400">OPTIMIZADO</span>
                                        </div>
                                        <div className="relative group/img overflow-hidden rounded-2xl">
                                            <img src={img.url} alt={img.format} className="w-full h-auto transition-transform duration-500 group-hover/img:scale-110" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                                <a
                                                    href={img.url}
                                                    download={`optimized.${img.format.split("/")[1]}`}
                                                    className="p-4 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-transform"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-center text-sm font-bold text-gray-600 dark:text-gray-400">
                                            Formato Nativo: <span className="text-indigo-600">{img.format.split("/")[1].toUpperCase()}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageOptimizer;