import '../Thumb/Thumb.css'


const Thumb = props => {
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