import "./Token.css";

export default function Token() {
    return (
        <div id="token" className="token">
            <div className="token__address-container">
                <p className="token__logo">001K</p>
                <a className="token__address" target="_blank" rel="noopener noreferrer"
                    href="https://polygonscan.com/address/0xbD1202933cF7092D83465335b92842a2f37c64b5">
                    0xbD1202933cF7092D83465335b92842a2f37c64b5
                </a>
                <svg className="token__network-image" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.102 5.862c-.294-.193-.673-.193-1.009 0L9.74 7.452 
                        8.143 8.462l-2.312 1.59c-.294.192-.672.192-1.008 
                        0L3.015 8.8c-.294-.192-.504-.578-.504-1.011V5.38c0-.385.168-.77.504-1.012l1.808-1.204c.294-.193.672-.193 
                        1.008 0l1.807 1.253c.295.192.505.578.505 1.011v1.59l1.597-1.06V4.32c0-.385-.168-.77-.505-1.011L5.873 
                        1.044c-.294-.192-.672-.192-1.008 0L1.418 3.357c-.336.192-.504.578-.504.963V8.85c0 .385.168.77.505 
                        1.011l3.404 2.264c.294.193.672.193 1.008 0l2.312-1.541 1.597-1.06L12.05 7.98c.294-.192.672-.192 1.009 
                        0l1.807 1.205c.294.192.504.578.504 1.011v2.409c0 .385-.168.77-.504 1.012l-1.765 
                        1.204c-.294.193-.673.193-1.009 0l-1.807-1.204c-.294-.193-.504-.578-.504-1.012v-1.541l-1.597 
                        1.06v1.589c0 .385.168.77.504 1.012l3.404 2.264c.294.193.673.193 
                        1.009 0l3.404-2.264c.294-.193.504-.578.504-1.012V9.138c0-.386-.168-.771-.504-1.012l-3.404-2.264Z" 
                        fill="lightblue">
                    </path>
                </svg>
                <p className="token__copy-text" onClick={() =>  navigator.clipboard.writeText("0xbD1202933cF7092D83465335b92842a2f37c64b5")}>Скопировать</p>
            </div>
            <div className="token__description">
                <p className="token__description-text">Смарт контракт расположен в сети Polygon</p>
            </div>
        </div>
    )
}
