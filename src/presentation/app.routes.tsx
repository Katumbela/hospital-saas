import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "./pages";
import PatientDetails from "./components/patient-details/patient-details";

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
        <Route path="/admin" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
      </Routes>
    </>
  );
}
