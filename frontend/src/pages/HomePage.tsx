import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import Features from '../components/Features';
import About from '../components/About';
import Banner from '../components/Banner';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';
import Coaches from '../components/Coaches';
import '../stylesheets/homePage.css'

const HomePage = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Banner/>
      <CallToAction/>
      <Features/>
      <About/>
      <JoinUs/>
      <Coaches/>
      <Footer isHomePage={true}/>
    </>
  )
}

export default HomePage;