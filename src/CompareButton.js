import React from "react";

const CompareButton = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: disabled ? "grey" : "green",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: disabled ? "not-allowed" : "pointer",
    }}
  >
    Compare Files
  </button>
);

export default CompareButton;
