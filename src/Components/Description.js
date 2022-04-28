import "./Description.css";
import nftShowcase from "../images/nft-showcase.mp4";

export default function Description() {
    return (
        <div id="description" className="description">
            <h3 className="description__title">О проекте</h3>
            <div className="description__content">
                <div className="description__video-container">
                    <video className="description__video" preload="auto" no-controls="true" autoPlay loop playsInline muted>
                        <source src={nftShowcase} type="video/mp4"></source>
                    </video>
                </div>
                <p className="description__text">
                    001K NFT - коллекция Сережи 001K из 1111 уникальных NFT, среди которых затерялись 3 супер редких Себека из драгоценных металлов!
                    Все NFT в коллекции уникальны и единственны! Мы располагаемся на блокчейне Polygon. 
                </p>
            </div>
        </div>
    )
}
