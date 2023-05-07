import * as z from "zod";

export const registerSchema = z
  .object({
    name: z.string().nonempty("Por favor, preencha seu nome"),
    email: z.string().email("Por favor, ensira um email válido"),
    password: z
      .string()
      .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
     .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
     .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
     .regex(
       /(?=.*?[#?!@$%^&*-])/,
       "É necessário pelo menos um caractere especial"),
    confirmPassword: z.string().min(1, "Por favor, confirme sua senha"),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });
