import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import { useState, useEffect } from "react";
import { Preloader } from "./components";

export function AppRoutes() {

  const [isLoading, setIsLoading] = useState(true); 
  // Configurando cookies úteis para SEO e desempenho

  useEffect(() => { 
    setTimeout(() => {
      setIsLoading(false);  
    }, 4000); 
  }, []);


  
  return (
    <>
      <Routes>
        <Route path="/" element={isLoading ? <Preloader /> : <HomePage />} />
      </Routes>
    </>
  );
}
