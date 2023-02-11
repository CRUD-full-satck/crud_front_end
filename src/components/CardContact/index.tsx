import { TiDeleteOutline } from "react-icons/ti";
import { TbPencil } from "react-icons/tb";
import { IContactResponse } from "../../context/interfaces";
import useClientContext from "../../context/clientContext";
import { Card } from "./style";

const CardContact = ({ ...props }: IContactResponse) => {
  const { deleteContact, setModalUpdateContact, setIdContact } = useClientContext();

  return (
    <Card>
      <div>
        <TiDeleteOutline onClick={() => deleteContact(props.id)} />
        <TbPencil
          onClick={() => {
            setIdContact(props.id);
            setModalUpdateContact(true);
          }}
        />
      </div>
      <span>Name: {props.name}</span>
      <span>Email: {props.email}</span>
      <span>Phone: {props.phone}</span>
    </Card>
  );
};

export default CardContact;
