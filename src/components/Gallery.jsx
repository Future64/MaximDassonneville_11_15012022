import { React, useState, useEffect } from 'react'
import '../css/Gallery.css'
import { Link } from 'react-router-dom'
import Thumb from './Thumb'

const Gallery = () => {
  const [allApt, setAllApt] = useState('')

  // Attrape les datas et les stores dans allApt
  useEffect(() => {
    fetch('../AllData.json')
      .then((response) => response.json())
      .then((data) => {
        setAllApt(data)
      })
  }, [])
  return (
    <div className="Gallery">
      {allApt &&
        // Créer toutes les cards des logements en itérant les props
        allApt.map((item) => {
          const path = `/logement/${item.id}`

          return (
            <Link to={path} key={`${item.title}-${item.host.name}`}>
              <Thumb
                cover={item.cover}
                title={item.title}
                key={`${item.id}-${item.host.name}`}
                data={item}
                id={item.id}
              />
            </Link>
          )
        })}
    </div>
  )
}

export default Gallery
