import React from "react";
import { styles } from "../styles.js";

const FileUpload = ({ label, onFileRead }) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("text/")) {
      alert("❌ Please upload a valid text (.txt) file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => onFileRead(ev.target.result);
    reader.readAsText(file);
  };

  return (
    <div style={styles.inputContainer}>
      <label>
        {label}: <input type="file" accept=".txt" onChange={handleUpload} />
      </label>
    </div>
  );
};

export default FileUpload;
