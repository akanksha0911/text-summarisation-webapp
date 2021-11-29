import AudioRecorder from "../../AudioRecorder/AudioRecorder";
import {convertVoiceToText} from "../../../BackEndServices/AwsTrancribe";
import {MethodContainer} from "./CommonStyles";

function VoiceInput(props) {
    const {setInputText} = props;


    return (<MethodContainer>
        <h3>Voice Input</h3>
        <AudioRecorder finishRecording={async (bytes) => {
            console.log(bytes)
            const text = await convertVoiceToText(bytes)
            setInputText(text)
        }}/>
        <p>Press 'start recording' to begin your transcription. Press STOP recording once you finish speaking.</p>
    </MethodContainer>)
}

export default VoiceInput;