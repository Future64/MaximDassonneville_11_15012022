import '../css/Home.css'
import IMG from '../asset/IMG.png'
import Header from '../components/Header'
import Section from '../components/Section'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import LogoHouse from '../asset/LogoHouse.png'

const Home = (props) => {
  const sectionText = 'Chez vous, partout et ailleurs'

  return (
    <div className="Home">
      <Header />
      <Section picture={IMG} h1={sectionText} />
      <Gallery data={props.data} />
      <Footer img={LogoHouse} />
    </div>
  )
}

export default Home
