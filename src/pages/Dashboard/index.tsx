import ListContacts from "../../components/ListContacts/index.";
import FormCreateContact from "../../components/FormCreateContact/index";
import useClientContext from "../../context/clientContext";
import ModalEditContact from "../../components/ModalEditContact";

const PageDashboard = () => {
  const { modalUpdateContact } = useClientContext();
  return (
    <>
      <FormCreateContact />
      <div>
        <h1>Dashboard</h1>
        <ListContacts />
      </div>
      {modalUpdateContact && <ModalEditContact />}
    </>
  );
};

export default PageDashboard;
