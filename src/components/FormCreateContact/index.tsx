import Input from "../Input/index";
import { useForm } from "react-hook-form";
import { IInputKeys } from "../Input/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import formCreateContactSchema from "./schema";
import useClientContext from "../../context/clientContext";
import { ButtonForm } from "../../style/buttons";

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
        label="Name"
        required
        register={register}
        error={errors.name?.message}
        placeholder="Contact name"
      />
      <Input
        id="email"
        label="Email"
        required
        register={register}
        error={errors.email?.message}
        placeholder="email@email.com"
      />
      <Input
        id="phone"
        label="Phone"
        required
        register={register}
        error={errors.phone?.message}
        placeholder="(DDD) 99999-9999"
      />

      <ButtonForm type="submit" value="Create contact" />
    </form>
  );
};

export default FormCreateContact;
