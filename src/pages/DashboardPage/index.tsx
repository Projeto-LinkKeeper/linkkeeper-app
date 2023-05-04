import { Header } from "../../components/Header";
import listIcon from "../../assets/listIcon.svg";
import gridIcon from "../../assets/gridIcon.svg";
import { StyledCardList, StyledGridControls, StyledUlList } from "./styleList";
import { useContext, useState } from "react";
import { StyledCardGrid, StyledUlGrid } from "./styleGrid";
import { AddNewLinkModal } from "../../components/Modals/AddLinkModal/AddLinkModal";
import { LinkContext } from "../../Providers/LinkContext";
import { StyledFilter } from "./styleFilter";

interface IModalCategory{
  selectedCategory: string,
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>,
}

export const DashboardPage = () => {
  const [grid, setGrid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { listLinks, listCategories, deleteLink, filterLinks } = useContext(LinkContext);
  const [selectedCategory, setSelectedCategory] = useState<string |null>(null);
  console.log(selectedCategory)

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
            <StyledFilter>
              {listCategories.map((currentCategory =>
                <button className="filter" onClick={() => { filterLinks(currentCategory), setSelectedCategory(currentCategory)}
              }>{currentCategory.charAt(0).toUpperCase()+currentCategory.slice(1)}</button>
              ))}
            </StyledFilter>
            <StyledGridControls>
              <h3>{selectedCategory? selectedCategory.charAt(0).toUpperCase()+selectedCategory.slice(1) : "Seus Links"}</h3>
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
                    return (
                      <StyledCardList key={link.id}>
                        <div>
                        <img src={link.img} alt="" />
                        </div>
                        <div>
                          <h3>{link.title}</h3>
                          <h3>Comentários</h3>
                          <p>{link.comments}</p>
                          <button onClick={() => deleteLink(link.id)}>Remover link</button>
                        </div>
                      </StyledCardList>
                    );
                  })}
                   {/* <StyledCardList>
                    <div>
                    <img src={Image} alt="" />
                    </div>
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
                    <div>
                    <img src={Image} alt="" />
                    </div>
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
                  </StyledCardList>  */}
                </StyledUlList>
              </div>
            ) : (
              <StyledUlGrid >
                {listLinks.map((link) => {
                  return (
                    <StyledCardGrid key={link.id}>
                      <img src={link.img} alt="" />
                      <div>
                        <h3>{link.title}</h3>
                        <h3>Comentários</h3>
                        <p>{link.comments}</p>
                        <button onClick={()=> deleteLink(link.id)}>Remover link</button>
                      </div>
                    </StyledCardGrid>
                  );
                })}
                {/* <StyledCardGrid>
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
                </StyledCardGrid> */}
              </StyledUlGrid>
            )}
          </main>
        </div>
      </main>
    </>
  );
};
