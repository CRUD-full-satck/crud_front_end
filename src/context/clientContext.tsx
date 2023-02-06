import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { IClientContext, IClientLogin, IClientProvider, IContact } from "./interfaces";

const ClientContext = createContext<IClientContext>({} as IClientContext);

export const ClientProvider = ({ children }: IClientProvider) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [contacts, setContacts] = useState<IContact[] | null>(null);

  useEffect(() => {
    const token: string | null = localStorage.getItem("@TOKEN");

    async function load() {
      console.log(loading);
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const response = await api.get("/contacts/client");

          setContacts(response.data);

          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    load();
  }, []);

  const login = async (data: IClientLogin): Promise<void> => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      localStorage.setItem("@TOKEN", token);
      api.defaults.headers.authorization = `Bearer ${token}`;

      try {
        const responseData = await api.get("/contacts/client");
        setContacts(responseData.data);
      } catch (error) {
        console.error("erro do get", error);
      }

      navigate("/dashboard", { replace: true });

      console.log(response, token);
    } catch (error) {
      console.log("erro do post", error);
    }
  };

  return (
    <ClientContext.Provider value={{ login, loading, contacts }}>
      {children}
    </ClientContext.Provider>
  );
};

const useClientContext = (): IClientContext => {
  const context = useContext(ClientContext);
  return context;
};

export default useClientContext;
