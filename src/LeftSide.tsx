import {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import './App.css'

function LeftSide() {
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        handleClick();
    }, [])
    
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
                                onClick={projectsNavigation}>
                            Проекты
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