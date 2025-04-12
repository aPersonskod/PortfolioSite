import './App.css'
import ProjectCard from "./ProjectCard.tsx";

function Projects() {
    const startPath = "/PortfolioSite/project/";
    const projects = [
        {
            header: "Загрузчик продуктов",
            description: "Система контроля версий",
            image: require("./assets/uploaderV.jpg"),
            imageH: require("./assets/uploaderH.jpg"),
            path: `${startPath}uploader`
        },
        {
            header: "Многостраничный сайт",
            description: "Сайт для компании, которая занимается разработкой ПО",
            image: require("./assets/siteV.jpg"),
            imageH: require("./assets/siteH.jpg"),
            path: `${startPath}site`
        },
        {
            header: "Умное расписание",
            description: "Динамическая веб-платформа для студентов СПБГУПТД",
            image: require("./assets/scheduleV.jpg"),
            imageH: require("./assets/scheduleH.jpg"),
            path: `${startPath}schedule`
        },
        {
            header: "АвтоМир Управление автосалоном",
            description: "Десктопное приложение на C# и WPF для автоматизации процессов автосалона",
            image: require("./assets/avtoV.jpg"),
            imageH: require("./assets/avtoH.jpg"),
            path: `${startPath}avto`
        },
        {
            header: "Путепровод Редактор маршрутов",
            description: "Десктопное приложение для проектирования и оптимизации путепроводов",
            image: require("./assets/putiV.jpg"),
            imageH: require("./assets/putiH.jpg"),
            path: `${startPath}puti`
        }
    ];
    return (
        <>
            <div className='container tabAutoMargin' style={{marginTop: "10px"}}>
                <div className='row'>
                    {projects.map((p) => (
                        <div className='col col-sm-12 col-lg-6'>
                            <ProjectCard imgSrc={p.image} imgAlt={p.image} header={p.header} description={p.description}
                                         navigatePath={p.path} key={p.header}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;