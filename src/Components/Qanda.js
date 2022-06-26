import "./Qanda.css";
import React, { useState } from "react";

export default function Qanda() {

    const [answerVisible1, setAnswerVisible1] = useState(true);
    const [answerVisible2, setAnswerVisible2] = useState(false);
    const [answerVisible3, setAnswerVisible3] = useState(false);
    const [answerVisible4, setAnswerVisible4] = useState(false);
    const [answerVisible5, setAnswerVisible5] = useState(false);

    return (
        <div id="qanda" className="qanda">
            <h3 className="qanda__title">Вопросы и ответы</h3>
            <ul className="qanda__list">
                <div className="qanda__container">
                    <div className="qanda__question-container">
                        <p className="qanda__question-text">Когда стартует пресейл и публичный сейл NFT?</p>
                        <div className={answerVisible1 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible1 ? setAnswerVisible1(false) : setAnswerVisible1(true)}}></div>
                    </div>
                    <li className={answerVisible1 ? 'qanda__list-el_active' : 'qanda__list-el'}>Пресейл стартует TBA... в TBA... по Киевскому времени. Публичные продажи начнутся TBA...</li>
                </div>
                
                <div className="qanda__container">
                    <div className="qanda__question-container">
                        <p className="qanda__question-text">Какая цена NFT?</p>
                        <div className={answerVisible2 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible2 ? setAnswerVisible2(false) : setAnswerVisible2(true)}}></div>
                    </div>
                    <li className={answerVisible2 ? 'qanda__list-el_active' : 'qanda__list-el'}>
                        За 1 NFT установлена цена в 140 MATIC. Комиссия за газ почти нулевая, так как мы на блокчейне Polygon!
                    </li>
                </div>

                <div className="qanda__container">
                    <div className="qanda__question-container">
                        <p className="qanda__question-text">Сколько всего NFT в коллекции?</p>
                        <div className={answerVisible5 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible5 ? setAnswerVisible5(false) : setAnswerVisible5(true)}}></div>
                    </div>
                    <li className={answerVisible5 ? 'qanda__list-el_active' : 'qanda__list-el'}>
                        2222 уникальных NFT!
                    </li>
                </div>

                <div className="qanda__container">
                    <div className="qanda__question-container">
                        <p className="qanda__question-text">Когда будут разблокированы изображения NFT?</p>
                        <div className={answerVisible3 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible3 ? setAnswerVisible3(false) : setAnswerVisible3(true)}}></div>
                    </div>
                    <li className={answerVisible3 ? 'qanda__list-el_active' : 'qanda__list-el'}>
                        Функция раскрытия исполнится как только все 2222 NFT будут сминчены!
                    </li>
                </div>

                <div className="qanda__container">
                    <div className="qanda__question-container">
                        <p className="qanda__question-text">Какой потенциал у коллекции?</p>
                        <div className={answerVisible4 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible4 ? setAnswerVisible4(false) : setAnswerVisible4(true)}}></div>
                    </div>
                    <li className={answerVisible4 ? 'qanda__list-el_active' : 'qanda__list-el'}>
                        Особо редкие NFT из нашей коллекции будут нести в себе множество крутых привилегий!
                        Так, например у 3 счастливчиков будет шанс лично встретиться с Сережей 001K или перепродать NFT, ведь право на встречу сохраняется после перепродажи!
                        Также с приобритением 001K NFT вы становитесь частью огромного и прогрессивного комьюнити!
                    </li>
                </div>
            </ul>
        </div>
    )
}
