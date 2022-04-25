import "./Description.css";
import nftShowcase from "../images/nft-showcase.mp4";

export default function Description() {
    return (
        <div className="description">
            <div>
                <video className="description__video" preload="auto" no-controls="true" autoPlay loop playsInline muted>
                    <source src={nftShowcase} type="video/mp4"></source>
                </video>
            </div>
            <div>
                <p className="description__text">Описание коллекции НФТ</p>
            </div>
        </div>
    )
}
