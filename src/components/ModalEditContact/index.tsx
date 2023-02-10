import FormUpdateContact from "../FormUpdateContact";
import { TiDeleteOutline } from "react-icons/ti";
import useClientContext from "../../context/clientContext";
import { Modal } from "./style";

const ModalEditContact = () => {
  const { setModalUpdateContact } = useClientContext();
  return (
    <Modal>
      <TiDeleteOutline onClick={() => setModalUpdateContact(false)} />
      <FormUpdateContact />
    </Modal>
  );
};

export default ModalEditContact;
