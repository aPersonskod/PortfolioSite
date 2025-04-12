import {JSX} from "react";

interface IProjectType {
    year:string,
    tech: string
}
function ProjectType({year, tech} : IProjectType): JSX.Element {
    return(
        <div className='d-flex justify-content-around flex-wrap' style={{backgroundColor: "#F0F0F0", borderRadius: "20px"}}>
            <div style={{padding: "5px"}}>
                <div className='d-flex justify-content-center'>
                    <p style={{color:"#9F9F9F"}}>Год:</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <p>{year}</p>
                </div>
                </div>
                <div style={{padding: "5px"}}>
                    <div className='d-flex justify-content-center'>
                        <p style={{color:"#9F9F9F"}}>Технологии:</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p>{tech}</p>
                    </div>
                </div>
            </div>
            );
}

export default ProjectType;