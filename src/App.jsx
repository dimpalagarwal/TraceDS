import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import DashboardProvider from "./context/DashboardContext";
import DashboardRoutes from "./routes/DashboardRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/dashboard/*" element={<DashboardProvider><DashboardRoutes /></DashboardProvider>}/>
    </Routes>
  );
}

export default App;
