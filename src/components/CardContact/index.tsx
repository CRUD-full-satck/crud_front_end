import { TiDeleteOutline } from "react-icons/ti";
import { TbPencil } from "react-icons/tb";
import { IContactResponse } from "../../context/interfaces";
import useClientContext from "../../context/clientContext";

const CardContact = ({ ...props }: IContactResponse) => {
  const { deleteContact, setModalUpdateContact, setIdContact } = useClientContext();

  return (
    <li>
      <div>
        <TbPencil
          onClick={() => {
            setIdContact(props.id);
            setModalUpdateContact(true);
          }}
        />
        <TiDeleteOutline onClick={() => deleteContact(props.id)} />
      </div>
      <span>{props.name}</span>
      <span>{props.email}</span>
      <span>{props.phone}</span>
    </li>
  );
};

export default CardContact;
