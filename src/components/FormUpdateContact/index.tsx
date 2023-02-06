import Input from "../Input/index";
import { useForm } from "react-hook-form";
import { IInputKeys } from "../Input/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import useClientContext from "../../context/clientContext";
import formUpdateContactSchema from "./schema";

const FormUpdateContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputKeys>({
    resolver: yupResolver(formUpdateContactSchema),
  });

  const { patchContact } = useClientContext();

  return (
    <form onSubmit={handleSubmit(patchContact)}>
      <Input id="name" label="Nome" register={register} error={errors.name?.message} />
      <Input id="email" label="Email" register={register} error={errors.email?.message} />
      <Input
        id="phone"
        label="Telefone"
        register={register}
        error={errors.phone?.message}
      />

      <input type="submit" value="Atualizar Contato" />
    </form>
  );
};

export default FormUpdateContact;
