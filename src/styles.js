export const styles = {
  appContainer: {
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2a2a72",
  },
  resetButton: {
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  compareButton: (enabled) => ({
    padding: "10px 20px",
    backgroundColor: enabled ? "green" : "grey",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: enabled ? "pointer" : "not-allowed",
  }),
};
