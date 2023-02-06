import useClientContext from "../../context/clientContext";
import CardContact from "../CardContact";

const ListContacts = () => {
  const { contacts } = useClientContext();

  return (
    <ul>
      {contacts!.map((contact, index) => {
        return <CardContact key={index} {...contact} />;
      })}
    </ul>
  );
};

export default ListContacts;
