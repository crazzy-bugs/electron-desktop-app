const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();  // To use environment variables

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(helmet());  // Adding security headers

// Mock data
const mockFileDetails = {
  1: {
    file_hash: 'abc1234567890def',
    file_name: 'example.exe',
    basic_details: 'This file contains a PE executable',
    binary_signature: 'Detected as potentially unsafe',
    identified_capabilities: 'Keylogging, Network communication',
    file_properties: '64-bit PE File',
    imports: 'KERNEL32.dll, USER32.dll, ADVAPI32.dll',
  },
};

// Endpoint to fetch file details
app.get('/file-details/:id', (req, res) => {
  const fileId = req.params.id;

  // Simple validation for the fileId (numeric in this case)
  if (isNaN(fileId)) {
    return res.status(400).json({ error: 'Invalid file ID' });
  }

  const fileDetails = mockFileDetails[fileId];

  if (fileDetails) {
    res.json(fileDetails);
  } else {
    res.status(404).json({ error: `File with ID ${fileId} not found` });
  }
});

// Start server
const PORT = process.env.PORT || 5000;  // Use environment variable if available
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
