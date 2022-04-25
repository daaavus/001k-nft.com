import "./Qanda.css";
import React, { useState } from "react";

export default function Qanda() {

    const [answerVisible1, setAnswerVisible1] = useState(false);
    const [answerVisible2, setAnswerVisible2] = useState(false);
    const [answerVisible3, setAnswerVisible3] = useState(false);
    const [answerVisible4, setAnswerVisible4] = useState(false);

    return (
        <div className="qanda">
            <h3>Часто задаваемые вопросы</h3>
            <ul>
                <div className="qanda__container">
                    <p className="qanda__question-text">Сколько НФТ в коллекции?</p>
                    <div className={answerVisible1 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible1 ? setAnswerVisible1(false) : setAnswerVisible1(true)}}></div>
                </div>
                <li className={answerVisible1 ? 'qanda__list-el_active' : 'qanda__list-el'}>3333 уникальных невзаимозаменяемых токенов!</li>

                <div className="qanda__container">
                    <p>Какая будет цена за минт и комиссия за газ?</p>
                    <div className={answerVisible2 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible2 ? setAnswerVisible2(false) : setAnswerVisible2(true)}}></div>
                </div>
                <li className={answerVisible2 ? 'qanda__list-el_active' : 'qanda__list-el'}>1 НФТ стоит 65 MATIC, а плата за газ почти нулевая, так как мы находимся на блойчейне Polygon!</li>

                <div className="qanda__container">
                    <p>Вопрос</p>
                    <div className={answerVisible3 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible3 ? setAnswerVisible3(false) : setAnswerVisible3(true)}}></div>
                </div>
                <li className={answerVisible3 ? 'qanda__list-el_active' : 'qanda__list-el'}>Ответ</li>

                <div className="qanda__container">
                    <p>Вопрос</p>
                    <div className={answerVisible4 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible4 ? setAnswerVisible4(false) : setAnswerVisible4(true)}}></div>
                </div>
                <li className={answerVisible4 ? 'qanda__list-el_active' : 'qanda__list-el'}>Ответ</li>
            </ul>
        </div>
    )
}
