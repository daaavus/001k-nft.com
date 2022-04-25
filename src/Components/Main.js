import "./Main.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import Description from "./Description";
import Roadmap from "./Roadmap";
import Qanda from "./Qanda";

export default function Main() {

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);

    const [errFeedback, setErrFeedback] = useState("");
    const [succFeedback, setSuccFeedback] = useState("");
    const [claimingNft, setClaimingNft] = useState(false);
    const [mintAmount, setMintAmount] = useState(1);

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
            (1 * mintAmount).toString(),
            "ether"
        ),
        }).once("error", (err) => {
            console.log(err);
            setErrFeedback(err.message)
            setClaimingNft(false);
        }).then((receipt) => {
            setSuccFeedback("IT'S YOURS! CHECK OPENSEA.IO FOR YOUR SEREZHA 001K");
            setClaimingNft(false);
        });
    }

    useEffect(() => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    }, [blockchain.smartContract, dispatch]);

    return (
        <main className="main">
            {blockchain.account === "" || blockchain.smartContract === null ? (
                <div className="">
                    <h2 className="">Connect to be able to mint!</h2>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                        }}
                        className="">
                        Connect metamask
                    </button>

                    {blockchain.errorMsg !== "" ? (
                        <p className="">
                            {blockchain.errorMsg}
                        </p>
                    ) : null}
                </div>
            ) : (
                <div>
                    <h1>Mint Serezha!</h1>
                    <p>{`${3333 - data.totalSupply} Serega's LEFT`}</p>
                    <p>Cost</p>
                    <p>{errFeedback}</p>
                    <p>{succFeedback}</p>
                    <div>
                        <button
                            className=""
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                            }}
                        >
                        </button>
                        <div>
                            <button
                                type="button"
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                    e.preventDefault();
                                    claimNFTs(mintAmount);
                                }}       
                                className="">
                                {claimingNft ? "BUSY" : `BUY ${mintAmount}`}
                            </button>
                        </div>
                        <button
                            className=""
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
            <Qanda />

        </main>
    );
}
