import {Storage} from "aws-amplify";

export async function uploadFile(file){
    //clean old file with same name
    try {
        await Storage.remove(file.name);
    } catch (e) {
        console.log(e)
    }

    // put in s3/storage
    try {
        await Storage.put(file.name, file, {
            contentType: file.type, // contentType is optional
        });
    } catch (error) {
        console.log("Error uploading file: ", error);
    }
}