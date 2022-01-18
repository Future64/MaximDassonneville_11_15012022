import './App.css'
import Header from '../Header/Header'
import Section from '../Section/Section'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'

const App = () => {
    return ( 

        <div className = "App" >
            <Header/>
            <Section/>
            <Gallery/>
            {/* <Footer/> */}
        </div>
    )
}

export default App