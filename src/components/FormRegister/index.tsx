import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import formRegisterSchema from "./schema";
import { IInputKeys } from "../Input/interface";
import { IClient } from "../../context/interfaces";
import api from "../../services/api";
import { AxiosError } from "axios";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputKeys>({
    resolver: yupResolver(formRegisterSchema),
  });

  const registerClient: SubmitHandler<IClient> = async (client) => {
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
        id="name"
        label="Nome"
        required
        register={register}
        error={errors.name?.message}
      />
      <Input
        id="email"
        label="Email"
        required
        register={register}
        error={errors.email?.message}
      />
      <Input
        id="password"
        label="Senha"
        required
        register={register}
        error={errors.password?.message}
      />
      <Input
        id="confirmPassword"
        label="Confirme Senha"
        required
        register={register}
        error={errors.confirmPassword?.message}
      />
      <Input
        id="phone"
        label="Telefone"
        required
        register={register}
        error={errors.phone?.message}
      />

      <input type="submit" value="Cadastrar" />
    </form>
  );
};

export default FormRegister;
