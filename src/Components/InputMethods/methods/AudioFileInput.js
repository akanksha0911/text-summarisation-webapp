
import {MethodContainer} from "./CommonStyles";
import {TranscribeText} from "../../../BackEndServices/APIClient";
import {uploadFile} from "../../../BackEndServices/AwsStorage";


function AudioFileInput(props) {
    const {setInputText} = props;
    const readFile = async (e) => {
        const file = e.target.files[0];
        await uploadFile(file)
        const transcript = await TranscribeText(file)
        setInputText(transcript)
    }

    return (<MethodContainer>
        <h3>Audio File Input</h3>
        <div>
            <input type="file" onChange={(e) => readFile(e)}/>
        </div>
        <p>Upload your audio file</p>
    </MethodContainer>)
}

export default AudioFileInput;