import Input from "../Input/index";
import { useForm } from "react-hook-form";
import { IInputKeys } from "../Input/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import useClientContext from "../../context/clientContext";
import formUpdateContactSchema from "./schema";
import { ButtonForm2 } from "../../style/buttons";

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
      <Input
        id="nameUpdateContact"
        value="name"
        label="Name"
        register={register}
        error={errors.name?.message}
        placeholder="Contact name"
      />
      <Input
        id="emailUpdateContact"
        value="email"
        label="Email"
        register={register}
        error={errors.email?.message}
        placeholder="email@email.com"
      />

      <Input
        id="phoneUpdateContact"
        value="phone"
        label="Phone"
        register={register}
        error={errors.phone?.message}
        placeholder="********"
      />

      <ButtonForm2 type="submit" value="Update Contact" />
    </form>
  );
};

export default FormUpdateContact;
