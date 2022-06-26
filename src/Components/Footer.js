import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo-container">
                <p className="footer__logo">001K</p>
            </div>
            <div className="footer__links-container">
                <ul className="footer__links">
                    <h4 className="footer__list-title">Навигация</h4>
                    <li style={({marginBottom: "8px"})}>
                        <a className="footer__link" href="#description" rel="noopener noreferrer">О проекте</a>
                    </li>
                    <li style={({marginBottom: "8px"})}>
                        <a className="footer__link" href="#token" rel="noopener noreferrer">Смарт контракт</a>
                    </li>
                    <li style={({marginBottom: "8px"})}>
                        <a className="footer__link" href="#roadmap" rel="noopener noreferrer">Карта</a>
                    </li>
                    <li style={({marginBottom: "8px"})}>
                        <a className="footer__link" href="#tokenomics" rel="noopener noreferrer">Токеномика</a>
                    </li>
                    <li style={({marginBottom: "8px"})}>
                        <a className="footer__link" href="#qanda" rel="noopener noreferrer">Вопросы и ответы</a>
                    </li>
                </ul>
                <ul className="footer__links">
                    <h4 className="footer__list-title">Ссылки</h4>
                    <li style={({marginBottom: "8px"})}>
                        <a target="_blank" className="footer__link" href="https://opensea.io/collection/001k-nft" rel="noopener noreferrer">Opensea</a>
                    </li>
                    <li style={({marginBottom: "8px"})}>
                        <a target="_blank" className="footer__link" href="https://discord.gg/v6Bputsk2Z" rel="noopener noreferrer">Discord</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
