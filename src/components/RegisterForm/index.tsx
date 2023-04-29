import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../inputs";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./RegisterSchema";
import { StyledFormContainer } from "../../styles/form";
import { StyledSubmitButton } from "../../styles/button";

export interface IResgisterFormData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResgisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const submit: SubmitHandler<IResgisterFormData> = (formData) => {
    userRegister(formData, setLoading);
  };

  return (
    <>
      <StyledFormContainer onSubmit={handleSubmit(submit)}>
        <h3>Crie sua conta</h3>

        <Input
          label="Nome"
          type="text"
          id="name"
          placeholder="Nome"
          error={errors.name?.message}
          disabled={loading}
          {...register("name")}
        />

        <Input
          label="Email"
          type="text"
          id="email"
          placeholder="Email"
          error={errors.email?.message}
          disabled={loading}
          {...register("email")}
        />

        <Input
          label="Senha"
          type="password"
          id="password"
          placeholder="Senha"
          error={errors.password?.message}
          disabled={loading}
          {...register("password")}
        />

        <Input
          label="Confirme sua senha"
          type="password"
          id="confirmPassword"
          placeholder="Confirme sua senha"
          error={errors.confirmPassword?.message}
          disabled={loading}
          {...register("confirmPassword")}
        />

        <StyledSubmitButton
          backgroundColor={loading ? "disabled" : "primary"}
          type="submit"
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </StyledSubmitButton>
      </StyledFormContainer>
    </>
  );
};
