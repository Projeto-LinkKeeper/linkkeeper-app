import { Link, useLocation, useNavigate } from "react-router-dom";
import Logotipo from "../../assets/logo.svg";
import ProfileIcon from "../../assets/profile-icon.png"
import { StyledHeader } from "./style";
import { useContext } from 'react';
import { UserContext } from '../../Providers/UserContext';
import { useState } from "react";

export const Header = () => {

  const { user } = useContext(UserContext)
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
            <div></div>
            <div className="header-right">
              <p className="header-item">Home</p>
              <p className="header-item">Buscar</p>
            </div>
            <div className="drop-down">
              <div className="user-profile" onClick={() => setShowMenu(!showMenu)}>
                <img src={ProfileIcon} alt="Profile icon" />
                <p className="header-item">Bem vindo, {user.name}</p>
              </div>
                {showMenu && (
                  <div className="dropdown-menu">
                    <button className="dropdown-item" onClick={userLogout}>
                      Sair
                    </button>
                  </div>
                )}
              </div>
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
