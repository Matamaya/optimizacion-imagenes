import { useState } from "react";

const ImageOptimizer = () => {
    const [originalFile, setOriginalFile] = useState < File | null > (null);
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
        <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-6 rounded shadow-md">
            <input type="file" onChange={handleFileChange} className="mb-4" />
            {originalFile && (
                <div className="w-full text-center">
                    <h2 className="text-xl font-bold mt-4">Imagen Original</h2>
                    <img src={URL.createObjectURL(originalFile)} alt="Original" className="w-60 mt-2 mx-auto rounded shadow" />
                </div>
            )}
            {optimizedImages.length > 0 && (
                <div className="mt-6 w-full">
                    <h2 className="text-xl font-bold text-center">Imágenes Optimizadas</h2>
                    <table className="mt-4 border-collapse border border-gray-300 w-full text-center bg-white dark:bg-gray-700">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-900">
                                <th className="border border-gray-300 p-2">Formato</th>
                                <th className="border border-gray-300 p-2">Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {optimizedImages.map((img, index) => (
                                <tr key={index} className="border border-gray-300">
                                    <td className="border border-gray-300 p-2 font-semibold">{img.format}</td>
                                    <td className="border border-gray-300 p-2">
                                        <img src={img.url} alt={img.format} className="w-60 mx-auto rounded" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
export default ImageOptimizer;