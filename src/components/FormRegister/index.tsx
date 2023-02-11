import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import formRegisterSchema from "./schema";
import { IInputKeys } from "../Input/interface";
import { IClient } from "../../context/interfaces";
import api from "../../services/api";
import { ButtonForm } from "../../style/buttons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useClientContext from "../../context/clientContext";

const FormRegister = () => {
  const { setFlipped } = useClientContext();

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
      toast.success("Registered User");
      setFlipped(false);
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

  return (
    <form onSubmit={handleSubmit(registerClient)}>
      <Input
        id="nameRegister"
        value="name"
        label="Name"
        required
        register={register}
        error={errors.name?.message}
        placeholder="Your name"
      />
      <Input
        id="emailRegister"
        value="email"
        label="Email"
        required
        register={register}
        error={errors.email?.message}
        placeholder="email@email.com"
      />
      <Input
        id="passwordRegister"
        value="password"
        label="Password"
        type="password"
        required
        register={register}
        error={errors.password?.message}
        placeholder="********"
      />
      <Input
        id="confirmPassword"
        value="confirmPassword"
        label="Confirm Password"
        type="password"
        required
        register={register}
        error={errors.confirmPassword?.message}
        placeholder="********"
      />
      <Input
        id="phoneRegister"
        value="phone"
        label="Phone"
        required
        register={register}
        error={errors.phone?.message}
        placeholder="(DDD) 99999-9999"
      />

      <ButtonForm type="submit" value="Register" />
    </form>
  );
};

export default FormRegister;
