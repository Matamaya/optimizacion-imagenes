import { Link } from "react-router-dom";

const EjercicioCard = ({ title, path }) => {
    return (
        <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 text-center">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <Link to={path} className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
                Ver Ejercicio
            </Link>
        </div>
    );
};
export default EjercicioCard;