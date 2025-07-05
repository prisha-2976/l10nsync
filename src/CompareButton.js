import React from "react";
import { styles } from "./styles.js";

const CompareButton = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={styles.compareButton(!disabled)}
  >
    Compare Files
  </button>
);

export default CompareButton;
