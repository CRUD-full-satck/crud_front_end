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
import { ContainerModal } from "../../style/modal";
import { ContainerForm } from "../../style/containerForm";
import FormLogin from "../../components/FormLogin";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const PageDashboard = () => {
  const [effect, setEffect] = useState<boolean>(false);
  const { modalUpdateContact, setEffectLogin } = useClientContext();

  const array = [1, 2, 3, 4];

  useEffect(() => {
    setEffect(true);
    setEffectLogin(false);
  }, []);

  return (
    <>
      <BookContainer>
        <Book effect={effect}>
          <BookOpenFront>
            <ContainerForm>
              <h1>Login</h1>
              <FormLogin />
            </ContainerForm>
          </BookOpenFront>
          {array.map((value) => (
            <Page key={value} />
          ))}
          <Page>
            <ContainerFormCreateContact>
              <h1>Add your contact</h1>
              <FormCreateContact />
            </ContainerFormCreateContact>
            <Link to="/login" replace onClick={() => localStorage.clear()}>
              <MdOutlineArrowBackIosNew />
              back to login screen
            </Link>
          </Page>
          <LastPage>
            <ListContacts />
            {modalUpdateContact && (
              <ContainerModal>
                <ModalEditContact />
              </ContainerModal>
            )}
          </LastPage>
          <BookOpenBack />
        </Book>
      </BookContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        transition={Flip}
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default PageDashboard;
