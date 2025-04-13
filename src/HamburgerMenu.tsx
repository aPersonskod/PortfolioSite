import { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
    const startPath = "/PortfolioSite/project/";
    const links = [
        {path:`${startPath}uploader`,header:"Загрузчик продуктов"},
        {path:`${startPath}site`, header:"Многостраничный сайт"},
        {path:`${startPath}schedule`, header:"Умное расписание"},
        {path:`${startPath}avto`, header:"АвтоМир Управление автосалоном"},
        {path:`${startPath}puti`, header:"Путепровод Редактор маршрутов"}
    ];
    const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

    // Open the menu
    const openMenu = () => {
        setIsOpen(true);
    };

    // Close the menu
    const closeMenu = () => {
        setIsOpen(false);
    };

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
                            <li><a href={link.path}>{link.header}</a></li>
                        ))}
                    </ul>
                </ul>
            </nav>
        </div>
        /*<div className="hamburger-container">
            {/!* Hamburger Icon *!/}
            <div
                className={`hamburger-icon ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
    
            {/!* Navigation Menu *!/}
            <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
                {/!* Close Button Inside Menu *!/}
                <button className="close-button" onClick={closeMenu}>
                    &times; {/!* Unicode for "X" symbol *!/}
                </button>
    
                {/!* Menu Links *!/}
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                {/!* Navigation Menu *!/}
                <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
                    <ul>
                        {links.map((link) => (
                            <li><a href={link.path}>{link.header}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>*/
    );
};

export default HamburgerMenu;