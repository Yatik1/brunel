import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Questionaire from "../components/Questionaire"

const HomePage = () => {
  return (
    <div className="font-inter">
        <Navbar />
        <HeroSection />
        <Questionaire />
        <Footer />
    </div>
  )
}

export default HomePage
