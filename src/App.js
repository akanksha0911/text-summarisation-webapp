import React, {useState} from 'react';
import Amplify from 'aws-amplify';
import {AmazonAIPredictionsProvider} from '@aws-amplify/predictions';
import awsconfig from './aws-exports';

import InputMethods from "./Components/InputMethods/InputMethods";
import styled from "styled-components";
import ModelOutput from "./Components/ModelOutput/ModelOutput";
import ScoreCard from "./Components/ScoreCard/ScoreCard";

Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());
const Title = styled.div`
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 42px;
  font-weight: 800;
  align-items: center;
`

function App() {

    const [inputText, setInputText] = useState('Waiting for input....');
    const [summary, setSummary] = useState({});
    const [rogueScore, setRogueScore] = useState({});
    const [latestSummary, setLatestSummary] = useState('');


    return (
        <div>
            <Title>Text Summarisation</Title>
            {/*Input Methods*/}
            <InputMethods setInputText={setInputText}/>


            {/* Input Text*/}
            <div style={{border: '1px solid black', padding: '10px'}}>
                <h3>Input Text</h3>
                <p>{inputText}</p>
            </div>


            {/* Model / Summary*/} {/* Score Board*/}
            <div style={{display: "inline-flex"}}>
            <ModelOutput setInputText={setInputText} inputText={inputText} summary={summary} setSummary={setSummary}
                         rogueScore={rogueScore}
                         setRogueScore={setRogueScore} setLatestSummary={setLatestSummary}/>
            {/* Print*/}
            <ScoreCard rogueScore={rogueScore}/>
            </div>

        </div>
    );
}


export default App;
