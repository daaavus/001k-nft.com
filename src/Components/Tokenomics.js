import "./Tokenomics.css";
import aa from "../images/tokenomics.svg";

export default function Tokenomics() {
    return (
        <div id="tokenomics" className="tokenomics">
            <h3 className="tokenomics__title">Токеномика</h3>
            <img alt="tokenomics round graph" className="tokenomics__graph" src={aa}></img>
        </div>
    )
}
