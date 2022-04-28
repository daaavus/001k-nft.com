import "./Header.css";
import discordLogo from "../images/discord.svg";
import openseaLogo from "../images/opensea.svg";
import { useState } from "react";

export default function Header() {

    return (
        <header className="header" id="header">
            <p className="header__logo">001K</p>

            <nav className="navbar">
                <a className="navbar__link" href="#description">О проекте</a>
                <a className="navbar__link" href="#roadmap">Карта</a>
                <a className="navbar__link" href="#tokenomics">Токеномика</a>
                <a className="navbar__link" href="#qanda">Вопросы и ответы</a>
            </nav>

            <div className="header__social-container">
                <a rel="noreferrer noopener" target="_blank" href="https://discord.gg/">
                    <img className="header__social" alt="discord logo" src={discordLogo}></img>
                </a>
                <a rel="noreferrer noopener" target="_blank" href="https://opensea.io/collection/001k">
                    <img className="header__social" alt="opensea logo" src={openseaLogo}></img>   
                </a>
            </div>
        </header>
    );
}
