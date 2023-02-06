import ListContacts from "../../components/ListContacts/index.";
import FormCreateContact from "../../components/FormCreateContact/index";

const PageDashboard = () => {
  return (
    <>
      <FormCreateContact />
      <div>
        <h1>Dashboard</h1>
        <ListContacts />
      </div>
    </>
  );
};

export default PageDashboard;
