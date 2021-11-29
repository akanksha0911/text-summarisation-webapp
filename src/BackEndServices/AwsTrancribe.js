import {Predictions} from "aws-amplify";

export async function convertVoiceToText(bytes) {
    return await Predictions.convert({
        transcription: {
            source: {
                bytes
            },
            // language: "en-US", // other options are "en-GB", "fr-FR", "fr-CA", "es-US"
        },
    }).then(({transcription: {fullText}}) => {
        return fullText
    })
        .catch(err => {
            return err
        })
}