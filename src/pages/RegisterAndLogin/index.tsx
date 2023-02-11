import FormLogin from "../../components/FormLogin/index";
import {
  BookBack,
  BookFront,
  BookWrap,
  BorderBook,
  Perspective,
  BorderBottonBook,
} from "../../style/flippedBook";
import FormRegister from "../../components/FormRegister";
import { RegisterContainer, LoginContainer, Paragraph } from "./style";
import useClientContext from "../../context/clientContext";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageRegistrationAndLogin = () => {
  const { effectLogin, flipped, setFlipped } = useClientContext();

  return (
    <>
      <Perspective>
        <BookWrap
          flipped={flipped}
          effectLogin={effectLogin}
          onClick={() => setFlipped(!flipped)}
        >
          <BookFront>
            <LoginContainer onClick={(e) => e.stopPropagation()}>
              <h1>Login</h1>
              <FormLogin />
            </LoginContainer>
            <Paragraph>
              To go to the registration screen, click anywhere on the screen.
            </Paragraph>
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
