import FormRegister from "../../components/FormRegister/index";
import { Link } from "react-router-dom";

const PageRegister = () => {
  return (
    <div>
      <FormRegister />

      <Link to="/login">Voltar para página de login</Link>
    </div>
  );
};

export default PageRegister;
