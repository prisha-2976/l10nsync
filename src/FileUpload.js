import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ label, onFileRead }) => {
  const [fileName, setFileName] = useState("");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (!file.type.startsWith("text/")) {
      alert(" Please upload a valid text (.txt) file only.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      onFileRead(event.target.result);
      setFileName(file.name);
      alert(`File "${file.name}" uploaded successfully!`);
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    onFileRead("");
    setFileName("");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const containerStyle = {
    border: "2px dashed rgb(210, 11, 41)",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    margin: "20px",
    minHeight: "150px",
    borderColor: isDragActive ? "rgb(238, 171, 15)" : "#ccc",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
    transition: "border 0.3s ease",
    width: "250px",
  };

  const resetButtonStyle = {
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div {...getRootProps()} style={containerStyle}>
        <input {...getInputProps()} />
        <p>
          <b>{label}</b>
        </p>
        <p>Drag & drop or click to upload</p>
        {fileName && <p>Uploaded: {fileName}</p>}
      </div>

      <button onClick={handleReset} style={resetButtonStyle}>
        Reset
      </button>
    </div>
  );
};

export default FileUpload;
