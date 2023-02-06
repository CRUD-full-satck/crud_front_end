import { IContact } from "../../context/interfaces";

const CardContact = ({ ...props }: IContact) => {
  return (
    <li>
      <div></div>
      <span>{props.name}</span>
      <span>{props.email}</span>
      <span>{props.phone}</span>
    </li>
  );
};

export default CardContact;
