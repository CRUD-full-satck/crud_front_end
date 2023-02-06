import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  IClientContext,
  IClientLogin,
  IClientProvider,
  IContact,
  IContactResponse,
} from "./interfaces";

const ClientContext = createContext<IClientContext>({} as IClientContext);

export const ClientProvider = ({ children }: IClientProvider) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [modalUpdateContact, setModalUpdateContact] = useState<boolean>(false);
  const [contacts, setContacts] = useState<IContactResponse[] | null>(null);
  const [idContact, setIdContact] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const token: string | null = localStorage.getItem("@TOKEN");

    async function load() {
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        await getContacts();
      }
      setLoading(false);
    }
    load();
  }, []);

  const postContact = async (data: IContact) => {
    try {
      await api.post("/contacts/client", data);

      await getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const patchContact = async (data: IContact) => {
    const dateFilter = Object.fromEntries(
      Object.entries(data).filter((value) => {
        return !!value[1];
      })
    );

    try {
      await api.patch(`/contacts/${idContact}/client`, dateFilter);

      await getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await api.delete(`/contacts/${id}/client`);

      await getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data: IClientLogin): Promise<void> => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      localStorage.setItem("@TOKEN", token);
      api.defaults.headers.authorization = `Bearer ${token}`;

      await getContacts();

      navigate("/dashboard", { replace: true });

      console.log(response, token);
    } catch (error) {
      console.log("erro do post", error);
    }
  };

  async function getContacts() {
    try {
      const response = await api.get("/contacts/client");

      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ClientContext.Provider
      value={{
        login,
        loading,
        contacts,
        postContact,
        deleteContact,
        modalUpdateContact,
        setModalUpdateContact,
        patchContact,
        setIdContact,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

const useClientContext = (): IClientContext => {
  const context = useContext(ClientContext);
  return context;
};

export default useClientContext;
