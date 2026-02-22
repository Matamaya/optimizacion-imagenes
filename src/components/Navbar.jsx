import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">Optimización de Imágenes</h1>
            <div>
                <Link className="mr-4 hover:underline" to="/">Inicio</Link>
                <Link className="mr-4 hover:underline" to="/ejercicio1">Ejercicio 1</Link>
                <Link className="mr-4 hover:underline" to="/ejercicio2">Ejercicio 2</Link>
                <Link className="mr-4 hover:underline" to="/ejercicio3">Ejercicio 3</Link>
                <Link className="mr-4 hover:underline" to="/ejercicio4">Ejercicio 4</Link>
                <Link className="font-bold hover:underline" to="/ejercicio5">Tutorial</Link>
            </div>
        </nav>
    );
};
export default Navbar;