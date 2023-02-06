import { ClientProvider } from "./context/clientContext";
import RoutesPage from "./routes";
import "./style/reset.css";

function App() {
  return (
    <ClientProvider>
      <RoutesPage />
    </ClientProvider>
  );
}

export default App;
