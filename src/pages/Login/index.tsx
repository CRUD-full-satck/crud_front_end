import { Link } from "react-router-dom";
import FormLogin from "../../components/FormLogin/index";
import { FormBase } from "../../style/global";

const PageLogin = () => {
  return (
    <FormBase>
      <h1>Login</h1>
      <FormLogin />
      <p>
        Se nao possui uma conta, vá para a página de <Link to="/register">CADASTRO</Link>
      </p>
    </FormBase>
  );
};

export default PageLogin;
