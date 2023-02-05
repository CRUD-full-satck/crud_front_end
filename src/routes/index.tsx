import { Navigate, Route, Routes } from "react-router-dom";
import PageRegister from "../pages/Register";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/client" element={<PageRegister />} />
      <Route />
      <Route />

      <Route path="*" element={<Navigate to="/client" />} />
    </Routes>
  );
};

export default RoutesPage;
