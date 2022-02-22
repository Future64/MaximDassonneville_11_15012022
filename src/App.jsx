import { React, useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import dataAbout from './data/DataAbout'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Logement from './pages/Logement'

const App = () => {
  const [myDATA, setDATA] = useState([])

  // Attrape les datas et les stores dans myDATA
  useEffect(() => {
    fetch('./AllData.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setDATA(data)
      })
  }, [])

  const path = '/logement/:id'
  useLocation()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={myDATA} />} />
        <Route path="/about" element={<About data={dataAbout} />} />
        <Route path={path} element={<Logement data={myDATA} />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
