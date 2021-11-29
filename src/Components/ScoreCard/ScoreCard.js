import {} from "../../BackEndServices/APIClient";
import {useState} from "react";
import styled from "styled-components";

export default function ScoreCard(props) {
    const [showCard, setShowCard] = useState(true);
    const dataArray=[];
    for (const key in props.rogueScore) {
        dataArray[key]=props.rogueScore[key]

    }
    let durationBody = dataArray.map((item, i) => {
        return (
            <div key={i} value={item}>
                {item}
            </div>
        );
    });
    const StyledButton = styled.button`
      height: 80px;
      width: 400px;
    `

    function calculateBest() {
        console.log(Object.values(dataArray))

        const max = 0;
        for (const key in props.rogueScore) {
            console.log(key)
            console.log(props.rogueScore[key])
        }
    }

    return (<div style={{display: "inline-grid", height: "120px"}}>
        <StyledButton onClick={() => {
            calculateBest()
            setShowCard(true)
        }}>Show Score card
        </StyledButton>
        {showCard && <div>

ete

            {durationBody}
        </div>}
    </div>)
}