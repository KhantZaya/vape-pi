import Form from "react-bootstrap/Form";
import QR from '../assets/png_folder/qr_img.png'

function FooterSection() {
  return (
    <div className="container-xxl p-1 mt-5">
      <div className="container-fluid px-5">
        <div className="row w-100 mx-auto p-0">
          <div className="col-sm-12 col-md-6 col-lg-3 p-0 text-start">
            <div>
              <p className="font-weight-light fs-5">Customer Service</p>
              <a className="mb-1 d-block text-dark">Term and Privacy Policy</a>
              <a className="mb-1 d-block text-dark">Return Policy</a>
            </div>
          </div>
          <div className="col-sm-12  col-md-6 col-lg-3 p-0 text-start">
            <div>
              <p className="font-weight-light fs-5">Customer Service</p>
              <Form>
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      label="Myanmar(Unicode)"
                      name="group1"
                      type="radio"
                      id={`reverse-${type}-1`}
                    />
                    <Form.Check
                      label="Myanmar(ZawGyi Code)"
                      name="group1"
                      type="radio"
                      id={`reverse-${type}-2`}
                    />
                    <Form.Check
                      label="English"
                      name="group1"
                      type="radio"
                      id={`reverse-${type}-2`}
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>
          <div className="col-sm-12  col-md-6 col-lg-3  p-0 text-start">
            <div>
              <p className="font-weight-light fs-5">Customer Service</p>
              <p className="mb-1">No.324, Vape St, Main Rd, VAPE city</p>
              <p className="mb-1">+1 876 75 764 867</p>
            </div>
          </div>
          <div className="col-sm-12  col-md-6 col-lg-3  p-0 text-start">
            <div>
              <p className="font-weight-light fs-5">Customer Service</p>
              <img src={QR} alt="" className="w-50" />
            </div>
          </div>
        </div>
      </div>
      <p className="m-0 mt-3">©2023 vape-pi - All Rights Reserved.</p>
    </div>
  );
}

export default FooterSection;
