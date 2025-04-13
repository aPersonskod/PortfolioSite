import {useState, useEffect} from "react";
import ProjectDescription from "./ProjectDescription.tsx";
import {useNavigate} from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

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
    const imgStyle = {
        marginTop: "10px",
        width: '100%',
        height: 'auto',
        borderRadius: '21px',
        transition: '0.3s ease-in-out'
    };

    const links = [
        `${startPath}uploader`,
        `${startPath}site`,
        `${startPath}schedule`,
        `${startPath}avto`,
        `${startPath}puti`
    ];
    const navigate = useNavigate();
    const [carousel] = useState(new Carousel(links));
    const [currentLink, setCurrentLink] = useState("");
    useEffect(() => {
        let project = projects.find(x => x.path === window.location.pathname)!;
        setCurrentProject({name: project.header, img: project.imageH});
    }, [currentLink]);
    function next(){
        setCurrentLink(carousel.next());
        navigate(currentLink);
    }
    function previous(){
        setCurrentLink(carousel.previous());
        navigate(currentLink);
    }

    return (
        <div className='tabAutoMargin'>
            <img src={currentProject.img} alt={currentProject.name} style={imgStyle}/>
            <p style={{marginTop: "12px"}} className='fs36'>{currentProject.name}</p>
            <ProjectDescription/>
            {/*previous next hamburger*/}
            <div className='d-flex justify-content-between' style={{maxWidth:'60vw'}}>
                <div>
                    <button onClick={() => previous()}>Previous</button>
                    <button onClick={() => next()}>Next</button>
                </div>
                <div style={{marginTop:'8px'}}>
                    <HamburgerMenu />
                </div>
            </div>
        </div>
    );
}

class Carousel {
    private links: string[];
    private currentIndex: number;
    constructor(links:string[]) {
        // Validate input
        if (!Array.isArray(links)) {
            throw new Error("The 'links' parameter must be an array.");
        }
        this.links = links;
        this.currentIndex = 0;

        // Handle empty array case
        if (this.links.length === 0) {
            console.warn("The carousel has no links to display.");
        }
    }

    // Display the current link
    displayCurrentLink() {
        if (this.links.length === 0) return this.links[this.links.length - 1]; // Do nothing if the array is empty
        let res = this.links[this.currentIndex];
        return res;
        console.clear(); // Clear console for better visualization
        console.log(`Currently displaying: ${this.links[this.currentIndex]}`);
    }

    // Move to the next link
    next() {
        if (this.links.length === 0) return this.links[0]; // Do nothing if the array is empty
        this.currentIndex = (this.currentIndex + 1) % this.links.length; // Loop back to the start
        return this.displayCurrentLink();
    }

    // Move to the previous link
    previous() {
        if (this.links.length === 0) return this.links[this.links.length - 1]; // Do nothing if the array is empty
        this.currentIndex = (this.currentIndex - 1 + this.links.length) % this.links.length; // Handle negative index
        return this.displayCurrentLink();
    }

    // Go to a specific index manually
    goTo(index:number) {
        if (index < 0 || index >= this.links.length) {
            console.error(`Invalid index: ${index}. Must be between 0 and ${this.links.length - 1}.`);
            return;
        }
        this.currentIndex = index;
        this.displayCurrentLink();
    }
}

export default CurrentProject;