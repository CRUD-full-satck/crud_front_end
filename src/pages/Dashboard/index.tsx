import ListContacts from "../../components/ListContacts/index.";
import FormCreateContact from "../../components/FormCreateContact/index";
import useClientContext from "../../context/clientContext";
import ModalEditContact from "../../components/ModalEditContact";

const PageDashboard = () => {
  const { modalUpdateContact } = useClientContext();
  return (
    <div>
      <div>
        <FormCreateContact />
      </div>
      <div>
        <h1>Dashboard</h1>
        <ListContacts />
      </div>
      {modalUpdateContact && <ModalEditContact />}
    </div>
  );
};

export default PageDashboard;
