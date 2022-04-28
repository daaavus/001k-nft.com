import "./Description.css";
import nftShowcase from "../images/nft-showcase.mp4";

export default function Description() {
    return (
        <div id="description" className="description">
            <h3 className="description__title">О проекте</h3>
            <div className="description__content">
                <div>
                    <video className="description__video" preload="auto" no-controls="true" autoPlay loop playsInline muted>
                        <source src={nftShowcase} type="video/mp4"></source>
                    </video>
                </div>
                <div>
                    <p className="description__text">НФТ коллекция от Сережи 001к. Блокчейн Polygon.</p>
                </div>
            </div>
        </div>
    )
}
