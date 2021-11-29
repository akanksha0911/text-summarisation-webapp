import awsconfig from "../aws-exports";

export const BACK_END_URL = 'http://127.0.0.1:5000';

export async function TranscribeText(file) {

    const s3FilePath = `s3://${awsconfig.aws_user_files_s3_bucket}/public/${file.name}`

    // transcribe using backend
    const resTranscriptJob = await fetch(`${BACK_END_URL}/transcribe`, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({path: s3FilePath})
    }).then(response => {
        return response.json()
    }).catch(error => console.log('error', error));
    return resTranscriptJob.transcript
}

export async function GenerateAbstractiveSummary(text, model) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "model": model,
        "text": text
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const res = await fetch(`${BACK_END_URL}/abstractive`, requestOptions)
        .then(response =>  {return response.text()} )
        .catch(error => console.log('error', error));
    return res;
}

export async function GenerateExtractiveSummary(text) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "text": text
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const res = await fetch(`${BACK_END_URL}/extractive`, requestOptions)
        .then(response =>  {return response.text()} )
         .catch(error => console.log('error', error));
    return res;
}

export async function GenerateRogueScore(summaryA, summaryB) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "summary_a": summaryA,
        "summary_b": summaryB
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const res = await fetch(`${BACK_END_URL}/rogueScore`, requestOptions)
        .then(response =>  {return response.text()} )
        .catch(error => console.log('error', error));
    return res;
}
