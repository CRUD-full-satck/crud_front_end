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
import { ContainerModal } from "../../style/containerModal";
import { ContainerForm } from "../../style/containerForm";
import FormLogin from "../../components/FormLogin";

const PageDashboard = () => {
  const [effect, setEffect] = useState<boolean>(false);
  const { modalUpdateContact, setEffectLogin } = useClientContext();

  const array = [1, 2, 3, 4];

  useEffect(() => {
    setEffect(true);
    setEffectLogin(false);
  }, []);

  return (
    <BookContainer>
      <Book effect={effect}>
        <BookOpenFront>
          <ContainerForm>
            <h1>Login</h1>
            <FormLogin />
          </ContainerForm>
        </BookOpenFront>
        {array.map(() => (
          <Page />
        ))}
        <Page>
          <ContainerFormCreateContact>
            <h1>Adicione seu contato</h1>
            <FormCreateContact />
          </ContainerFormCreateContact>
        </Page>
        <LastPage>
          <ListContacts />
          {/* <button>proxima</button> */}
          {modalUpdateContact && (
            <ContainerModal>
              <ModalEditContact />
            </ContainerModal>
          )}
        </LastPage>
        <BookOpenBack />
      </Book>
    </BookContainer>
  );
};

export default PageDashboard;
