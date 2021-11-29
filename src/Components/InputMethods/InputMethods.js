import AudioFileInput from "./methods/AudioFileInput";
import TextFileInput from "./methods/TextFileInput";
import VoiceInput from "./methods/VoiceInput";

export default function InputMethods(props) {
    return (<div style={{display: "inline-flex"}}>
        <AudioFileInput {...props}/>
        <TextFileInput {...props}/>
        <VoiceInput  {...props}/>
    </div>)
}