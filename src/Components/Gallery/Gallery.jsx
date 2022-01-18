import '../Gallery/Gallery.css'
import Thumb from '../Thumb/Thumb'
import DATA from '../../DATA'

const Gallery = () => {
    return ( 

        <div className = "Gallery" >
            <Thumb cover={DATA[0].cover} title={DATA[0].title}/>
            <Thumb cover={DATA[1].cover} title={DATA[1].title}/>
            <Thumb cover={DATA[2].cover} title={DATA[2].title}/>
            <Thumb cover={DATA[3].cover} title={DATA[3].title}/>
            <Thumb cover={DATA[4].cover} title={DATA[4].title}/>
            <Thumb cover={DATA[5].cover} title={DATA[5].title}/>
            <Thumb cover={DATA[6].cover} title={DATA[6].title}/>
            <Thumb cover={DATA[7].cover} title={DATA[7].title}/>
            <Thumb cover={DATA[8].cover} title={DATA[8].title}/>
            <Thumb cover={DATA[9].cover} title={DATA[9].title}/>
            <Thumb cover={DATA[10].cover} title={DATA[10].title}/>
            <Thumb cover={DATA[11].cover} title={DATA[11].title}/>
        </div>
    )
}

export default Gallery