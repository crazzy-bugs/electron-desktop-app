
import React, { useEffect, useState } from "react";
import axios from "axios";

// ...existing code...

const fetchStatistics = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:5000/statistics");
    const files = response.data.files;

    if (!Array.isArray(files)) {
      throw new TypeError("Expected files to be an array");
    }

    const filteredFiles = files.filter(file => file.status === "scanned");
    // ...existing code...
  } catch (error) {
    console.error("Error fetching statistics:", error);
  }
};

// ...existing code...