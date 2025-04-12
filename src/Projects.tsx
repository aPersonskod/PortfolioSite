import './App.css'
import ProjectCard from "./ProjectCard.tsx";
function Projects() {
    const startPath = "/PortfolioSite/project/";
    const projects = [
        {header:"Загрузчик продуктов", description:"Система контроля версий", image: require("./assets/uploaderV.jpg"), path:`${startPath}uploader`},
        {header:"Многостраничный сайт", description:"Сайт для компании, которая занимается разработкой ПО", image:require("./assets/siteV.jpg"), path:`${startPath}site`},
        {header:"Умное расписание", description:"Динамическая веб-платформа для студентов СПБГУПТД", image:require("./assets/scheduleV.jpg"), path:`${startPath}schedule`},
        {header:"АвтоМир Управление автосалоном", description:"Десктопное приложение на C# и WPF для автоматизации процессов автосалона", image:require("./assets/avtoV.jpg"), path:`${startPath}avto`},
        {header:"Путепровод Редактор маршрутов", description:"Десктопное приложение для проектирования и оптимизации путепроводов", image:require("./assets/putiV.jpg"), path:`${startPath}puti`}
    ];
    return(
        <>
            <div className='container' style={{marginTop: "10px"}}>
                <div className='row'>
                    {projects.map((p) => (
                        <div className='col col-sm-12 col-lg-6'>
                            <ProjectCard imgSrc={p.image} imgAlt={p.image} header={p.header} description={p.description} navigatePath={p.path}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;