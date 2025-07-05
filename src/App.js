import React, { useState } from "react";
import FileUpload from "./FileUpload.js";
import CompareButton from "./CompareButton.js";

function App() {
  const [file1Content, setFile1Content] = useState("");
  const [file2Content, setFile2Content] = useState("");

  const handleCompare = () => {
    if (!file1Content || !file2Content) {
      alert("Please upload both files before comparing.");
      return;
    }

    if (file1Content.trim() === file2Content.trim()) {
      alert("Both files are same. No differences found.");
      return;
    }

    const keys1 = file1Content.split("\n").map((line) => line.split(":")[0].trim());
    const keys2 = file2Content.split("\n").map((line) => line.split(":")[0].trim());

    const missingInFile2 = keys1.filter((key) => !keys2.includes(key));
    const missingInFile1 = keys2.filter((key) => !keys1.includes(key));

    const resultHTML = `
      <html>
        <head><title>Comparing....</title></head>
        <body style="font-family:sans-serif; padding:20px;">
          <h1>Comparing....</h1>
          <div style="display: flex; justify-content: space-around;">
            <div>
              <h3>Missing in File 2</h3>
              <pre>${missingInFile2.join("\n") || "None"}</pre>
            </div>
            <div>
              <h3>Missing in File 1</h3>
              <pre>${missingInFile1.join("\n") || "None"}</pre>
            </div>
          </div>

          <button style="margin-top:20px;
          padding:10px 20px;">Download</button>
        </body>
      </html>
    `;

    const newWindow = window.open();
    newWindow.document.write(resultHTML);
    newWindow.document.close();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "rgb(12, 26, 228)", fontWeight: "bold" }}>
        L10NSync
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <FileUpload label="Upload File 1" onFileRead={setFile1Content} />
        <FileUpload label="Upload File 2" onFileRead={setFile2Content} />
      </div>

      <CompareButton
        onClick={handleCompare}
        disabled={!file1Content || !file2Content}
      />
    </div>
  );
}

export default App;
