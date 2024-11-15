const baseUrl = 'http://localhost:3000';

// Utility function to handle requests
const handleRequest = async (endpoint: string, method: string, body?: any) => {
  try {
    const url = `${baseUrl}${endpoint}`;
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      options.body = JSON.stringify(body); // Add body if provided
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Try to return the JSON response or an empty object if no content
    try {
      return await response.json();
    } catch {
      console.log('No JSON response');
      return {}; // Return an empty object if the response body isn't JSON
    }
  } catch (error) {
    console.error(`Error during ${method} request to ${endpoint}:`, error);
    throw error;
  }
};

// API Client class
class ApiClient {
  // 1. Add a new scan result
  static addScan(scanData: any) {
    return handleRequest('/scans', 'POST', scanData);
  }

  // 2. Get all scan results
  static getAllScans() {
    return handleRequest('/scans', 'GET');
  }

  // 3. Get a scan by ID
  static getScanById(id: number) {
    return handleRequest(`/scans/${id}`, 'GET');
  }

  // 4. Update a scan result
  static updateScan(id: number, updatedData: any) {
    return handleRequest(`/scans/${id}`, 'PUT', updatedData);
  }

  // 5. Delete a scan by ID
  static deleteScan(id: number) {
    return handleRequest(`/scans/${id}`, 'DELETE');
  }
}

export default ApiClient;
