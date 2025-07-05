import React, { useState } from "react";
import FileUpload from "./FileUpload.js";
import CompareButton from "./CompareButton.js";
import { styles } from "./styles.js";

function App() {
  const [file1Content, setFile1Content] = useState("");
  const [file2Content, setFile2Content] = useState("");

  const handleCompare = () => {
    const lines1 = file1Content.split("\n");
    const lines2 = file2Content.split("\n");

    const missingInFile2 = lines1.filter((line) => !lines2.includes(line));
    const missingInFile1 = lines2.filter((line) => !lines1.includes(line));

    const resultHTML = `
      <html>
        <head><title>Comparison Result</title></head>
        <body style="font-family:sans-serif; padding:20px;">
          <h1>Comparison Result</h1>

          <h3>Missing in File 2:</h3>
          <pre>${missingInFile2.join("\n") || "None"}</pre>

          <h3>Missing in File 1:</h3>
          <pre>${missingInFile1.join("\n") || "None"}</pre>

          <button id="downloadBtn" style="margin-top:20px;padding:10px 20px;">Download Result</button>

          <script>
            document.getElementById("downloadBtn").addEventListener("click", function() {
              const text = "Missing in File 2:\\n${missingInFile2.join(
                "\\n"
              )}\\n\\nMissing in File 1:\\n${missingInFile1.join("\\n")}";
              const blob = new Blob([text], { type: "text/plain" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "comparison_result.txt";
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            });
          </script>
        </body>
      </html>
    `;

    const newWindow = window.open();
    newWindow.document.write(resultHTML);
    newWindow.document.close();
  };

  const handleReset = () => {
    setFile1Content("");
    setFile2Content("");
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.heading}>Text File Comparator</h1>

      <button onClick={handleReset} style={styles.resetButton}>
        Reset Files
      </button>

      <FileUpload label="Upload File 1" onFileRead={setFile1Content} />
      <FileUpload label="Upload File 2" onFileRead={setFile2Content} />

      <CompareButton
        onClick={handleCompare}
        disabled={!file1Content || !file2Content}
      />
    </div>
  );
}

export default App;
