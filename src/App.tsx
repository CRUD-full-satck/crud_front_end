import { ClientProvider } from "./context/clientContext";
import RoutesPage from "./routes";
import GlobalStyle from "./style/global";

function App() {
  return (
    <ClientProvider>
      <GlobalStyle />
      <RoutesPage />
    </ClientProvider>
  );
}

export default App;
