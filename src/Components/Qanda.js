import "./Qanda.css";
import React, { useState } from "react";

export default function Qanda() {

    const [answerVisible1, setAnswerVisible1] = useState(false);
    const [answerVisible2, setAnswerVisible2] = useState(false);
    const [answerVisible3, setAnswerVisible3] = useState(false);
    const [answerVisible4, setAnswerVisible4] = useState(false);
    const [answerVisible5, setAnswerVisible5] = useState(false);

    return (
        <div className="qanda">
            <h3 className="qanda__title">Questions</h3>
            <ul className="qanda__list">
                <div className="qanda__container">
                    <div className="qanda__question-container">
                        <p className="qanda__question-text">When is public sale and whitelist presale?</p>
                        <div className={answerVisible1 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible1 ? setAnswerVisible1(false) : setAnswerVisible1(true)}}></div>
                    </div>
                    <li className={answerVisible1 ? 'qanda__list-el_active' : 'qanda__list-el'}>Public SOFB collection drop will be on the 1st of may 7pm est! Whitelist presale - 28th april 5pm est!</li>
                </div>
                
                <div className="qanda__container">
                    <div className="qanda__question-container">
                        <p className="qanda__question-text">What will be mint cost and gas fee?</p>
                        <div className={answerVisible2 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible2 ? setAnswerVisible2(false) : setAnswerVisible2(true)}}></div>
                    </div>
                    <li className={answerVisible2 ? 'qanda__list-el_active' : 'qanda__list-el'}>1 NFT will cost 30 MATIC and gas fees are going to almost 0 because we are on Polygon blockchain!</li>
                </div>

                <div className="qanda__container">
                    <div className="qanda__question-container">
                        <p className="qanda__question-text">When main skeletons images will be unlocked?</p>
                        <div className={answerVisible3 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible3 ? setAnswerVisible3(false) : setAnswerVisible3(true)}}></div>
                    </div>
                    <li className={answerVisible3 ? 'qanda__list-el_active' : 'qanda__list-el'}>Once all Skeletons will be minted or after 72 hours from public sale!</li>
                </div>

                <div className="qanda__container">
                    <div className="qanda__question-container">
                        <p className="qanda__question-text">Will the price rise after public sale?</p>
                        <div className={answerVisible4 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible4 ? setAnswerVisible4(false) : setAnswerVisible4(true)}}></div>
                    </div>
                    <li className={answerVisible4 ? 'qanda__list-el_active' : 'qanda__list-el'}>Of course it will! #SOFBToTheMoon</li>
                </div>

                <div className="qanda__container">
                    <div className="qanda__question-container">
                        <p className="qanda__question-text">How many SOFB will enter the blockchain?</p>
                        <div className={answerVisible5 ? "qanda__answer-button" : "qanda__answer-button_active"} onClick={() => {answerVisible5 ? setAnswerVisible5(false) : setAnswerVisible5(true)}}></div>
                    </div>
                    <li className={answerVisible5 ? 'qanda__list-el_active' : 'qanda__list-el'}>There are 7070 hand-drawn unique and randomly generated NFTs!</li>
                </div>
            </ul>
        </div>
    )
}
