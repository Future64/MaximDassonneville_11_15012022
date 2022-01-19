import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'
import DATA from '../../DATA'
import Header from '../Header/Header'
import Section from '../Section/Section'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'

// console.log(DATA)

const App = () => {
    return ( 
        <div className = "App" >
            <Header/>
            <Section/>
            <Gallery data={DATA}/>
            {/* <Footer/> */}
        </div>
    )
}

export default App




        // <BrowserRouter>
        //     <Route path="/" render={ () => <Header/>} />
        //     <Route path="/" render={ () => <Section/>} />
        //     <Route path="/" render={ () => <Gallery data={DATA}/>} />
        // </BrowserRouter>