import '../Gallery/Gallery.css'
import Thumb from '../Thumb/Thumb'


const Gallery = (props) => {
    console.log(props.data);
    return ( 

        <div className = "Gallery" >
            {props.data.map(item => {
                return <Thumb cover={item.cover} title={item.title}/>
            })}
        </div>
    )
}

export default Gallery