import {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import './App.css'

function LeftSide() {
    const [active, setActive] = useState("");
    const [visibility, setVisibility] = useState(true);
    const visStyle = {display:'block'};
    const unvisStyle = {display:'none'};
    const navigate = useNavigate();
    
    useEffect(() => {
        handleClick();
        switch (window.location.pathname){
            case '/PortfolioSite/project/uploader': setVisibility(false); break;
            case '/PortfolioSite/project/site': setVisibility(false); break;
            case '/PortfolioSite/project/schedule': setVisibility(false); break;
            case '/PortfolioSite/project/avto': setVisibility(false); break;
            case '/PortfolioSite/project/puti': setVisibility(false); break;
            default: setVisibility(true); break;
        }
    }, [window.location.pathname]);
    
    const handleClick = () => {
        setActive(window.location.pathname);
    }
    
    function projectsNavigation() {
        navigate('/PortfolioSite');
        handleClick();
    }
    function aboutNavigation() {
        navigate('/PortfolioSite/about');
        handleClick();
    }
    function contactsNavigation() {
        navigate('/PortfolioSite/contacts');
        handleClick();
    }
    
    return (
        <>
            <div className='leftSideBar'>
                <div>
                    <p className='fs32'>Туров А. Портфолио</p>
                    <p className='fs24'>5 выполненных работ</p>
                    <p className='fs18 color-gray'>Период 2021 - 2024</p>
                </div>
                <div className='myBtns'>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '350px'}}>
                        <button className={active === "/PortfolioSite" ? "active" : undefined}
                                onClick={projectsNavigation} style={visibility ? visStyle : unvisStyle}>
                            Проекты
                        </button>
                        <button className={"active"}
                                onClick={projectsNavigation} style={!visibility ? visStyle : unvisStyle}>
                            <div className='d-flex justify-content-around' style={{maxHeight:'15px', marginTop:'-10px'}}>
                                <img style={{marginTop:'8px', marginRight:'3px'}} src={require('./assets/backIcon.svg')} alt="back" width='10px' height='10px' />    
                                <p>Назад</p>
                            </div>
                        </button>
                        <button className={active === "/PortfolioSite/about" ? "active" : undefined}
                                onClick={aboutNavigation}>
                            О себе
                        </button>
                        <button className={active === "/PortfolioSite/contacts" ? "active" : undefined}
                                onClick={contactsNavigation}>
                            Контакты
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSide;