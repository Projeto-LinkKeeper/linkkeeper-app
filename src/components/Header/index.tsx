import { Link, useLocation, useNavigate } from "react-router-dom";
import Logotipo from "../../assets/logo.svg";
// import ProfileIcon from "../../assets/profile-icon.png";
import { StyledHeader } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";

export const Header = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

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
        <div className="homeHeader">
          <img src={Logotipo} alt="Logotipo" />
          <p className="paragraph">Home</p>
          <p className="paragraph">Buscar</p>
          {/* <img src={ProfileIcon} /> */}
          <p className="paragraph">Bem vindo, {user?.name}</p>
          <button className="logoutBtn" onClick={userLogout}>
            Sair
          </button>
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
