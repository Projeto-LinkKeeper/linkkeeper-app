import { Link, useLocation, useNavigate } from "react-router-dom";
import Logotipo from "../../assets/logo.svg";
import ProfileIcon from "../../assets/profile-icon.png";
import { StyledHeader } from "./style";
import { useContext } from 'react';
import { LinkContext } from "../../Providers/LinkContext";
import { useState } from "react";

export const Header = () => {

  const {valueOfSearch} = useContext(LinkContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  return (
    <StyledHeader>
      {location.pathname === "/register" ? (
        <div className="registerHeader">
          <img src={Logotipo} alt="Logotipo" />
          <Link to="/" className="backPageBtn">
            Voltar
          </Link>
        </div>
      ) : null}

      {location.pathname === "/home" ? (
          <div className="header">
            <div className="header-left">
              <img src={Logotipo} alt="Logotipo" />
            </div>
            <div className="header-right">
              <form>
                <input type="text" placeholder="Pesquisar"  value={valueOfSearch}/>
                <button>Pesquisar</button>
              </form>
            </div>
            {showMenu && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={userLogout}>
                  Sair
                </button>
              </div>
            )}
          </div>
      ) : null}

      {location.pathname === "/" ? (
        <div className="loginHeader">
          <img src={Logotipo} alt="Logotipo" />
        </div>
      ) : null}
    </StyledHeader>
  );
};
