import { Navigate, Route, Routes } from "react-router-dom";
import RouteProtection from "../components/RouteProtection";
import PageDashboard from "../pages/Dashboard";
import PageLogin from "../pages/Login";
import PageRegister from "../pages/Register";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/login" element={<PageLogin />} />
      <Route path="/register" element={<PageRegister />} />
      <Route element={<RouteProtection />}>
        <Route path="/dashboard" element={<PageDashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default RoutesPage;
