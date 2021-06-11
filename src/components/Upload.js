import { config } from "dotenv";
import React, { useRef } from "react";
import S3 from "react-aws-s3";

function Upload() {
  const fileInput = useRef();
  // const fileType = ".mp4, .txt"
  const handleClick = (event) => {
    event.preventDefault();
    console.log("button pressed");
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name;
    const config = {
      bucketName: process.env.REACT_APP_BUCKET_NAME,
      dirName: process.env.REACT_APP_DIR_NAME /* optional */,
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESS_ID,
      secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
    };
    console.log("Config", config);
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      console.log(data);
      if (data.status === 204) {
        console.log("success");
      } else {
        console.log("fail");
      }
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>S3 File Uploader</h1>
        <form className="upload-steps" onSubmit={handleClick}>
          <label>
            Upload File:
            <input
              type="file"
              accept={process.env.REACT_APP_CONTENT_TYPE}
              ref={fileInput}
            />
          </label>
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
