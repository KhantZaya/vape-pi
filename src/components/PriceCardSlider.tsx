import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import yolo from "../assets/png_folder/yolo.png";
import SlidePriceCard from "./SlidePriceCard";
import "../App.css";

function PriceCardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="container-fluid mt-5 ">
      <Card
        style={{ height: "50rem" }}
        className="d-flex flex-row row w-100 h-100 p-0 bg-dark text-white overflow-hidden mx-auto"
      >
        <Card.Body
          className="text-sm-end text-md-end text-lg-center py-3 col-sm-12 col-md-4 align-self-end mx-auto"
          style={{ maxWidth: "25rem" }}
        >
          <h2>Devices</h2>
          <Card.Text className="w-70">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <button
            className="btn btn-dark btn-sm rounded-pill border-secondary"
            style={{ maxWidth: "5rem" }}
          >
            View
          </button>
        </Card.Body>
        <img
          src={yolo}
          alt="yolo img"
          className="z-n1 position-absolute top-0 start-0 d-sm-block d-none"
          style={{ width: "10rem" }}
        />

        <Slider {...settings}className="col-sm-12 col-md-8 align-self-end p-3">
          <div>
            <SlidePriceCard />
          </div>
          <div>
            <SlidePriceCard />
          </div>
          <div>
            <SlidePriceCard />
          </div>
          <div>
            <SlidePriceCard />
          </div>
          <div>
            <SlidePriceCard />
          </div>
        </Slider>
      </Card>
    </div>
  );
}

export default PriceCardSlider;
