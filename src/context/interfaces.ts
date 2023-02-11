import { ReactNode } from "react";

interface ClientOrContact {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  created_at: string;
}

export type IClient = Omit<ClientOrContact, "id" | "created_at">;

export type IClientLogin = Pick<IClient, "email" | "password">;

export type IContactResponse = Omit<ClientOrContact, "password" | "confirmPassword">;

export type IContact = Omit<IClient, "password" | "confirmPassword">;

export interface IClientProvider {
  children: ReactNode;
}

export interface IClientContext {
  login: (data: IClientLogin) => void;
  loading: boolean;
  contacts: IContactResponse[] | null;
  postContact: (data: IContact) => void;
  deleteContact: (id: string) => void;
  modalUpdateContact: boolean;
  setModalUpdateContact: (modalUpdateContact: boolean) => void;
  patchContact: (data: IContact) => void;
  setIdContact: (idContact: string) => void;
  effectLogin: boolean;
  setEffectLogin: (effectLogin: boolean) => void;
  flipped: boolean;
  setFlipped: (flipped: boolean) => void;
}
