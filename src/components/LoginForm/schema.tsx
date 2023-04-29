import * as z from "zod";
export const schema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("O e-mail é obrigatório"),

  password: z
    .string()
    .min(1, "Verifique sua senha!")
    .regex(/(?=.*?[A-Z])/, "Verifique sua senha!")
    .regex(/(?=.*?[a-z])/, "Verifique sua senha!")
    .regex(/(?=.*?[0-9])/, "Verifique sua senha!")
    .regex(/[^0-9A-Za-z]*/, "Verifique sua senha!"),
});
export type TLoginFormValues = z.infer<typeof schema>;
