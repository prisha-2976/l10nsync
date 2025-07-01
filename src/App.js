import React, { useState } from "react";
import FileUpload from "./FileUpload.js";
import CompareButton from "./CompareButton.js";

const App = () => {
  const [file1Content, setFile1Content] = useState(null);
  const [file2Content, setFile2Content] = useState(null);

  const handleCompare = () => {
    if (!file1Content || !file2Content) {
      alert("Please upload both files to compare them.");
      return;
    }

    try {
      const json1 = JSON.parse(file1Content);
      const json2 = JSON.parse(file2Content);

      const keys1 = Object.keys(json1);
      const keys2 = Object.keys(json2);

      // if keys missing in file2
      const missingInFile2 = keys1.filter((key) => !keys2.includes(key));

      // if kmeys missing in file1
      const missingInFile1 = keys2.filter((key) => !keys1.includes(key));

      let message = "";

      if (missingInFile2.length === 0 && missingInFile1.length === 0) {
        message = " No keys is missing in both files.";
      } else {
        if (missingInFile2.length > 0) {
          message += `Keys missing in File 2:\n${missingInFile2.join(
            "\n"
          )}\n\n`;
        }
        if (missingInFile1.length > 0) {
          message += `Keys missing in File 1:\n${missingInFile1.join("\n ")}`;
        }
      }

      alert(message);
    } catch (error) {
      console.error("Invalid file uploaded:", error);
      alert("Please upload valid JSON files.");
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  const filesRowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "30px",
    flexWrap: "wrap",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "rgb(12, 26, 228)",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>L10NSync</h1>

      <div style={filesRowStyle}>
        <FileUpload label="Upload File1" onFileRead={setFile1Content} />
        <FileUpload label="Upload File2" onFileRead={setFile2Content} />
      </div>

      <CompareButton onClick={handleCompare} />
    </div>
  );
};

export default App;
