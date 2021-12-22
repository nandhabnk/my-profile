import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/authentication-slice";
import { useNavigate } from "react-router";
import ButtonComponent from "../UI-Elements/ButtonComponent/ButtonComponent";
import "./HeaderComponent.scss";
import {
  AiFillLinkedin,
  AiTwotoneMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
const HeaderComponent = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(authActions.logout(false));
    navigate("/login", { replace: true });
  };

  return (
    <React.Fragment>
      <div className="header-style">
        <span className="header-heading">UNTITLED</span>
        <span className="header-links">
          <ul>
            <li>
              <NavLink
                className={(navdata) => (navdata.isActive ? "link-active" : "")}
                to="/aboutme"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navdata) => (navdata.isActive ? "link-active" : "")}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navdata) => (navdata.isActive ? "link-active" : "")}
                to="/contactme"
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </span>
        <div className="logout-btn">
          <ButtonComponent name="Logout" click={logout} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
