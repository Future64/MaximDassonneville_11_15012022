import './App.css'
import Header from '../Header/Header'
import Section from '../Section/Section'
import Gallery from '../Gallery/Gallery'

const App = () => {
    return ( 

        <div className = "App" >
           <div>{Header()}</div>
           <div>{Section()}</div>
           <div>{Gallery()}</div>
        </div>
    )
}

export default App