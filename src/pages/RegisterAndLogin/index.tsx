import FormLogin from "../../components/FormLogin/index";
import {
  BookBack,
  BookFront,
  BookWrap,
  BorderBook,
  Perspective,
  BorderBottonBook,
} from "../../style/flippedBook";
import { useState } from "react";
import FormRegister from "../../components/FormRegister";
import { RegisterContainer } from "./style";
import { ContainerForm } from "../../style/containerForm";
import useClientContext from "../../context/clientContext";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageRegistrationAndLogin = () => {
  const { effectLogin } = useClientContext();
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <Perspective>
        <BookWrap
          flipped={flipped}
          effectLogin={effectLogin}
          onClick={(e) => setFlipped(!flipped)}
        >
          <BookFront>
            <ContainerForm onClick={(e) => e.stopPropagation()}>
              <h1>Login</h1>
              <FormLogin />
            </ContainerForm>
          </BookFront>
          <BorderBook />
          <BorderBottonBook />
          <BookBack>
            <RegisterContainer onClick={(e) => e.stopPropagation()}>
              <h1>Register</h1>
              <FormRegister />
            </RegisterContainer>
          </BookBack>
        </BookWrap>
      </Perspective>
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

export default PageRegistrationAndLogin;
