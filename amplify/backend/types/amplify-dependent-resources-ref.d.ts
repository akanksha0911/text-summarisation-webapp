export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "textsummarisation0b64719e": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "predictions": {
        "transcriptione0188656": {
            "region": "string",
            "language": "string"
        }
    },
    "hosting": {
        "S3AndCloudFront": {
            "Region": "string",
            "HostingBucketName": "string",
            "WebsiteURL": "string",
            "S3BucketSecureURL": "string"
        }
    },
    "storage": {
        "textSummarisationStorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}