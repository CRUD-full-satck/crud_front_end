import Input from "../Input/index";
import { useForm } from "react-hook-form";
import { IInputKeys } from "../Input/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import formCreateContactSchema from "./schema";
import useClientContext from "../../context/clientContext";
import { ButtomForm } from "../../style/global";

const FormCreateContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputKeys>({
    resolver: yupResolver(formCreateContactSchema),
  });

  const { postContact } = useClientContext();

  return (
    <form onSubmit={handleSubmit(postContact)}>
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
        id="phone"
        label="Telefone"
        required
        register={register}
        error={errors.phone?.message}
      />

      <ButtomForm type="submit" value="Criar Contato" />
    </form>
  );
};

export default FormCreateContact;
