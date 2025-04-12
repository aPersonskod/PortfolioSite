import {useState, useEffect} from "react";
import ProjectDescription from "./ProjectDescription.tsx";

function CurrentProject() {
    const [currentProject, setCurrentProject] = useState({name: "", img: ""});
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
    useEffect(() => {
        let project = projects.find(x => x.path === window.location.pathname)!;
        setCurrentProject({name: project.header, img: project.imageH});
    }, []);
    const imgStyle = {
        marginTop: "10px",
        width: '100%',
        height: 'auto',
        borderRadius: '21px',
        transition: '0.3s ease-in-out'
    };

    return (
        <div>
            <img src={currentProject.img} alt={currentProject.name} style={imgStyle}/>
            <p style={{marginTop: "12px"}} className='fs36'>{currentProject.name}</p>
            <ProjectDescription/>
        </div>
    );
}

export default CurrentProject;