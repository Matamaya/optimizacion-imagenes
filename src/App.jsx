import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

// Carga diferida de componentes
const Home = lazy(() => import("./components/Home"));
const Ejercicio1 = lazy(() => import("./components/Ejercicio1"));
const Ejercicio2 = lazy(() => import("./components/Ejercicio2"));
const Ejercicio3 = lazy(() => import("./components/Ejercicio3"));
const Ejercicio4 = lazy(() => import("./components/Ejercicio4"));
const Tutorial = lazy(() => import("./components/tutorial/Tutorial"));

function App() {
  return (
    <Router>
      {/* Contenedor principal con soporte para Modo Oscuro */}
      <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 flex flex-col">
        <Navbar />
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>
        <div className="container mx-auto p-4 flex-grow">
          <Suspense fallback={<div className="text-center mt-10 text-xl font-bold">Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ejercicio1" element={<Ejercicio1 />} />
              <Route path="/ejercicio2" element={<Ejercicio2 />} />
              <Route path="/ejercicio3" element={<Ejercicio3 />} />
              <Route path="/ejercicio4" element={<Ejercicio4 />} />
              <Route path="/ejercicio5" element={<Tutorial />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;