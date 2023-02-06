import FormUpdateContact from "../FormUpdateContact";
import { TiDeleteOutline } from "react-icons/ti";
import useClientContext from "../../context/clientContext";

const ModalEditContact = () => {
  const { setModalUpdateContact } = useClientContext();
  return (
    <div>
      <TiDeleteOutline onClick={() => setModalUpdateContact(false)}/>
      <FormUpdateContact />
    </div>
  );
};

export default ModalEditContact;
