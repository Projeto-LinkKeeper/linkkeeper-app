import { Header } from "../../components/Header";
import listIcon from "../../assets/listIcon.svg";
import gridIcon from "../../assets/gridIcon.svg";
import { StyledCardList, StyledGridControls, StyledUlList } from "./styleList";
import { useContext, useState } from "react";
import { StyledCardGrid, StyledUlGrid } from "./styleGrid";
import { AddNewLinkModal } from "../../components/Modals/AddLinkModal/AddLinkModal";
import { LinkContext } from "../../Providers/LinkContext";

import { StyledFilter } from "./styleFilter";

interface IModalCategory {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}
export const DashboardPage = () => {
  const [grid, setGrid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { listLinks, listCategories, deleteLink, filterLinks, getLinks } =
    useContext(LinkContext);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

            <div>
              {listCategories.map((currentCategory) => (
                <button>{currentCategory}</button>
              ))}

              <StyledFilter>
                {listCategories.length>=2? <button onClick={() => getLinks()}>Todos</button>: null}
                {listCategories.map((currentCategory) => (
                  <button
                    key={currentCategory}
                    className="filter"
                    onClick={() => {
                      filterLinks(currentCategory),
                        setSelectedCategory(currentCategory);
                    }}
                  >
                    {currentCategory.charAt(0).toUpperCase() +
                      currentCategory.slice(1)}
                  </button>
                ))}
              </StyledFilter>
            </div>
            <StyledGridControls>
              <h3>
                {selectedCategory
                  ? selectedCategory.charAt(0).toUpperCase() +
                    selectedCategory.slice(1)
                  : "Seus Links"}
              </h3>
              <button onClick={() => setIsModalOpen(true)}>
                + Adicionar link
              </button>
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
                    const comment = link.comments;
                    return (
                      <StyledCardList key={link.id}>
                        <div>
                          <img src={link.img} alt="" />
                        </div>
                        <div>
                          <h3>{link.title}</h3>
                          <a href={link.link}>{link.link}</a>
                          <h3>Comentários:</h3>
                          <p>{comment}</p>
                          <button onClick={() => deleteLink(link.id)}>
                            Remover link
                          </button>
                        </div>
                      </StyledCardList>
                    );
                  })}
                </StyledUlList>
              </div>
            ) : (
              <StyledUlGrid>
                {listLinks.map((link) => {
                  const comment = link.comments;
                  return (
                    <StyledCardGrid>
                      <img src={link.img} alt="" />
                      <div>
                        <h3>{link.title}</h3>
                        <a href={link.link}>{link.link}</a>
                        <h3>Comentários</h3>
                        <p>{`${comment.substring(0, 50)}...`}</p>
                        <button onClick={() => deleteLink(link.id)}>
                          Remover link
                        </button>
                      </div>
                    </StyledCardGrid>
                  );
                })}
              </StyledUlGrid>
            )}
          </main>
        </div>
      </main>
    </>
  );
};
