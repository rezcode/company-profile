import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonials.css";
import { Pagination, Navigation } from "swiper";
import testimonialImg1 from "../../Assets/Images/testimonial1.jpg";
import testimonialImg2 from "../../Assets/Images/testimonial2.jpg";
import testimonialImg3 from "../../Assets/Images/testimonial3.jpg";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      image_testimonial: testimonialImg1,
      tesimonial:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      name: "John Doe",
      company: "Telkom Indonesia",
    },
    {
      id: 2,
      image_testimonial: testimonialImg2,
      tesimonial:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      name: "John Doe",
      company: "Telkom Indonesia",
    },
    {
      id: 3,
      image_testimonial: testimonialImg3,
      tesimonial:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      name: "John Doe",
      company: "Telkom Indonesia",
    },
  ];

  return (
    <>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <h4 className="display-4 mb-4 text-center">
            What our clients say about us
          </h4>
          <div className="col-lg-8 col-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card mb-3" style={{ width: "100%" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className="testimonial-img">
                          <img
                            src={item?.image_testimonial}
                            className="img-fluid rounded-start"
                            alt="Testimonial"
                          />
                        </div>
                      </div>
                      <div className="col-md-8 my-auto">
                        <div className="card-body testimonial-content">
                          <h3 className="text-secondary">
                            <RiDoubleQuotesR />
                          </h3>
                          <p className="card-text text-secondary">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <h5 className="text-end">{item?.name}</h5>
                          <p className="card-text text-end m-0">
                            <small>Last updated 3 mins ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
