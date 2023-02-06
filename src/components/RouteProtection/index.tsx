import { Navigate, Outlet } from "react-router-dom";
import useClientContext from "../../context/clientContext";

const RouteProtection = () => {
  const { loading, contacts } = useClientContext();

  if (loading) return <div>Carregando...</div>;

  return contacts ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RouteProtection;
