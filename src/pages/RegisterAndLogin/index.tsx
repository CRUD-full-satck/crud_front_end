import FormLogin from "../../components/FormLogin/index";
import {
  BookBack,
  BookFront,
  BookWrap,
  BorderBook,
  Perspective,
} from "../../style/flippedBook";
import { useState } from "react";
import FormRegister from "../../components/FormRegister";
import { RegisterContainer } from "./style";
import { ContainerForm } from "../../style/containerForm";
import { HiOutlineUserCircle } from "react-icons/hi";

const PageRegistrationAndLogin = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Perspective>
      <BookWrap flipped={flipped} onClick={(e) => setFlipped(!flipped)}>
        <BookFront>
          <ContainerForm onClick={(e) => e.stopPropagation()}>
            <h1>Login</h1>
            <FormLogin />
          </ContainerForm>
        </BookFront>
        <BorderBook />
        <BookBack>
          <RegisterContainer onClick={(e) => e.stopPropagation()}>
            <h1>Register</h1>
            <FormRegister />
          </RegisterContainer>
        </BookBack>
      </BookWrap>
    </Perspective>
  );
};

export default PageRegistrationAndLogin;
