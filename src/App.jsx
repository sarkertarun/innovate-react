
import Banner from "./Components/Layouts/Banner"
import Blog from "./Components/Layouts/Blog"
import Creative from "./Components/Layouts/Creative"
import Footer from "./Components/Layouts/Footer"
import Navbar from "./Components/Layouts/Navbar"
import Review from "./Components/Layouts/Review"
import Service from "./Components/Layouts/Service"
import Showcase from "./Components/Layouts/Showcase"
import Whowe from "./Components/Layouts/Whowe"

function App() {

  return (
    <>
    <Navbar />
    <Banner />
    <Service />
    <Whowe />
    <Showcase />
    <Creative />
    <Review />
    <Blog />
    <Footer />
    </>
  )
}

export default App
