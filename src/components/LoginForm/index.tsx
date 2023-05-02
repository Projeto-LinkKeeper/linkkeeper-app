import { SubmitHandler, useForm } from "react-hook-form";
import { schema, TLoginFormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserContext";
import { StyledFormContainer } from "../../styles/form";
import { StyledSubmitButton } from "../../styles/button";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit(submit)}>
      <h3>Login</h3>
      <Input
        label="Email"
        type="email"
        id="login"
        placeholder="Digite seu email"
        {...register("email")}
        error={errors.email?.message}
        disabled={loading}
      />
      <Input
        label="Password"
        type="password"
        id="senha"
        placeholder="Digite sua senha"
        error={errors.password?.message}
        {...register("password")}
        disabled={loading}
      />
      <StyledSubmitButton
        $backgroundColor={loading ? "disabled" : "primary"}
        type="submit"
        disabled={loading}
      >
        {loading ? "Entrando..." : "Entrar"}
      </StyledSubmitButton>

      <span>Ainda não possui uma conta?</span>

      <Link className="registerLink" to="/register">
        Cadastre-se
      </Link>
    </StyledFormContainer>
  );
};
