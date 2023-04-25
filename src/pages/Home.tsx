import React, { useState } from "react";
import ChatArea from "../components/ChatArea";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [isStarted, setIsStarted] = useState(false);
    const navigate = useNavigate();
    const handleStart = () => {
        setIsStarted(true);
        navigate("/about");
    };

    return (
        <div>
            <div id="app">
                <div id="title-container">
                    <h1>
                        Echos of Destiny
                        <div id="buttons">
                            {!isStarted && (
                                <button onClick={handleStart}>START</button>
                            )}
                        </div>
                    </h1>
                </div>
                <div>
                    <div id="result">
                        {isStarted && <ChatArea />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;