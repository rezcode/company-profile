import React from "react";
import style from "./Footer.module.css";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={style.footerWrapper}>
        <div className={`${style.overlay} ${style.overlayRed}`}>
          <div className={style.footerContent}>
            <div className="container">
              <div
                className="row align-items-center justify-content-center"
                style={{ height: "500px", color: "white" }}
              >
                <div className={`col-5 text-center ${style.borderRight}`}>
                  <h2>
                    Lest Stay <br /> Connected
                  </h2>
                </div>
                <div className="col-5 text-center mt-3">
                  <h3>Follow Us</h3>
                  <p className={style.socials}>
                    <GrInstagram size={30} />
                    <BsLinkedin size={30} />
                    <FiTwitter size={30} />
                    <FaFacebookSquare size={30} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
