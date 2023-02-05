import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { IClientContext, IClientLogin, IClientProvider } from "./interfaces";

interface teste {
  data: {
    token: string;
  };
}
const ClientContext = createContext<IClientContext>({} as IClientContext);

export const ClientProvider = ({ children }: IClientProvider) => {
  const navigate = useNavigate();

  const login = async (data: IClientLogin): Promise<void> => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      localStorage.setItem("@TOKEN", token);
      api.defaults.headers.authorization = `Bearer ${token}`;

      navigate("/dashboard", { replace: true });
      console.log(response, token);
    } catch (error) {
      console.log(error);
    }
  };

  return <ClientContext.Provider value={{ login }}>{children}</ClientContext.Provider>;
};

const useClientContext = (): IClientContext => {
  const context = useContext(ClientContext);
  return context;
};

export default useClientContext;
