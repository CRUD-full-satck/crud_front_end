import { ReactNode } from "react";

export interface IClient {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export type IClientLogin = Pick<IClient, "email" | "password">;

export interface IClientProvider {
  children: ReactNode;
}

export interface IClientContext {
  login: (data: IClientLogin) => void;
}
