import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "./pages";
import { useState, useEffect } from "react";
import { Preloader } from "./components";

export function AppRoutes() {
  
  
  /*const [isLoading, setIsLoading] = useState(true);
  // Configurando cookies úteis para SEO e desempenho

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
*/
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
