import "./Main.css";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import Description from "./Description";
import Roadmap from "./Roadmap";
import Qanda from "./Qanda";
import Tokenomics from "./Tokenomics";
import Polygon from "../images/polygon-matic-logo.svg";
import Opensea from "../images/opensea.svg";

export default function Main() {

    let countDownDate = new Date("May 25, 2022 12:00:00").getTime();
    let timeLeft = useRef();

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);

    const [errFeedback, setErrFeedback] = useState("");
    const [succFeedback, setSuccFeedback] = useState("");
    const [claimingNft, setClaimingNft] = useState(false);
    const [mintAmount, setMintAmount] = useState(1);

    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    function getTime() {
        let now = new Date().getTime();
        timeLeft.current = countDownDate - now;
        setDays(Math.floor(timeLeft.current / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((timeLeft.current % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((timeLeft.current % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((timeLeft.current % (1000 * 60)) / 1000));
    }

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1) {
            newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
    };

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        if (newMintAmount > 10) {
            newMintAmount = 10;
        }
        setMintAmount(newMintAmount);
    };

    const claimNFTs = (mintAmount) => {
        setClaimingNft(true);
        blockchain.smartContract.methods.mint(mintAmount).send({
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
            (30 * mintAmount).toString(),
            "ether"
        ),
        }).once("error", (err) => {
            console.log(err);
            setErrFeedback(err.message)
            setClaimingNft(false);
        }).then((receipt) => {
            setErrFeedback('');
            setSuccFeedback(`IT'S YOURS! CHECK YOUR SKELETON ON OPENSEA!`);
            setClaimingNft(false);
        });
    }

    useEffect(()=>{
        const i = setInterval(getTime, 1000);
        return () => clearInterval(i);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blockchain.smartContract, dispatch]);

    return (
        <main className="main">  
            {blockchain.account === "" || blockchain.smartContract === null ? (
                <div className='mint-block'>
                    {timeLeft.current > 0 ? <p className="mint-block__timer">{`Публичный дроп через ${days}:${hours}:${minutes}:${seconds}`}</p> : ""}
                    <h2 className="mint-block__subtitle">Подключите MetaMask, чтобы приобрести NFT!</h2>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                        }}
                        className="mint-block__button">
                        Подключите MetaMask
                    </button>

                    {blockchain.errorMsg !== "" ? (
                        <p className="mint-block__span mint-block__span_error">
                            {blockchain.errorMsg}
                        </p>
                    ) : null}
                </div>
            ) : (
                <div className='mint-block'>
                    <h1 className="mint-block__title">Заминтите ваш NFT!</h1>
                    <p className="mint-block__span">{`${1111 - data.totalSupply} NFT осталось`}</p>
                    <p className="mint-block__span">1 NFT стоит 140 MATIC</p>
                    <p className='mint-block__span_error'>{errFeedback}</p>
                    <p className='mint-block__span_success'>{succFeedback}</p>
                    <div className="mint-block__mint-container">
                        <button
                            className="mint-block__dec-button"
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                            }}
                        >
                        </button>
                        <div className="mint-block__mint-button-container">
                            <button
                                type="button"
                                disabled={timeLeft.current > 0 ? 1 : 0}
                                onClick={(e) => {
                                    e.preventDefault();
                                    claimNFTs(mintAmount);
                                    setErrFeedback('');
                                    setSuccFeedback('');
                                }}
                                className={timeLeft.current > 0 ? "mint-block__button_disabled" : "mint-block__button"}
                                >
                                {timeLeft.current > 0 ? "ДОЖДИТЕСЬ ДРОПА!" : claimingNft ? "ЗАГРУЗКА" : `КУПИТЬ ${mintAmount}`}
                            </button>
                        </div>
                        <button
                            className="mint-block__inc-button"
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                                e.preventDefault();
                                incrementMintAmount();
                            }}
                        >
                        </button>
                    </div>
                    
                </div>
            )}
            <Description />
            <Roadmap />
            <Tokenomics />
            <Qanda />
            <img alt="polygon network" className="main__flying-image1" src={Polygon} />
            <img alt="opensea.io" className="main__flying-image2" src={Opensea} />
        </main>
    );
}
