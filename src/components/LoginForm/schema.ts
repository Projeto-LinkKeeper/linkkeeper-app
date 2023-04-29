import * as z from "zod";
export const schema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("O e-mail é obrigatório"),

  password: z
    .string()
    .min(1, "Verifique sua senha!")
});
export type TLoginFormValues = z.infer<typeof schema>;
