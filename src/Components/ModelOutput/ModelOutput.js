import {
    GenerateAbstractiveSummary,
    GenerateExtractiveSummary,
    GenerateRogueScore
} from "../../BackEndServices/APIClient";
import {StyledButton, SummaryComponent} from "./CommonStyles";

export default function ModelOutput(props) {
    let {summary} = props;

    function callGenerateExtractiveSummary() {
        GenerateExtractiveSummary(props.inputText).then(text => {
                const currentSummary = summary
                currentSummary['extractive'] = text
                props.setSummary(currentSummary)
                props.setLatestSummary(text)
            }
        )
    }

    function callGenerateAbstractiveSummary(modelName) {
        GenerateAbstractiveSummary(props.inputText, modelName).then(text => {
                const currentSummary = summary
                currentSummary[modelName] = text
                props.setSummary(currentSummary)
                props.setLatestSummary(text)
            }
        ).then(() => {
            GenerateRogueScore(summary['extractive'], summary[modelName]).then(text => {
                    const currentRogueScore = props.rogueScore
                    currentRogueScore[modelName] = parseFloat(text)
                    props.setRogueScore(currentRogueScore)
                    props.setLatestSummary(text)
                }
            )
        })
    }


    return (<div style={{display: "inline-grid"}}>

        <div style={{display: "inline-flex"}}>
            <StyledButton onClick={() => callGenerateExtractiveSummary()}>Generate Extractive Summary</StyledButton>
            <SummaryComponent> {props.summary['extractive'] !== undefined && props.summary['extractive']}</SummaryComponent>
        </div>
        <div style={{display: "inline-flex"}}>
            <StyledButton
                onClick={() => callGenerateAbstractiveSummary('google/pegasus-billsum')}>Generate <b>'google/pegasus-billsum'</b> Abstractive
                Summary</StyledButton>
            <SummaryComponent> {props.summary['google/pegasus-billsum'] !== undefined && props.summary['google/pegasus-billsum']}</SummaryComponent>
        </div>
        <div style={{display: "inline-flex"}}>
            <StyledButton
                onClick={() => callGenerateAbstractiveSummary('google/pegasus-cnn_dailymail')}>Generate <b>'google/pegasus-cnn_dailymail'</b> Abstractive
                Summary</StyledButton>
            <SummaryComponent> {props.summary['google/pegasus-cnn_dailymail'] !== undefined && props.summary['google/pegasus-cnn_dailymail']}</SummaryComponent>
        </div>
        <div style={{display: "inline-flex"}}>
            <StyledButton
                onClick={() => callGenerateAbstractiveSummary('google/pegasus-multi_news')}>Generate <b>'google/pegasus-multi_news'</b> Abstractive
                Summary</StyledButton>
            <SummaryComponent> {props.summary['google/pegasus-multi_news'] !== undefined && props.summary['google/pegasus-multi_news']}</SummaryComponent>
        </div>
        <div style={{display: "inline-flex"}}>
            <StyledButton
                onClick={() => callGenerateAbstractiveSummary('arawat/pegasus-custom-xsum')}>Generate <b>'arawat/pegasus-custom-xsum'</b> Abstractive
                Summary</StyledButton>
            <SummaryComponent> {props.summary['arawat/pegasus-custom-xsum'] !== undefined && props.summary['arawat/pegasus-custom-xsum']}</SummaryComponent>
        </div>
    </div>)
}