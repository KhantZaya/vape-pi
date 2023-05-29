import Card from "react-bootstrap/Card";
import yolo from "../assets/png_folder/yolo.png";
import yoloplus from  "../assets/png_folder/yoloplus.png";

function GridSection() {
  return (
    <div className="container-fluid mt-5 mx-auto">
      <div className="row w-100 m-0">
        <div className="col-md-12 col-lg-6 card border-none p-0">
          <Card
            style={{ height: "50rem" }}
            className="d-flex flex-row w-100 h-100 p-0 bg-dark text-white overflow-hidden"
          >
            <Card.Body
              className="text-start py-5 align-self-end"
              style={{ maxWidth: "25rem" }}
            >
              <h1>Membership Program</h1>
              <Card.Text className="w-70">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
              className="z-n1 position-absolute top-0 end-0"
              style={{ width: "13rem" }}
            />
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 card p-0 border-none">
          <Card style={{}} className="text-start bg-dark text-white p-0">
            <Card.Img variant="top" src={yoloplus} className="card-photo"/>
            <Card.Body>
              <Card.Title>Devieces</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 card border-none p-0">
          <div className="p-0 h-50 ">
            <Card style={{}} className="text-start bg-dark text-white p-0">
                <Card.Img variant="top" src={yoloplus} className="card-photo"/>
                <Card.Body>
                <Card.Title>Pods</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
          </div>
          {/* <div className="p-0">
            <Card style={{}} className="text-start bg-dark text-white p-0">
                <Card.Img variant="top" src={yoloplus} className="card-photo"/>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default GridSection;
