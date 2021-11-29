
import {MethodContainer} from "./CommonStyles";

function TextFileInput(props) {
    const {setInputText}=props;
    const readFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            setInputText(text);
        };
        reader.readAsText(e.target.files[0])
    }

    return (<MethodContainer>
        <h3>Text Input</h3>
        <div>
            <input type="file" onChange={(e) => readFile(e)} />
        </div>
        <p>Upload your text file</p>
    </MethodContainer>)
}
export default TextFileInput;