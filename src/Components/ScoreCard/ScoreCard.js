import {} from "../../BackEndServices/APIClient";
import {useState} from "react";
import styled from "styled-components";

export default function ScoreCard(props) {
    const [showCard, setShowCard] = useState(false);
    const [bestModelName, setBestModelName] = useState('');
    const [bestModelScore, setBestModelScore] = useState();

    const StyledButton = styled.button`
      height: 80px;
      width: 400px;
    `


    return (<div style={{display: "inline-grid", height: "120px"}}>
        <StyledButton onClick={() => {
            setShowCard(!showCard)
            let max = 0;
            let model = ''
            console.log(props.rogueScore)
            for (const key in props.rogueScore) {
                console.log(key)
                if (props.rogueScore[key] > max) {
                    max = props.rogueScore[key]
                    model = key;
                }
            }
            setBestModelName(model)
            setBestModelScore(max)
        }}>Show Rogue Score Board
        </StyledButton>
        <button onClick={() =>{window.print()}}> Print Score Card</button>
        {showCard && <div>
            Extractive/Model Rogue =======> Value
            <hr></hr>
            {Object.keys(props.rogueScore)
                .map((x, i) =>
                    <div key={i}><b>{x}</b> =======> {props.rogueScore[x]}
                        <hr></hr>
                    </div>
                )}

            <b> Best Score</b>
            <div>Model Name: {bestModelName}</div>
            <div>Score: {bestModelScore}</div>


        </div>}
    </div>)
}