import { useState } from "react";
import "./HamburgerMenu.css";
import {Link, useNavigate} from "react-router-dom";

const HamburgerMenu = () => {
    const startPath = "/PortfolioSite/project/";
    const links = [
        {path:`${startPath}uploader`,header:"Загрузчик продуктов"},
        {path:`${startPath}site`, header:"Многостраничный сайт"},
        {path:`${startPath}schedule`, header:"Умное расписание"},
        {path:`${startPath}avto`, header:"АвтоМир Управление автосалоном"},
        {path:`${startPath}puti`, header:"Путепровод Редактор маршрутов"}
    ];
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

    // Open the menu
    const openMenu = () => {
        setIsOpen(true);
    };

    // Close the menu
    const closeMenu = () => {
        setIsOpen(false);
    };
    function closeMenuNav(path: string) {
        navigate(path);
        setIsOpen(false);
        window.location.reload();
    }

    return (
        <div className="hamburger-container">
            {/* Hamburger Icon */}
            <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={openMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation Menu */}
            <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
                {/* Close Button Inside Menu */}
                <button className="close-button" onClick={closeMenu}>
                    &times; {/* Unicode for "X" symbol */}
                </button>

                {/* Menu Links */}
                <ul>
                    <ul>
                        {links.map((link) => (
                            <li onClick={() => closeMenuNav(link.path)}><Link to={link.path}>{link.header}</Link></li>
                        ))}
                    </ul>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;