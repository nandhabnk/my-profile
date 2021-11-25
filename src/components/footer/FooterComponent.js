import React from "react";
import "./FooterComponent.scss";
import {
  AiFillLinkedin,
  AiTwotoneMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
const FooterComponent = (props) => {
  return (
    <React.Fragment>
      <div className="footer-style">
        <div className="footer-heading">BNK</div>
        <div className="footer-links">
          <a>
            <AiFillLinkedin />
          </a>
          <a>
            <AiTwotoneMail />
          </a>
          <a>
            <AiOutlineWhatsApp />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterComponent;
