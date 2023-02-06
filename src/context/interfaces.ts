import { ReactNode } from "react";

export interface IClient {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export type IClientLogin = Pick<IClient, "email" | "password">;

export type IContact = Omit<IClient, "password" | "confirmPassword">;

export interface IClientProvider {
  children: ReactNode;
}

export interface IClientContext {
  login: (data: IClientLogin) => void;
  loading: boolean;
  contacts: IContact[] | null;
  postContact: (data: IContact) => void;
}
