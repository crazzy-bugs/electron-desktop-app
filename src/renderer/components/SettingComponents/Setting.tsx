import React, { useState } from "react";

export default function Settings() {
  const [targetPath, setTargetPath] = useState("");
  const [destinationPath, setDestinationPath] = useState("");
  const [quarantinePath, setQuarantinePath] = useState("");

  const handlePathChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const handleSubmit = () => {
    // Validate paths before saving
    const paths = [
      { name: "Target Path", path: targetPath },
      { name: "Destination Path", path: destinationPath },
      { name: "Quarantine Path", path: quarantinePath }
    ];

    const invalidPaths = paths.filter(item => 
      !item.path || 
      !item.path.trim() || 
      !item.path.includes(':')
    );

    if (invalidPaths.length > 0) {
      const invalidPathNames = invalidPaths.map(item => item.name).join(", ");
      alert(`Please enter valid paths for: ${invalidPathNames}`);
      return;
    }

    console.log("Folder Paths:");
    console.log("Target Path:", targetPath);
    console.log("Destination Path:", destinationPath);
    console.log("Quarantine Path:", quarantinePath);
    alert("Folder paths have been saved successfully!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Configure Folder Paths</h2>

      <div style={styles.inputWrapper}>
        <label style={styles.label}>Target Folder Path</label>
        <input 
          type="text"
          style={styles.input}
          placeholder="Enter full path (e.g., C:\Users\Sarthak\Documents)"
          value={targetPath}
          onChange={(e) => handlePathChange(e, setTargetPath)}
        />
        {targetPath && <p>Selected: {targetPath}</p>}
      </div>

      <div style={styles.inputWrapper}>
        <label style={styles.label}>Destination Folder Path</label>
        <input 
          type="text"
          style={styles.input}
          placeholder="Enter full path (e.g., C:\Users\Sarthak\Downloads)"
          value={destinationPath}
          onChange={(e) => handlePathChange(e, setDestinationPath)}
        />
        {destinationPath && <p>Selected: {destinationPath}</p>}
      </div>

      <div style={styles.inputWrapper}>
        <label style={styles.label}>Quarantine Folder Path</label>
        <input 
          type="text"
          style={styles.input}
          placeholder="Enter full path (e.g., C:\Users\Sarthak\Quarantine)"
          value={quarantinePath}
          onChange={(e) => handlePathChange(e, setQuarantinePath)}
        />
        {quarantinePath && <p>Selected: {quarantinePath}</p>}
      </div>

      <div style={styles.inputWrapper}>
        <button 
          onClick={handleSubmit}
          style={{
            ...styles.input,
            backgroundColor: "#4A2328",
            color: "white",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease"
          }}
        >
          Save Paths
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    color: "#333",
    fontFamily: "'Montserrat', sans-serif",
  },
  title: {
    textAlign: "center" as const,
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#444",
  },
  inputWrapper: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "16px",
    marginBottom: "8px",
    color: "#555",
    fontWeight:'bold',
  },
  input: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    color: "#333",
    fontSize: "14px",
    outline: "none",
    fontFamily: "'Montserrat', sans-serif",
  },
};