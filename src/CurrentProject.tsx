import {useState, useEffect} from "react";

function CurrentProject() {
    let startPath = "/PortfolioSite/project/";
    const [currentProject, setCurrentProject] = useState({})
    useEffect(() => {
        switch (window.location.pathname) {
            case `${startPath}uploader`: setCurrentProject(new Project("Загрузчик продуктов")); break;
            case `${startPath}site`: setCurrentProject(new Project("Многостраничный сайт")); break;
            case `${startPath}schedule`: setCurrentProject(new Project("Умное расписание")); break;
            case `${startPath}avto`: setCurrentProject(new Project("АвтоМир Управление автосалоном")); break;
            case `${startPath}puti`: setCurrentProject(new Project("Путепровод Редактор маршрутов")); break;
        }
    }, []);
    
    return(
        <div>
            <h1>{currentProject.ProjectName}</h1>
        </div>
    );
}

export default CurrentProject;

class Project {
    public ProjectName; 
    constructor(public projectName: string) {
        this.ProjectName = projectName;
    }
}