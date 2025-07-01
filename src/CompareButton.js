import React from "react";

const CompareButton = ({ onClick }) => {
  const buttonStyle = {
    backgroundColor: "#c30ae9", // purple-pink tone
    color: "white",
    border: "none",
    padding: "12px 30px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const hoverStyle = {
    backgroundColor: "#9b07b6",
    transform: "scale(1.05)",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Compare
    </button>
  );
};

export default CompareButton;
