import "./Header.css";
import discordLogo from "../images/discord.svg";
import openseaLogo from "../images/opensea.svg";

export default function Header() {
    return (
        <header className="header" id="header">
            <a href="#" className="header__logo">001K</a>

            <nav className="navbar">
                <a className="navbar__link" href="#description">Description</a>
                <a className="navbar__link" href="#roadmap">Roadmap</a>
                <a className="navbar__link" href="#tokenomics">Tokenomics</a>
                <a className="navbar__link" href="#qanda">Q&A</a>
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
