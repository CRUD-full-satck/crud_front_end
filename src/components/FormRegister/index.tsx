import { SubmitHandler, useForm } from "react-hook-form";
import { IClient } from "../../context/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import formClientSchema from "./schema";
import { InputsRegisterProps } from "./interfaces";
import api from "../../services/api";
import { AxiosError } from "axios";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClient>({
    resolver: yupResolver(formClientSchema),
  });

  const registerClient: SubmitHandler<InputsRegisterProps> = async (client) => {
    const { confirmPassword, ...data } = client;
    try {
      await api.post("/client", data);
    } catch (e) {
      const error = e as AxiosError;

      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(registerClient)}>
      <Input
        value="name"
        type="text"
        label="Nome"
        required
        register={register}
        error={errors.name?.message}
      />
      <Input
        value="email"
        type="text"
        label="Email"
        required
        register={register}
        error={errors.email?.message}
      />
      <Input
        value="password"
        type="text"
        label="Senha"
        required
        register={register}
        error={errors.password?.message}
      />
      <Input
        value="confirmPassword"
        type="text"
        label="Confirme Senha"
        required
        register={register}
        error={errors.confirmPassword?.message}
      />
      <Input
        value="phone"
        type="text"
        label="Telefone"
        required
        register={register}
        error={errors.phone?.message}
      />

      <input type="submit" value="Registrar" />
    </form>
  );
};

export default FormRegister;
