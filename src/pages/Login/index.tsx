import { Link } from "react-router-dom";
import FormLogin from "../../components/FormLogin/index";

const PageLogin = () => {
  return (
    <div>
      <h1>Login</h1>
      <FormLogin />
      <p>
        Se nao possui uma conta, vá para a página de <Link to="/register">CADASTRO</Link>
      </p>
    </div>
  );
};

export default PageLogin;
