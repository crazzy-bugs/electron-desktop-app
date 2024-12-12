import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../partials/Loader";

export default function Settings() {
  const [targetPath, setTargetPath] = useState("");
  const [quarantinePath, setQuarantinePath] = useState("");
  const [action, setAction] = useState("quarantine");
  const [loading, setLoading] = useState(false);
  const [totalFilesScanned, setTotalFilesScanned] = useState(0);

  const handlePathChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0].path);
    }
  };

  // onload fetch the data
  useEffect(() => {
    const fetchData = async () => {
      // fetch path from api
      // const response = await axios.get("http://127.0.0.1:5000/target/view");

      // if(response) {
      //   const path = response.data;
  
      //   console.log(path);
      //   setTargetPath(path.target_folder);
      //   setQuarantinePath(path.quarantine_folder);
      // }
      
    };

    fetchData();
  }, []);
  

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

    setLoading(true);

    try {
    

      const response = await axios.post("http://127.0.0.1:5000/target/add", {
        target_folder: targetPath,
        quarantine_folder: quarantinePath,
        unsafe_file_action: action,
      });

      const result = await axios.post("http://127.0.0.1:5000/target/run");

      setTimeout(() => {
        setLoading(false);
        if(response.status !== 200) {
          return alert("An error occurred while saving the paths.");
        }
        if(result.status === 200 && response.status === 200) {
          alert("Folder paths have been saved successfully!");
          setTotalFilesScanned(result.data.total_files_scanned);
        }

        console.log("Response_________:", result);
        alert("target updated successfully!");

        return console.log("Response:", response);
        console.log("Success:", response.data);
        alert("Folder paths have been saved successfully!");
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("An error occurred while saving the paths.");
    }
  };

  return (
    <div style={{ ...styles.container, position: "relative" }}>
      {loading && <Loader />}
      <h2 style={styles.title}>Settings</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.partition}>
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Target Folder Path</label>
            {/* <input
              type="file"
              style={styles.fileInput}
              webkitdirectory="true"
              directory="true"
              onChange={(e) => handleFileChange(e, setTargetPath)}
            /> */}
            {targetPath && <p>Selected: {targetPath}</p>}
          </div>

          <div style={styles.inputWrapper}>
            <label style={styles.label}>Quarantine Folder Path</label>
            {/* <input
              type="file"
              style={styles.fileInput}
              webkitdirectory="true"
              directory="true"
              onChange={(e) => handleFileChange(e, setQuarantinePath)}
            /> */}
            {quarantinePath && <p>Selected: {quarantinePath}</p>}
          </div>
        </div>

        <div style={styles.partition}>
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Target Folder Path</label>
            <input
              type="text"
              style={styles.input}
              placeholder="Enter full path (e.g., C:\\Users\\Target)"
              value={targetPath}
              onChange={(e) => handlePathChange(e, setTargetPath)}
            />
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
          </div>
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
      <div>
        <p>Total Files Scanned: {totalFilesScanned}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "94%",
    maxWidth: "94%",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "16px",
    color: "#333",
    fontFamily: "'Montserrat', sans-serif",
    height: "auto",
    position: "relative" as const,
  },
  loader: {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "24px",
    color: "#333",
  },
  title: {
    textAlign: "left" as const,
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#444",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
  },
  partition: {
    width: "100%",
    marginBottom: "20px",
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
  fileInput: {
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
};
