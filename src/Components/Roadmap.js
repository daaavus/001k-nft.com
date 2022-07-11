import "./Roadmap.css";
import roadmapImage from "../images/roadmap.PNG";
import { useState } from "react";

export default function Roadmap() {

    const [quartalVisible1, setQuartalVisible1] = useState(true);
    const [quartalVisible2, setQuartalVisible2] = useState(false);
    const [quartalVisible3, setQuartalVisible3] = useState(false);
    const [quartalVisible4, setQuartalVisible4] = useState(false);
    const [quartalVisible5, setQuartalVisible5] = useState(false);

    return (
        <div id="roadmap" className="roadmap">
            <h3 className="roadmap__title">Карта проекта</h3>
            <div className="roadmap__info-block">
                <div>
                    <img alt="roadmap" className="roadmap__image" src={roadmapImage} />
                </div>
                <div style={({
                        display: "flex", flexDirection: "column", justifyContent: "space-between"
                    })}>
                    <p className="roadmap__text">
                        Пока время официального релиза коллекции не наступило, 
                        у вас есть возможность получить место в whitelist'е 
                        проекта, чтобы стать обладателем желанной NFT от Сережи 
                        001к со 100% вероятностью! Общайтесь в нашем <a target="_blank" style={({textDecoration: "none", color: "#5865F2"})} rel="noreferrer noopener" href="https://discord.gg/v6Bputsk2Z">
                            discord
                        </a> сообществе, смотрите истории Сережи и 
                        захватывайте места в WhiteList'е, пока они еще есть!
                    </p>
                    <p className="roadmap__text">
                        NFT от Сережи 001к находятся на блокчейне Polygon, 
                        и 12 июля в 16:00 по Киевскому времени, ровно за 72 часа до 
                        официального релиза, будет открыта возможность минта для 
                        тех счастливчиков, кому досталось место в WhiteList'е проекта.
                    </p>
                    <p className="roadmap__text">
                        12 июля в 16:00 по Киевскому времени откроется возможность минта 
                        NFT! Пока все 2222 NFT не найдут своих владельцев, никто 
                        не узнает, какой именно Сережа оказался в крипто-кошельке, 
                        а, может, вы заполучили <span style={({color: "gold"})}>
                            золотого
                        </span> Себека.
                    </p>
                    <p className="roadmap__text">
                        Продажа коллекции завершена! Все 2222 NFT куплены и 
                        разбросаны по просторам <a
                            target="_blank" 
                            style={({color: "lightblue", textDecoration: "none"})} 
                            rel="noreferrer noopener" 
                            href="https://opensea.io/collection/001k-nft">
                            Opensea
                        </a>. Теперь произойдет reveal 
                        ваших NFT и вы узнаете, какая 
                        именно досталась вам!
                    </p>
                    <p className="roadmap__text">
                        Время получать призы! Поздравляем всех обладателей 
                        001K NFT, теперь вы можете воспользоваться вашими 
                        призами, или перепродать NFT вместе с привилегиями 
                        токена. Для Перепродажи или обмена вашего NFT 
                        рекомендуем воспользоваться специальными каналами 
                        в нашем <a 
                            style={({textDecoration: "none", color: "#5865F2"})} 
                            target="_blank" rel="noreferrer noopener" 
                            href="https://discord.gg/v6Bputsk2Z">
                            discord
                        </a> сообществе
                    </p>
                </div>
            </div>
            <div className="roadmap__mobile">
                <div>
                    <div style={({display: "flex", flexDirectiion: "row", width: "80%", justifyContent: "space-between", alignItems: "center"})}>
                        <h4 className="roadmap__mobile-header-text">Первый этап</h4>
                        <div style={({cursor: "pointer", transform: "rotate(90deg)"})} onClick={quartalVisible1 ? ()=>{setQuartalVisible1(false)} : ()=>{setQuartalVisible1(true)}}>
                        <svg style={(quartalVisible1 ? {fill: "white", transform: "rotate(180deg)", width: "10px", transition: ".3s"} : {fill: "white", transform: "rotate(360deg)", width: "10px", transition: ".3s"})} viewBox="0 0 5 9">
                                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className={quartalVisible1 ? "roadmap__mobile-text" : "roadmap__mobile-text _disabled"}>
                            Пока время официального релиза коллекции не наступило,
                            у вас есть возможность получить место в WhiteList'е проекта, чтобы стать обладателем желанной NFT от Сережи 001к со 100% вероятностью!
                            Общайтесь в нашем <a style={({textDecoration: "none", color: "#5865F2"})}  target="_blank" rel="noreferrer noopener" href="https://discord.gg/v6Bputsk2Z">discord </a>
                            сообществе, смотрите истории Сережи и захватывайте места в whitelist'е,
                            пока они еще есть!
                        </p>
                    </div>
                </div>
                <div>
                    <div style={({display: "flex", flexDirectiion: "row", width: "80%", justifyContent: "space-between", alignItems: "center"})}>
                        <h4 className="roadmap__mobile-header-text">Второй этап</h4>
                        <div style={({cursor: "pointer", transform: "rotate(90deg)"})} onClick={quartalVisible2 ? ()=>{setQuartalVisible2(false)} : ()=>{setQuartalVisible2(true)}}>
                            <svg style={(quartalVisible2 ? {fill: "white", transform: "rotate(180deg)", width: "10px", transition: ".3s"} : {fill: "white", transform: "rotate(360deg)", width: "10px", transition: ".3s"})} viewBox="0 0 5 9">
                                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className={quartalVisible2 ? "roadmap__mobile-text" : "roadmap__mobile-text _disabled"}>
                            NFT от Сережи 001к находятся на блокчейне Polygon, и 12 июля в 16:00 по Киевскому времени,
                            ровно за 72 часа до официального релиза, будет открыта возможность минта для тех
                            счастливчиков, кому досталось место в WhiteList'е проекта.
                        </p>
                    </div>
                </div>
                <div>
                    <div style={({display: "flex", flexDirectiion: "row", width: "80%", justifyContent: "space-between", alignItems: "center"})}>
                        <h4 className="roadmap__mobile-header-text">Третий этап</h4>
                        <div style={({cursor: "pointer", transform: "rotate(90deg)"})} onClick={quartalVisible3 ? ()=>{setQuartalVisible3(false)} : ()=>{setQuartalVisible3(true)}}>
                        <svg style={(quartalVisible3 ? {fill: "white", transform: "rotate(180deg)", width: "10px", transition: ".3s"} : {fill: "white", transform: "rotate(360deg)", width: "10px", transition: ".3s"})} viewBox="0 0 5 9">
                                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className={quartalVisible3 ? "roadmap__mobile-text" : "roadmap__mobile-text _disabled"}>
                            12 июля в 16:00 по Киевскому времени откроется возможность минта NFT!
                            Пока все 2222 NFT не найдут своих владельцев, никто не узнает, какой именно
                            Сережа оказался в крипто-кошельке, а, может, вы заполучили <span style={({color: "gold"})}>золотого</span> Себека.
                        </p>
                    </div>
                </div>
                <div>
                    <div style={({display: "flex", flexDirectiion: "row", width: "80%", justifyContent: "space-between", alignItems: "center"})}>
                        <h4 className="roadmap__mobile-header-text">Четвертый этап</h4>
                        <div style={({cursor: "pointer", transform: "rotate(90deg)"})} onClick={quartalVisible4 ? ()=>{setQuartalVisible4(false)} : ()=>{setQuartalVisible4(true)}}>
                        <svg style={(quartalVisible4 ? {fill: "white", transform: "rotate(180deg)", width: "10px", transition: ".3s"} : {fill: "white", transform: "rotate(360deg)", width: "10px", transition: ".3s"})} viewBox="0 0 5 9">
                                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className={quartalVisible4 ? "roadmap__mobile-text" : "roadmap__mobile-text _disabled"}>
                            Продажа коллекции завершена! Все 2222 NFT куплены и разбросаны по
                            просторам <a target="_blank" style={({color: "lightblue", textDecoration: "none"})} 
                            rel="noreferrer noopener" href="https://opensea.io/collection/001k-nft">Opensea</a>. 
                            Теперь произойдет reveal ваших NFT и вы узнаете, какая именно досталась вам!
                        </p>
                    </div>
                </div>
                <div>
                    <div style={({display: "flex", flexDirectiion: "row", width: "80%", justifyContent: "space-between", alignItems: "center"})}>
                        <h4 className="roadmap__mobile-header-text">Пятый этап</h4>
                        <div style={({cursor: "pointer", transform: "rotate(90deg)"})} onClick={quartalVisible5 ? ()=>{setQuartalVisible5(false)} : ()=>{setQuartalVisible5(true)}}>
                        <svg style={(quartalVisible5 ? {fill: "white", transform: "rotate(180deg)", width: "10px", transition: ".3s"} : {fill: "white", transform: "rotate(360deg)", width: "10px", transition: ".3s"})} viewBox="0 0 5 9">
                                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className={quartalVisible5 ? "roadmap__mobile-text" : "roadmap__mobile-text _disabled"}>
                            Время получать призы! Поздравляем всех обладателей 001K NFT, теперь 
                            вы можете воспользоваться вашими призами или перепродать NFT 
                            вместе с привилегиями токена. Для перепродажи или обмена вашего 
                            NFT рекомендуем воспользоваться специальными каналами в нашем  <a style={({textDecoration: "none", color: "#5865F2"})}  target="_blank" rel="noreferrer noopener" href="https://discord.gg/v6Bputsk2Z">discord </a> сообществе.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
