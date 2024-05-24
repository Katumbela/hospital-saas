import "./App.css";
import "./theme/global.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./presentation/app.routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
