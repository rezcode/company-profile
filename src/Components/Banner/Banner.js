import React from "react";
import bannerImg from "../../Assets/Images/banner-img.png";
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div
          className="row align-items-center mb-5"
          style={{ minHeight: "90vh" }}
        >
          <div className="col-md-5">
            <div className={style.bannerImg}>
              <img src={bannerImg} alt="banner" />
            </div>
          </div>
          <div className="col-md-7">
            <div className={style.bannerMessage}>
              <h1>Welcome Message</h1>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h3 className={style.ownerName}>John Doe</h3>
              <i>Chief Executive Operations</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
