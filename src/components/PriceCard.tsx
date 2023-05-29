import Card from 'react-bootstrap/Card';
import CardImg from '../assets/png_folder/venus.png'

function PriceCard () {
    return (
        <Card className='border-0 col-sm-6 col-md-3 col-xl-2 card' style={{}}>
        <Card.Img className='card_image bg-dark' variant="top" src={CardImg} />
        <Card.Body>
          <Card.Title>Venus</Card.Title>
          <Card.Text>
            30,000MMK
          </Card.Text>
          <p className="text-warning">600 posints</p>
        </Card.Body>
      </Card>
    )
}

export default PriceCard