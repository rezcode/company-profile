import React from "react";
import style from "./Services.module.css";
import serviceImg1 from "../../Assets/Images/services-1.png";
import serviceImg2 from "../../Assets/Images/services-2.png";
import serviceImg3 from "../../Assets/Images/services-3.png";
import serviceImg4 from "../../Assets/Images/services-4.png";

const Services = () => {
  const data = [
    {
      id: 1,
      title: "Service One",
      description:
        "Lorem ipsum dolor sit amet do ut labore et incididunt sit eiusmod tempor magna.",
      image_service: serviceImg1,
    },
    {
      id: 2,
      title: "Service Two",
      description:
        "Lorem ipsum dolor sit amet do ut labore et incididunt sit eiusmod tempor magna.",
      image_service: serviceImg2,
    },
    {
      id: 3,
      title: "Service Three",
      description:
        "Lorem ipsum dolor sit amet do ut labore et incididunt sit eiusmod tempor magna.",
      image_service: serviceImg3,
    },
    {
      id: 4,
      title: "Service Four",
      description:
        "Lorem ipsum dolor sit amet do ut labore et incididunt sit eiusmod tempor magna.",
      image_service: serviceImg4,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {data?.map((item, index) => (
            <div className="col-lg-3 col-6" key={index}>
              <div
                className={style.background}
                style={{ backgroundImage: `url(${item?.image_service})` }}
              >
                <div className={style.overlay}>
                  <div className={style.content}>
                    <h3 className="display-8">{item?.title}</h3>
                    <p>
                      <i>{item?.description}</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.serviceDescription}>
          <div className="row align-items-center mb-5">
            <div className="col-md-4">
              <h1 className="display-3">Our Services</h1>
            </div>
            <div className="col-md-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in cupidatat Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
