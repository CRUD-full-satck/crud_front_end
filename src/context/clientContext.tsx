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
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const ClientContext = createContext<IClientContext>({} as IClientContext);

export const ClientProvider = ({ children }: IClientProvider) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [flipped, setFlipped] = useState(false);
  const [effectLogin, setEffectLogin] = useState<boolean>(false);
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

      toast.success("Contact created.");
    } catch (error: any) {
      const { response } = error;
      if (response.status === 401) {
        toast.error(response.data.message);
      } else {
        toast.warning("Oops... something went wrong, reload the page please.");
      }

      console.error(error);
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

      toast.success("Updated contact.");
    } catch (error: any) {
      const { response } = error;
      if (response.status === 401) {
        toast.error(response.data.message);
      } else {
        toast.warning("Oops... something went wrong, reload the page please.");
      }

      console.error(error);
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await api.delete(`/contacts/${id}/client`);

      await getContacts();

      toast.success("Contact deleted.");
    } catch (e) {
      toast.warning("Oops... something went wrong, reload the page please.");

      const error = e as AxiosError;
      console.error(error);
    }
  };

  const login = async (data: IClientLogin): Promise<void> => {
    setEffectLogin(true);

    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      localStorage.setItem("@TOKEN", token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      toast.success("User logged in.");

      await getContacts();
      navigate("/dashboard", { replace: true });
    } catch (error: any) {
      setEffectLogin(false);

      const { response } = error;
      if (response?.status === 403) {
        toast.error(response.data.message);
      } else {
        toast.warning("Oops... something went wrong, reload the page please.");
      }
      console.error(error);
    }
  };

  async function getContacts() {
    try {
      const response = await api.get("/contacts/client");

      setContacts(response.data);
    } catch (e) {
      toast.warning("Oops... something went wrong, reload the page please.");

      const error = e as AxiosError;
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
        effectLogin,
        setEffectLogin,
        flipped,
        setFlipped,
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
