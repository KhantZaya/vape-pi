import Carousel from 'react-bootstrap/Carousel';
import Banner from '../assets/banner.jpg'
import BannerOne from '../assets/banner_one.jpg'
import BannerTwo from '../assets/banner_two.jpg'


function HomeSection() {
  return (
    <div className="container-xxl p-0 home-section">
      <Carousel className='h-100'>
        <Carousel.Item className='h-100'>
          <img
            className="d-block w-100"
            src={Banner}
            alt="First slide"
          />
          <Carousel.Caption className='h-50 my-auto'>
            <div className="p-5"></div>
            <button
                className="btn btn-dark  rounded-pill border-none "
                style={{ maxWidth: "5rem", opacity: '70%' }}
              >
                View
              </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='h-100'>
          <img
            className="d-block w-100"
            src={BannerOne}
            alt="Second slide"
          />

          <Carousel.Caption className='h-50'>
            <h3>Any Time, Any Where</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button
                className="btn btn-dark rounded-pill border-none"
                style={{ maxWidth: "5rem", opacity: '70%' }}
              >
                View
              </button>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item className='h-100'>
          <img
            className="d-block w-100"
            src={BannerTwo}
            alt="Third slide"
          />

          <Carousel.Caption className='h-50'>
            <h3>Any Time, Any Where</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button
                className="btn btn-dark rounded-pill border-none"
                style={{ maxWidth: "5rem", opacity: '70%' }}
              >
                View
              </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeSection