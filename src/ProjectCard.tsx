import { useState } from "react";
import {useNavigate} from "react-router-dom";
function ProjectCard({imgSrc, imgAlt, header, description, navigatePath}) {
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    function handleNavigate(){
        navigate(navigatePath);
    }

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
        backgroundColor: '#bab9b9'
    }
    
    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{cursor: 'pointer'}} onClick={() => {handleNavigate()}}>
            <img style={isHovering ? imgHoverStyle : imgStyle} src={imgSrc} alt={imgAlt}/>
            <p className='fs21' style={isHovering ? pHoverStyle : pStyle}>{header}</p>
            <p className='fs18 color-gray' style={{marginTop:"-20px"}}>{description}</p>
        </div>
    );
}

export default ProjectCard;