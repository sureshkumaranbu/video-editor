"use client"
// components/VideoUploadComponent.js

import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase"; // Importing Firebase storage configuration

const VideoUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [videoURL, setVideoURL] = useState("");

  // Handle the file input and call upload function
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      uploadFile(file);
    }
  };

  // Upload file to Firebase Storage
  const uploadFile = (file) => {
    const storageRef = ref(storage, `videos/${file.name}`); // Reference to storage location
    const uploadTask = uploadBytesResumable(storageRef, file); // Begin upload task

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress tracking
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        console.error("Upload failed: ", error);
      },
      () => {
        // Once the upload is complete, get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setVideoURL(downloadURL);
          console.log("File available at: ", downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileUpload} />
      {progress > 0 && <progress value={progress} max="100">{progress}%</progress>}
      {videoURL && (
        <div>
          <h4>Upload Complete:</h4>
          <a href={videoURL} target="_blank" rel="noopener noreferrer">
            View Video
          </a>
        </div>
      )}
    </div>
  );
};

export default VideoUploadComponent;
