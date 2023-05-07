import * as z from "zod";

export const LinkSchema = z.object({
    title: z.string().nonempty("Digite o título"),
    link: z.string().nonempty("Digite o link").url("Não é uma url válida"),
    img: z.string().nonempty("Digite a url da imagem").url("Não é uma url válida"),
    category: z.string(),
    comments: z.string()
});

export type TLinkFormValues = z.infer<typeof LinkSchema>;