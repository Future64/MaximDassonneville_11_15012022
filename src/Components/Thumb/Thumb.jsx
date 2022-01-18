import '../Thumb/Thumb.css'
import DATA from '../../DATA'


const Thumb = props => {
    // const bgImg = DATA[1].cover

    return ( 
        <>
            <div className = "Thumb" style={{backgroundImage: `url(${props.cover})`}}>
                <a href="thumb-link">
                    <div className='Thumb-filter' >
                        <span className='thumb-title'>{props.title}</span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Thumb