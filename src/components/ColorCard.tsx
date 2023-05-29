import Card from "react-bootstrap/Card";
import bluePng from "../assets/png_folder/blueberry_rasberry.png";
import Button from 'react-bootstrap/Button';


function ColorCard() {
  return (
    <div className="container-fluid mt-5">
        <div className="row ">
            <div className="col-sm-12 col-md-6 col-lg-3  m-0">
                <Card style={{height: '11rem'}} className="border-0 bg-warning text-start text-white p-0 overflow-hidden mb-3">
                    <Card.Body className="w-50">
                        <Card.Title>
                            Citrus Mon 20,000 Pul Disposable 3 Percent
                        </Card.Title>
                        <Card.Text>
                        30,000MMK
                        </Card.Text>
                    </Card.Body>
                    <img src={bluePng} alt="" className="z-n1 position-absolute top-0 end-0"
                    style={{ width: "13rem" }}
                    />
                </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3  m-0">
                <Card style={{height: '11rem'}} className="border-0 bg-danger text-start text-white p-0 overflow-hidden mb-3">
                    <Card.Body className="w-50">
                        <Card.Title>
                            Citrus Mon 20,000 Pul Disposable 3 Percent
                        </Card.Title>
                        <Card.Text>
                        30,000MMK
                        </Card.Text>
                    </Card.Body>
                    <img src={bluePng} alt="" className="z-n1 position-absolute top-0 end-0"
                    style={{ width: "13rem" }}
                    />
                </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3  m-0">
                <Card style={{height: '11rem'}} className="border-0 bg-success text-start text-white p-0 overflow-hidden mb-3">
                    <Card.Body className="w-50">
                        <Card.Title>
                            Citrus Mon 20,000 Pul Disposable 3 Percent
                        </Card.Title>
                        <Card.Text>
                        30,000MMK
                        </Card.Text>
                    </Card.Body>
                    <img src={bluePng} alt="" className="z-n1 position-absolute top-0 end-0"
                    style={{ width: "13rem" }}
                    />
                </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3  m-0">
                <Card style={{height: '11rem'}} className="border-0 bg-info text-start text-white p-0 overflow-hidden mb-3">
                    <Card.Body className="w-50">
                        <Card.Title>
                            Citrus Mon 20,000 Pul Disposable 3 Percent
                        </Card.Title>
                        <Card.Text>
                        30,000MMK
                        </Card.Text>
                    </Card.Body>
                    <img src={bluePng} alt="" className="z-n1 position-absolute top-0 end-0"
                    style={{ width: "13rem" }}
                    />
                </Card>
            </div>
        </div>
        <Button className='rounded-pill border-0 mt-3 text-dark' style={{backgroundColor : '#D3D3D3'}}>
                View More 
        </Button>
    </div>
  );
}

export default ColorCard;
