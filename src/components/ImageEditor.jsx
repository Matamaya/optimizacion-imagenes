import { useRef, useState } from "react";

const ImageEditor = () => {
    const [image, setImage] = useState < string | null > (null);
    const canvasRef = useRef < HTMLCanvasElement > (null);

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
        <div className="text-center p-4">
            <input type="file" onChange={handleImageUpload} className="mb-4 block mx-auto" />
            <div>
                <button onClick={() => applyFilter("grayscale")} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 m-2 rounded shadow">
                    Escala de Grises
                </button>
                <button onClick={() => applyFilter("invert")} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 m-2 rounded shadow">
                    Invertir Colores
                </button>
                <button onClick={() => applyFilter("brightness")} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 m-2 rounded shadow">
                    Aumentar Brillo
                </button>
            </div>
            <canvas ref={canvasRef} className="border mt-4 mx-auto shadow-lg bg-gray-50"></canvas>
        </div>
    );
};

export default ImageEditor;