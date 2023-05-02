import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { LinkContext } from "../../../Providers/LinkContext";
import { StyledModal } from "./style";
import { Input } from "../../Input";
import { StyledSubmitButton } from "../../../styles/button";

export const AddNewLinkModal = ({ isModalOpen, setIsModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const { newLink } = useContext(LinkContext);

  const submit = (formData) => {
    newLink(formData);
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
                {...register("title")}
                disabled={loading}
              />
              <Input
                type="text"
                label="Link"
                id="link"
                placeholder="Ex: https://link.com"
                {...register("link")}
                disabled={loading}
              />
              <Input
                type="text"
                label="Url da imagem"
                id="imgUrl"
                placeholder="Ex: https://imagem/img2.png"
                {...register("imgUrl")}
                disabled={loading}
              />
              <select name="Categorias" id="category">
                <option value="">Seleciona uma opção de categoria</option>
                <option value="videos">Vídeos</option>
                <option value="images">Imagens</option>
                <option value="recipes">Receitas</option>
                <option value="figma">Figmas</option>
                <option value="documents">Documentos</option>
              </select>
              <textarea name="" id="" cols="30" rows="10"></textarea>
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
