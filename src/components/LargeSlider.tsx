//import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import singa from "../assets/png_folder/singa.png";

function LargeSlider() {
  //render() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container-md">
      <div className="mt-5">
        <Slider {...settings}>
          <div>
            <Card className="bg-dark d-flex p-3 px-5" style={{ height: "12rem" }}>
              <img
                src={singa}
                alt=""
                style={{
                  width: "15rem",
                  transform: "rotate(90deg)",
                  bottom: "-60px",
                }}
                className="z-n1 position-absolute singa d-sm-block d-none"
              />
              <Card.Body className="text-white align-self-sm-center align-self-md-end">
                <h1>Try New Flavor</h1>
                <p>Citrus Monster</p>
                <button
                  className="btn btn-dark btn-sm rounded-pill border-secondary"
                  style={{ maxWidth: "5rem" }}
                >
                  View
                </button>{" "}
              </Card.Body>
            </Card>
          </div>
          <div>
          <Card className="bg-dark d-flex p-3 px-5" style={{ height: "12rem" }}>
              <img
                src={singa}
                alt=""
                style={{
                  width: "15rem",
                  transform: "rotate(90deg)",
                  bottom: "-60px",
                }}
                className="z-n1 position-absolute singa d-sm-block d-none"
              />
              <Card.Body className="text-white align-self-sm-center align-self-md-end">
                <h1>Try New Flavor</h1>
                <p>Citrus Monster</p>
                <button
                  className="btn btn-dark btn-sm rounded-pill border-secondary"
                  style={{ maxWidth: "5rem" }}
                >
                  View
                </button>{" "}
              </Card.Body>
            </Card>
          </div>
          <div>
          <Card className="bg-dark d-flex p-3 px-5" style={{ height: "12rem" }}>
              <img
                src={singa}
                alt=""
                style={{
                  width: "15rem",
                  transform: "rotate(90deg)",
                  bottom: "-60px",
                }}
                className="z-n1 position-absolute singa d-sm-block d-none"
              />
              <Card.Body className="text-white align-self-sm-center align-self-md-end">
                <h1>Try New Flavor</h1>
                <p>Citrus Monster</p>
                <button
                  className="btn btn-dark btn-sm rounded-pill border-secondary"
                  style={{ maxWidth: "5rem" }}
                >
                  View
                </button>{" "}
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
  //   }
}

export default LargeSlider;
