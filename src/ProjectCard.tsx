function ProjectCard({imgSrc, imgAlt, header, description}) {
    return (
        <div>
            <img className='responsive' src={imgSrc} alt={imgAlt}/>
            <p className='fs24'>{header}</p>
            <p className='fs18 color-gray' style={{marginTop:"-20px"}}>{description}</p>
        </div>
    );
}

export default ProjectCard;