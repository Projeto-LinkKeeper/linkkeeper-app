import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LinkContext } from "../../../Providers/LinkContext";
import { StyledModal } from "./style";
import { Input } from "../../Input";
import { StyledSubmitButton } from "../../../styles/button";
import { LinkSchema, TLinkFormValues } from "./LinkSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export interface IModalHandleProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddNewLinkModal = ({
  isModalOpen,
  setIsModalOpen,
}: IModalHandleProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLinkFormValues>({
    resolver: zodResolver(LinkSchema),
  });

  const [loading, setLoading] = useState(false);
  const { newLink } = useContext(LinkContext);

  const submit: SubmitHandler<TLinkFormValues> = (formData) => {
    console.log(formData);
    newLink(formData, setLoading);
    console.log(formData);
  };

  if (isModalOpen) {
    return (
      <StyledModal>
        <div className="modal__container">
          <div className="header__modal">
            <h3>Adicionar Link</h3>
            <button
              className="modalCloseBtn"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>
          </div>

          <div className="body__modal">
            <form className="form__modal" onSubmit={handleSubmit(submit)}>
              <Input
                type="text"
                label="Título"
                id="title"
                placeholder="Título do link"
                error={errors.title?.message}
                {...register("title")}
                disabled={loading}
              />
              <Input
                type="text"
                label="Link"
                id="link"
                placeholder="Ex: https://link.com"
                error={errors.link?.message}
                {...register("link")}
                disabled={loading}
              />
              <Input
                type="text"
                label="Url da imagem"
                id="img"
                placeholder="Ex: https://imagem/img2.png"
                error={errors.img?.message}
                {...register("img")}
                disabled={loading}
              />
              <select id="category" {...register("category")}>
                <option value="">Seleciona uma opção de categoria</option>
                <option value="books">Livros</option>
                <option value="video">Vídeo</option>
                <option value="music">Música</option>
                <option value="series">Séries</option>
                <option value="recipes">Receitas</option>
                <option value="others">Outra</option>
              </select>
              <textarea
                id="comments"
                cols={30}
                rows={10}
                {...register("comments")}
              ></textarea>
              <StyledSubmitButton
                $backgroundColor={loading ? "disabled" : "primary"}
                type="submit"
                disabled={loading}
              >
                {loading ? "Adicionando link..." : "Adicionar Link"}
              </StyledSubmitButton>
            </form>
          </div>
        </div>
      </StyledModal>
    );
  }
};
