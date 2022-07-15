import "./Header.css";
import discordLogo from "../images/discord.svg";
import openseaLogo from "../images/opensea.svg";
import nftradeLogo from "../images/nftrade.png";

export default function Header() {

    return (
        <header className="header" id="header">
            <p className="header__logo">001K</p>

            <nav className="navbar">
                <a className="navbar__link" href="#description">О проекте</a>
                <a className="navbar__link" href="#token">Смарт контракт</a>
                <a className="navbar__link" href="#roadmap">Карта</a>
                <a className="navbar__link" href="#tokenomics">Токеномика</a>
                <a className="navbar__link" href="#qanda">Вопросы и ответы</a>
            </nav>

            <div className="header__social-container">
                <a target="_blank" rel="noreferrer noopener" href="https://discord.gg/v6Bputsk2Z">
                    <img className="header__social" alt="discord logo" src={discordLogo}></img>
                </a>
                <a rel="noreferrer noopener" target="_blank" href="https://opensea.io/collection/001k-nft">
                    <img className="header__social" alt="opensea logo" src={openseaLogo}></img>   
                </a>
                <a rel="noreferrer noopener" target="_blank" href="https://nftrade.com/assets/polygon/0xbd1202933cf7092d83465335b92842a2f37c64b5">
                    <img className="header__social header__icon" alt="opensea logo" src={nftradeLogo}></img>   
                </a>
            </div>
        </header>
    );
}
