import FormRegister from "../../components/FormRegister/index";
import { Link } from "react-router-dom";
import { FormBase } from "../../style/global";

const PageRegister = () => {
  return (
    <FormBase>
      <h1>Cadastrar</h1>
      <FormRegister />

      <Link to="/login">Voltar para página de login</Link>
    </FormBase>
  );
};

export default PageRegister;
