import "./NavbarMobile.css";
import { useState } from "react";
import openseaLogo from "../images/opensea.svg";
import discordLogo from "../images/discord.svg";
import polygonLogo from "../images/polygon-matic-logo.svg";

export default function NavbarMobile() {

    const [list, setList] = useState(false);

    return (

        <nav className="navbar-mobile">
            <svg onClick={() => {!list ? setList(true) : setList(false)}} className="navbar-mobile__button" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1h22M0 17h22M0 9h22" stroke="#fff" strokeWidth="2"></path>
            </svg>

            <div style={!list ? {position: 'static'} : {position: 'fixed',zIndex: '2501' , top: '0', right: '0', width: '100vw', height: '100vh'}} className="navbar-mobile__list-container">
                <img style={!list ? {display: "none"} : {display: "inline"}} alt="polygon" className="navbar-mobile__flying-image" src={polygonLogo}></img>
                <ul className="navbar-mobile__list">
                    <li onClick={() => {!list ? setList(true) : setList(false)}} style={!list ? {display: "none"} : {display: "inline"}} className="navbar-mobile__list-el">
                        <a className="navbar-mobile__list-el-text" href="#description">О проекте</a>
                    </li>
                    <li onClick={() => {!list ? setList(true) : setList(false)}} style={!list ? {display: "none"} : {display: "inline"}} className="navbar-mobile__list-el">
                        <a className="navbar-mobile__list-el-text" href="#roadmap">Карта</a>
                    </li>
                    <li onClick={() => {!list ? setList(true) : setList(false)}} style={!list ? {display: "none"} : {display: "inline"}} className="navbar-mobile__list-el">
                        <a className="navbar-mobile__list-el-text" href="#tokenomics">Токеномика</a>
                    </li>
                    <li onClick={() => {!list ? setList(true) : setList(false)}} style={!list ? {display: "none"} : {display: "inline"}} className="navbar-mobile__list-el">
                        <a className="navbar-mobile__list-el-text" href="#qanda">Вопросы и ответы</a>
                    </li>
                    <li onClick={() => {!list ? setList(true) : setList(false)}} style={!list ? {display: "none"} : {display: "inline"}} className="navbar-mobile__list-el">
                        <a rel="noreferrer noopener" target="_blank" href="https://discord.gg/">
                            <img className="header__social" alt="discord logo" src={discordLogo}></img>
                        </a>
                    </li>
                    <li onClick={() => {!list ? setList(true) : setList(false)}} style={!list ? {display: "none"} : {display: "inline"}} className="navbar-mobile__list-el">
                        <a rel="noreferrer noopener" target="_blank" href="https://opensea.io/collection/001k">
                            <img className="header__social" alt="opensea logo" src={openseaLogo}></img>   
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
