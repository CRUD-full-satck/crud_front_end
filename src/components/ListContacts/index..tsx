import useClientContext from "../../context/clientContext";
import CardContact from "../CardContact";

const ListContacts = () => {
  const { contacts } = useClientContext();

  return (
    <ul>
      {contacts!.map((contact) => {
        return <CardContact key={contact.id} {...contact} />;
      })}
    </ul>
  );
};

export default ListContacts;
