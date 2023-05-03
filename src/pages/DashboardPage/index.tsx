import { Header } from "../../components/Header";
import listIcon from "../../assets/listIcon.svg";
import gridIcon from "../../assets/gridIcon.svg";
import Image from "../../assets/image 1.svg";
import { StyledCardList, StyledGridControls, StyledUlList } from "./styleList";
import { useContext, useState } from "react";
import { StyledCardGrid, StyledUlGrid } from "./styleGrid";
import { AddNewLinkModal } from "../../components/Modals/AddLinkModal/AddLinkModal";
import { LinkContext } from "../../Providers/LinkContext";

export const DashboardPage = () => {
  const [grid, setGrid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { listLinks } = useContext(LinkContext);

  console.log(listLinks);

  return (
    <>
      <main>
        <div>
          <Header />
          <main>
            <AddNewLinkModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
            <StyledGridControls>
              <h3>Vídeos</h3>
              <button onClick={() => setIsModalOpen(true)}>add link</button>
              <div className="gridControls">
                <button onClick={() => setGrid(true)}>
                  <img src={listIcon} alt="" />
                </button>

                <button onClick={() => setGrid(false)}>
                  <img src={gridIcon} alt="" />
                </button>
              </div>
            </StyledGridControls>

            {grid ? (
              <div>
                <StyledUlList>
                  {listLinks.map((link) => {
                    console.log(link);

                    return (
                      <StyledCardList>
                        <img src={link.img} alt="" />
                        <div>
                          <h3>{link.title}</h3>
                          <h3>Comentários</h3>
                          <p>{link.comments}</p>
                          <button>Remover link</button>
                        </div>
                      </StyledCardList>
                    );
                  })}
                  <StyledCardList>
                    <img src={Image} alt="" />
                    <div>
                      <h3>
                        Clonando a interface do Twitter: Aula 1 - Projeto e
                        Ferramentas [HTML, CSS e JS]
                      </h3>
                      <h3>Comentários</h3>
                      <p>
                        -Ferramentas úteis em 4:26 - Diferenças de HTML e JS
                        -Clonagem de rep em 3:01
                      </p>
                      <button>Remover link</button>
                    </div>
                  </StyledCardList>
                  <StyledCardList>
                    <img src={Image} alt="" />
                    <div>
                      <h3>
                        Clonando a interface do Twitter: Aula 1 - Projeto e
                        Ferramentas [HTML, CSS e JS]
                      </h3>
                      <h3>Comentários</h3>
                      <p>
                        -Ferramentas úteis em 4:26 - Diferenças de HTML e JS
                        -Clonagem de rep em 3:01
                      </p>
                      <button>Remover link</button>
                    </div>
                  </StyledCardList>
                  <StyledCardList>
                    <img src={Image} alt="" />
                    <div>
                      <h3>
                        Clonando a interface do Twitter: Aula 1 - Projeto e
                        Ferramentas [HTML, CSS e JS]
                      </h3>
                      <h3>Comentários</h3>
                      <p>
                        -Ferramentas úteis em 4:26 - Diferenças de HTML e JS
                        -Clonagem de rep em 3:01
                      </p>
                      <button>Remover link</button>
                    </div>
                  </StyledCardList>
                </StyledUlList>
              </div>
            ) : (
              <StyledUlGrid>
                {listLinks.map((link) => {
                  console.log(link);

                  return (
                    <StyledCardList>
                      <img src={link.img} alt="" />
                      <div>
                        <h3>{link.title}</h3>
                        <h3>Comentários</h3>
                        <p>{link.comments}</p>
                        <button>Remover link</button>
                      </div>
                    </StyledCardList>
                  );
                })}
                <StyledCardGrid>
                  <img src={Image} alt="" />
                  <div>
                    <h3>
                      Clonando a interface do Twitter: Aula 1 - Projeto e
                      Ferramentas [HTML, CSS e JS]
                    </h3>
                    <button>Remover link</button>
                  </div>
                </StyledCardGrid>
                <StyledCardGrid>
                  <img src={Image} alt="" />
                  <div>
                    <h3>
                      Clonando a interface do Twitter: Aula 1 - Projeto e
                      Ferramentas [HTML, CSS e JS]
                    </h3>
                    <button>Remover link</button>
                  </div>
                </StyledCardGrid>
                <StyledCardGrid>
                  <img src={Image} alt="" />
                  <div>
                    <h3>
                      Clonando a interface do Twitter: Aula 1 - Projeto e
                      Ferramentas [HTML, CSS e JS]
                    </h3>
                    <button>Remover link</button>
                  </div>
                </StyledCardGrid>
              </StyledUlGrid>
            )}
          </main>
        </div>
      </main>
    </>
  );
};
