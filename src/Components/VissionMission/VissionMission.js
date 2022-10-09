import React from "react";
import style from "./VissionMission.module.css";
import iconMission1 from "../../Assets/Logo/Vector (1).png";
import iconMission2 from "../../Assets/Logo/Vector (2).png";
import iconMission3 from "../../Assets/Logo/Vector (3).png";
import iconMission4 from "../../Assets/Logo/Vector (4).png";

const VissionMission = () => {
  return (
    <>
      <div className={style.background}>
        <div className={style.overlay}>
          <div className={style.content}>
            <div className="container">
              <div className="row text-center justify-content-center">
                <h1 className="mb-3">Our Vission</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <div className="container">
                  <hr />
                </div>
                <h1 className="mb-3">Our Mission</h1>
                <div className="row">
                  <div className="col-lg-3 col-6 mb-4">
                    <div className="card" style={{ width: "100%" }}>
                      <div className={style.cardImg}>
                        <img
                          src={iconMission1}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                    </div>
                    <h5 className="my-3">Mission One</h5>
                    <p>
                      Lorem ipsum dolor sit amet incididunt do ut labore et sit
                      eiusmod tempor magna.
                    </p>
                  </div>
                  <div className="col-lg-3 col-6 mb-4">
                    <div className="card" style={{ width: "100%" }}>
                      <div className={style.cardImg}>
                        <img
                          src={iconMission2}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                    </div>
                    <h5 className="my-3">Mission Two</h5>
                    <p>
                      Lorem ipsum dolor sit amet incididunt do ut labore et sit
                      eiusmod tempor magna.
                    </p>
                  </div>
                  <div className="col-lg-3 col-6 mb-4">
                    <div className="card" style={{ width: "100%" }}>
                      <div className={style.cardImg}>
                        <img
                          src={iconMission3}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                    </div>
                    <h5 className="my-3">Mission Three</h5>
                    <p>
                      Lorem ipsum dolor sit amet incididunt do ut labore et sit
                      eiusmod tempor magna.
                    </p>
                  </div>
                  <div className="col-lg-3 col-6 mb-4">
                    <div className="card" style={{ width: "100%" }}>
                      <div className={style.cardImg}>
                        <img
                          src={iconMission4}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                    </div>
                    <h5 className="my-3">Mission Four</h5>
                    <p>
                      Lorem ipsum dolor sit amet incididunt do ut labore et sit
                      eiusmod tempor magna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VissionMission;
