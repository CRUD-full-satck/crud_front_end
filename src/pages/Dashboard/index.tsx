import ListContacts from "../../components/ListContacts/index.";
import FormCreateContact from "../../components/FormCreateContact/index";
import useClientContext from "../../context/clientContext";
import ModalEditContact from "../../components/ModalEditContact";
import {
  Book,
  Page,
  BookContainer,
  BookOpenBack,
  BookOpenFront,
} from "../../style/flippedOpenBook";
import { ContainerFormCreateContact } from "./style";
import { LastPage } from "./style";
import { useEffect, useState } from "react";

const PageDashboard = () => {
  const [effect, setEffect] = useState<boolean>(false);
  const { modalUpdateContact } = useClientContext();

  const array = [1, 2, 3, 4];

  useEffect(() => {
    setEffect(true);
  }, []);

  return (
    <BookContainer>
      <Book effect={effect}>
        <BookOpenFront />
        {array.map(() => (
          <Page />
        ))}
        <Page>
          <ContainerFormCreateContact>
            <h1>Teste</h1>
            <FormCreateContact />
          </ContainerFormCreateContact>
        </Page>
        <LastPage>
          <ListContacts />
          <button>proxima</button>
        </LastPage>
        {modalUpdateContact && <ModalEditContact />}
        <BookOpenBack />
      </Book>
    </BookContainer>
  );
};

export default PageDashboard;
