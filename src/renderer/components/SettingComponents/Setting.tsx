import React, { useState } from "react";

export default function Settings() {
  const [targetPath, setTargetPath] = useState("");
  const [quarantinePath, setQuarantinePath] = useState("");
  const [action, setAction] = useState("quarantine");

  const handlePathChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page refresh

    // Validate paths
    const paths = [
      { name: "Target Path", path: targetPath },
      { name: "Quarantine Path", path: quarantinePath },
    ];

    const invalidPaths = paths.filter(
      (item) => !item.path || !item.path.trim() || !item.path.includes(":")
    );

    if (invalidPaths.length > 0) {
      const invalidPathNames = invalidPaths.map((item) => item.name).join(", ");
      alert(`Please enter valid paths for: ${invalidPathNames}`);
      return;
    }

    console.log("Folder Paths:");
    console.log("Target Path:", targetPath);
    console.log("Quarantine Path:", quarantinePath);

    try {
      const response = await fetch("http://192.168.1.45:5000/target/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          target_folder: targetPath,
          quarantine_folder: quarantinePath,
          unsafe_file_action: action,
        }),
      });

      const data = await response.json();
      console.log("Success:", data);
      alert("Folder paths have been saved successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the paths.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Settings</h2>

      <form onSubmit={handleSubmit}>
        <div style={styles.inputWrapper}>
          <label style={styles.label}>Target Folder Path</label>
          <input
            type="text"
            style={styles.input}
            placeholder="Enter full path (e.g., C:\\Users\\Target)"
            value={targetPath}
            onChange={(e) => handlePathChange(e, setTargetPath)}
          />
          {targetPath && <p>Selected: {targetPath}</p>}
        </div>

        <div style={styles.inputWrapper}>
          <label style={styles.label}>Quarantine Folder Path</label>
          <input
            type="text"
            style={styles.input}
            placeholder="Enter full path (e.g., C:\\Users\\Quarantine)"
            value={quarantinePath}
            onChange={(e) => handlePathChange(e, setQuarantinePath)}
          />
          {quarantinePath && <p>Selected: {quarantinePath}</p>}
        </div>

        <div style={styles.inputWrapper}>
          <label style={styles.label}>Action for Infected Files</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label style={{ marginRight: "10px" }}>Quarantine</label>
            <label style={styles.switch}>
              <input
                type="checkbox"
                checked={action === "delete"}
                onChange={(e) => {
                  const newAction = e.target.checked ? "delete" : "quarantine";
                  setAction(newAction);
                  console.log(newAction);
                }}
              />
              <span
                style={{
                  ...styles.slider,
                  backgroundColor: action === "delete" ? "#FF6347" : "#32CD32",
                  transform: action === "delete" ? "translateX(20px)" : "translateX(0px)",
                }}
              ></span>
            </label>
            <label style={{ marginLeft: "10px" }}>Delete</label>
          </div>
        </div>

        <div style={styles.inputWrapper}>
          <button
            type="submit"
            style={{
              ...styles.input,
              backgroundColor: "#4A2328",
              color: "white",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              width: "max-content",
            }}
          >
            Save Paths
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  switch: {
    position: "relative" as const,
    display: "inline-block",
    width: "40px",
    height: "20px",
    marginRight: "10px",
  },
  slider: {
    position: "absolute" as const,
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ccc",
    transition: "all 0.4s ease",
    borderRadius: "34px",
    height: "20px",
    width: "20px",
  },
  container: {
    width: "94%",
    maxWidth: "94%",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "16px",
    color: "#333",
    fontFamily: "'Montserrat', sans-serif",
    height: "400px",
  },
  title: {
    textAlign: "left" as const,
    fontSize: "24px",
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
    fontWeight: "bold",
  },
  input: {
    width: "97%",
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
