import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IInputKeys {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: string;
  register: UseFormRegister<IInputKeys>;
  error: string | undefined;
  required?: boolean;
  placeholder?: string;
}
