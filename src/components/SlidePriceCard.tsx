import Card from 'react-bootstrap/Card';
import ringo from '../assets/png_folder/ringo.png'

function SlidePriceCard () {
    return (
        <Card className='border-0 col-sm-12 col-md-4 col-xl-3 bg-dark  text-white p-0 w-100' style={{}}>
        <Card.Img className='card_image bg-light' variant="top" src={ringo} />
        <Card.Body className="pb-0">
          <Card.Title>Ringo</Card.Title>
          <Card.Text>
            30,000MMK  
          </Card.Text>
          <p className="text-warning mb-0">600 points</p>
        </Card.Body>
      </Card>
    )
}

export default SlidePriceCard