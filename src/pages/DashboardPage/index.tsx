import { Header } from "../../components/Header";
import listIcon from "../../assets/listIcon.svg";
import gridIcon from "../../assets/gridIcon.svg";
import { StyledCardList, StyledGridControls, StyledUlList } from "./styleList";
import { useContext, useState } from "react";
import { StyledCardGrid, StyledUlGrid } from "./styleGrid";
import { AddNewLinkModal } from "../../components/Modals/AddLinkModal/AddLinkModal";
import { LinkContext } from "../../Providers/LinkContext";

export const DashboardPage = () => {
  const [grid, setGrid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { listLinks, listCategories, deleteLink } = useContext(LinkContext);

  console.log(listCategories);
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
            <div>
              {listCategories.map((currentCategory) => (
                <button>{currentCategory}</button>
              ))}
            </div>
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
                    return (
                      <StyledCardList key={link.id}>
                        <div>
                          <img src={link.img} alt="" />
                        </div>
                        <div>
                          <h3>{link.title}</h3>
                          <a href={link.link}>{link.link}</a>
                          <h3>Comentários</h3>
                          <p>{link.comments}</p>
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
                  return (
                    <StyledCardGrid>
                      <img src={link.img} alt="" />
                      <div>
                        <h3>{link.title}</h3>
                        <a href={link.link}>{link.link}</a>
                        <h3>Comentários</h3>
                        <p>{link.comments}</p>
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
