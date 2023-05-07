import { Link, useLocation, useNavigate } from "react-router-dom";
import Logotipo from "../../assets/logo.svg";

import { StyledHeader } from "./style";

import { useContext } from "react";

import { LinkContext } from "../../Providers/LinkContext";
import { useState } from "react";
import { UserContext } from "../../Providers/UserContext";
import { Input } from "../Input";

export const Header = () => {
  const { searchValue, setSearchValue } = useContext(LinkContext);
  const { user } = useContext(UserContext);

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
            <form className="form">
              <Input
                type="text"
                placeholder="Filtrar seus Links"
                className="filter__input"
                id="filter"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button type="button" className="search">
                Filtrar
              </button>
            </form>
            <div className="userInfo">
              <p className="welcome">
                Bem vindo, <span>{user?.name}</span>
              </p>
              <button className="close" onClick={userLogout}>
                Sair
              </button>
            </div>
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
