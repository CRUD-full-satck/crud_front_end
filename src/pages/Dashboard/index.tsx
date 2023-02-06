import ListContacts from "../../components/ListContacts/index.";
import FormCreateContact from "../../components/FormCreateContact/index";
import useClientContext from "../../context/clientContext";
import ModalEditContact from "../../components/ModalEditContact";
import { DashboardContainer, ListContactStyle } from "./style";
import { FormBase } from "../../style/global";

const PageDashboard = () => {
  const { modalUpdateContact } = useClientContext();
  return (
    <DashboardContainer>
      <FormBase>
        <FormCreateContact />
      </FormBase>
      <ListContactStyle>
        <h1>Dashboard</h1>
        <ListContacts />
      </ListContactStyle>
      {modalUpdateContact && <ModalEditContact />}
    </DashboardContainer>
  );
};

export default PageDashboard;
