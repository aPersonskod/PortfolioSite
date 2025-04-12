import ProjectType from "./ProjectType.tsx";

interface Props {
    path: string,
    year: string,
    tech: string,
    descriptions: Props2[],
}

interface Props2 {
    name: string;
    descriptions: string[];
}

function ProjectDescription() {
    const startPath = "/PortfolioSite/project";
    const herota : Props[] = [
        {
            path: `${startPath}/uploader`,
            year: "2022 год",
            tech: "C# WPF",
            descriptions: [
                {
                    name: "Краткое описание",
                    descriptions: [
                        "В рамках рабочего проекта я разработал программу на C# с использованием WPF, предназначенную для прямой поставки программного обеспечения. Приложение позволяет автоматизировать процесс распространения ПО, начиная от загрузки файлов с сервера до установки на клиентские машины."
                    ]
                }
            ]
        }
    
    ]
    return(
        <div className='container'>
            <div className='row'>
                <div className='col col-8'>
                    {herota.find(x => x.path === window.location.pathname)!.descriptions.map(proj => (
                        <div key={proj.name}>
                            <p className='fs21'>{proj.name}</p>
                            {proj.descriptions.map(des => (
                                <p key={des}>{des}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='col col-4'>
                    <ProjectType
                        year={herota.find(x => x.path === window.location.pathname)!.year}
                        tech={herota.find(x => x.path === window.location.pathname)!.tech}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectDescription;