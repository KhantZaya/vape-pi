import PriceCard from '../components/PriceCard'
import GridSection from '../sections/GridSection'
import Button from 'react-bootstrap/Button';

function BestdealsSection () {
    return (
        <div className="container-xxl">
            <h1 className="mt-3">Best Deals</h1>
            <p>Just For You</p>
            <div className="row">
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
            </div>
            <Button className='rounded-pill border-0 text-dark' style={{backgroundColor : '#D3D3D3'}}>
                View More 
            </Button>
            <GridSection/>
        </div>
    )
}

export default BestdealsSection