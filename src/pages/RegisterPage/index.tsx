import logo from "../../assets/logo.svg";
import { RegisterForm } from "../../components/RegisterForm";

export const RegisterPage = () => {
  return (
    <main>
      <div>
        <img src={logo} alt="logo" />
        <RegisterForm />
      </div>
    </main>
  );
};
