import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import formLoginSchema from "./schema";
import { IInputKeys } from "../Input/interface";
import Input from "../Input";
import useClientContext from "../../context/clientContext";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputKeys>({
    resolver: yupResolver(formLoginSchema),
  });

  const { login } = useClientContext();

  return (
    <form onSubmit={handleSubmit(login)}>
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

      <input type="submit" value="Logar" />
    </form>
  );
};

export default FormLogin;
