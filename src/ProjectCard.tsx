import { useState } from "react";
function ProjectCard({imgSrc, imgAlt, header, description}) {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    
    const imgStyle = {
        maxWidth: '492px',
        width: '100%',
        height: 'auto',
        borderRadius: '21px',
        transition: '0.3s ease-in-out'  
    };
    const imgHoverStyle = {
        maxWidth: '492px',
        width: '103%',
        height: 'auto',
        borderRadius: '21px',
        transition: '0.3s ease-in-out'
    };
    const pStyle = {
        backgroundColor: 'transparent',
    }
    const pHoverStyle = {
        backgroundColor: '#979797'
    }
    
    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img style={isHovering ? imgHoverStyle : imgStyle} src={imgSrc} alt={imgAlt}/>
            <p className='fs24' style={isHovering ? pHoverStyle : pStyle}>{header}</p>
            <p className='fs18 color-gray' style={{marginTop:"-20px"}}>{description}</p>
        </div>
    );
}

export default ProjectCard;