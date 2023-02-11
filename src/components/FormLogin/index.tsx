import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import formLoginSchema from "./schema";
import { IInputKeys } from "../Input/interface";
import Input from "../Input";
import useClientContext from "../../context/clientContext";
import { ButtonForm } from "../../style/buttons";

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
        id="emailLogin"
        value="email"
        label="Email"
        required
        register={register}
        error={errors.email?.message}
        placeholder="email@email.com"
      />
      <Input
        id="passwordLogin"
        value="password"
        label="Password"
        type="password"
        placeholder="********"
        required
        register={register}
        error={errors.password?.message}
      />

      <ButtonForm type="submit" value="Login" />
    </form>
  );
};

export default FormLogin;
