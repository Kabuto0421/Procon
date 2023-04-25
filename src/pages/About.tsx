import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
const About = () => {
    const squareText = `冒険のタイトル：「ダンジョンの秘宝」

    舞台の歴史：古代文明が栄えた大陸「アル・タミール」に存在する、魔法の力が宿ったダンジョンがあると伝えられている。そのダンジョンは、死者の城とも呼ばれ、多くの探検家が挑戦してきたが、そのほとんどが姿を消したという。
    
    依頼内容：あなたたちは、ある貴族から依頼を受け、死者の城から「アイリスの花」を探し出すことになった。この花は、魔法の力を秘めたアイテムであり、病気や怪我を癒すことができると言われている。
    
    冒険の経緯：あなたたちは、死者の城の入り口にたどり着き、そこからダンジョン内に進入する。道中、トラップや罠が多数仕掛けられており、慎重に進まなければならない。
    
    目的のアイテム：アイリスの花。ダンジョンの奥深くに守られており、凶暴なモンスターがその守護をしているという。アイリスの花は、持ち主に魔法の力を与え、病気や怪我を癒すことができる。しかし、ダンジョン内にはそれを狙う探検家も多く、あなたたちは彼らとの競争にも勝たなければならない。
    
    凶暴なモンスター：「ゴールドン・ビースト」。このモンスターは、黄金の毛皮で覆われた獰猛な獣である。その鋭い爪や牙、そして身体能力は、普通の冒険者たちを簡単に葬るほど強力だ。ステータスは「強」であり、3回の攻撃で倒さなければならない。その獰猛さから、ダンジョン内の探検家たちも彼を恐れ、避けるようにしている。` // ここで好きなテキストに変更できます。

    const [isStarted, setIsStarted] = useState(false);
    const firstLine = squareText.split('\n')[0];
    const restText = squareText.split('\n').slice(1).join('\n');
    const navigate = useNavigate();
    const handleStart = () => {
        setIsStarted(true);
        navigate("/contact");
    };
    return (
        <div>
            <div id="app">
                <div id="title-container">
                    <h1>
                        <div id="buttons">

                        </div>
                    </h1>
                </div>
                <div>
                    <div id="result"></div>
                </div>
                <div className="black-square">
                    <pre className="square-text">
                        <span className="square-text-first-line">{firstLine}</span>
                        {restText}
                    </pre>
                </div>
                <div >
                    {!isStarted && (
                        <button className="next-button" onClick={handleStart}>次へ</button>
                    )}
                </div>
            </div>

        </div>
    );
}

export default About;