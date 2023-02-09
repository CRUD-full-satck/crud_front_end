import { Navigate, Route, Routes } from "react-router-dom";
import RouteProtection from "../components/RouteProtection";
import PageDashboard from "../pages/Dashboard";
import PageRegistrationAndLogin from "../pages/RegisterAndLogin";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/home" element={<PageRegistrationAndLogin />} />
      <Route element={<RouteProtection />}>
        <Route path="/dashboard" element={<PageDashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default RoutesPage;
