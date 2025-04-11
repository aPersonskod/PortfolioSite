import './App.css'
import ProjectCard from "./ProjectCard.tsx";
import uploader from "./assets/uploaderV.jpg"
function Projects() {
    return(
        <>
            <h1>Products</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col col-sm-12 col-lg-6'>
                        <ProjectCard imgSrc={uploader} imgAlt='uploader' header='Загрузчик продуктов'
                                     description='Система контроля версий'/>
                    </div>
                    <div className='col col-sm-12 col-lg-6'>
                        <ProjectCard imgSrc={uploader} imgAlt='uploader' header='Загрузчик продуктов'
                                     description='Система контроля версий'/>
                    </div>
                    <div className='col col-sm-12 col-lg-6'>
                        <ProjectCard imgSrc={uploader} imgAlt='uploader' header='Загрузчик продуктов'
                                     description='Система контроля версий'/>
                    </div>
                    <div className='col col-sm-12 col-lg-6'>
                        <ProjectCard imgSrc={uploader} imgAlt='uploader' header='Загрузчик продуктов'
                                     description='Система контроля версий'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;