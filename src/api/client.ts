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
  static getScans(page: number, limit: number) {
    return handleRequest(`/scans?limit=${limit}&page=${page}`, 'GET');
  }

  // Add antivirus
  static addAntivirus(antivirusData: any) {
    return handleRequest('/antiviruses', 'POST', antivirusData);
  }

  // Get all antivirus
  static getAntiviruses() {
    return handleRequest('/antiviruses', 'GET');
  }

  // Delete antivirus
  static deleteAntivirus(id: number) {
    return handleRequest(`/antiviruses/${id}`, 'DELETE');
  }

  // get all notifications
  static getNotifications() {
    return handleRequest('/notifications', 'GET');
  }
}

export default ApiClient;
