import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ label, onFileRead }) => {
  const [fileName, setFileName] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setFileName(file.name);
    setUploaded(true);

    if (onFileRead) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onFileRead(event.target.result);
        alert(`File "${file.name}" uploaded successfully!`);
  
      };
      reader.readAsText(file);
    }else {
      alert(` File "${file.name}" uploaded successfully!`);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


  const containerStyle = {
    border: "2px dashed rgb(210, 11, 41)",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    margin: "40px",
    height: "180px", // increased height for file name and message
    borderColor: isDragActive ? "rgb(238, 171, 15)" : "#ccc",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
    transition: "border 0.3s ease",
    width: "250px",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const fileNameStyle = {
    marginTop: "10px",
    fontSize: "14px",
    color: "green",
    wordBreak: "break-all",
  };

  const uploadedStyle = {
    marginTop: "5px",
    fontSize: "13px",
    color: "blue",
  };

  return (
    <div {...getRootProps()} style={containerStyle}>
      <input {...getInputProps()} />
      <p style={labelStyle}>{label}</p>
      <p>Drag and Drop your file here or click to upload</p>
      {fileName && <p style={fileNameStyle}>Uploaded: {fileName}</p>}
      
    </div>
  );
};

export default FileUpload;
