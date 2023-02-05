import { ClientProvider } from "./context/clientContext";
import RoutesPage from "./routes";

function App() {
  return (
    <ClientProvider>
      <RoutesPage />
    </ClientProvider>
  );
}

export default App;
