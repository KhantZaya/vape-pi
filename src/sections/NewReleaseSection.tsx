import ColorCard from '../components/ColorCard'
import LargeSlider from '../components/LargeSlider'
import PriceCardSlider from '../components/PriceCardSlider'

function NewReleaseSection () {
    return (
        <div className='container-xxl'>
            <h1 className="mt-5">
                <span className="text-danger">New</span> Released
            </h1>
            <h6>Try Our Latest Flavor Here</h6>
            <ColorCard/>
            <LargeSlider/>
            <PriceCardSlider/>
            <PriceCardSlider/>
            <PriceCardSlider/>
        </div>
    )
}

export default NewReleaseSection