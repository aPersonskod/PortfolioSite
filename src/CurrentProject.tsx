import {useState, useEffect} from "react";

function CurrentProject() {
    let startPath = "/PortfolioSite/project/";
    const [currentProject, setCurrentProject] = useState({name:""})
    useEffect(() => {
        switch (window.location.pathname) {
            case `${startPath}uploader`: setCurrentProject({name:"Загрузчик продуктов"}); break;
            case `${startPath}site`: setCurrentProject({name:"Многостраничный сайт"}); break;
            case `${startPath}schedule`: setCurrentProject({name:"Умное расписание"}); break;
            case `${startPath}avto`: setCurrentProject({name:"АвтоМир Управление автосалоном"}); break;
            case `${startPath}puti`: setCurrentProject({name:"Путепровод Редактор маршрутов"}); break;
        }
    }, []);
    
    return(
        <div>
            <h1>{currentProject.name}</h1>
        </div>
    );
}

export default CurrentProject;