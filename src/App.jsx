import AppBanner from "./components/AppBanner/AppBanner.jsx"
import Footer from "./components/footer/Footer.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Services from "./components/Services/Services.jsx"
import WhereToBuy from "./components/WhereToBuy/WhereToBuy.jsx"

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Services/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
    </div>
  )
}

export default App