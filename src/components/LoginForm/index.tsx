import { SubmitHandler, useForm } from "react-hook-form";
import { schema, TLoginFormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../inputs";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserContext";

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
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
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
            <button type="submit"
                disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
            </button>
        </form>


    )
}