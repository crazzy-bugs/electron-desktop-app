import React from "react";

const Loader: React.FC = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.loader}></div>
    </div>
  );
};

const styles = {
  loaderContainer: {
    position: "fixed", // Ensures it covers the viewport
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: semi-transparent overlay
    zIndex: 9999, // Ensures it appears above all content
  },
  loader: {
    border: "4px solid #f3f3f3", // Light gray border
    borderTop: "4px solid #3498db", // Blue border for animation
    borderRadius: "50%", // Makes it circular
    width: "50px",
    height: "50px",
    animation: "spin 1s linear infinite", // Adds spinning animation
  },
} as const;

// Keyframes for the spinning loader
const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Inject the keyframes into the document
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = keyframes;
  document.head.appendChild(style);
}

export default Loader;
