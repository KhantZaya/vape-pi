import './App.css'
import HomeSection from './sections/HomeSection'
import NavBar from './components/NavBar'
import BestdealsSection from './sections/BestdealsSection'
import NewReleaseSection from './sections/NewReleaseSection'
import FooterSection from './sections/FooterSection'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <HomeSection/>
      <BestdealsSection/>
      <NewReleaseSection/>
      <FooterSection/>
    </>
  )
}

export default App
