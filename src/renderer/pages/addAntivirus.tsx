import React, { useState } from 'react';
import ApiClient from '../../api/client';
import Modal from '../components/partials/Modal';

const AddAntivirus: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [cmdModalVisible, setCmdModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');
  const [cmdModalContent, setCmdModalContent] = useState<string>('');

  const [logs, setLogs] = useState<string>('');
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = {
      av_name: formData.get('antivirusName'),
      ip_address: formData.get('vmIpAddress'),
      username: formData.get('username'),
      password: formData.get('password'),
      av_exec_command: formData.get('avExecutionCommand'),
      av_update_command: formData.get('avUpdationCommand'),
      custom_field: formData.get('customField'),
    };

    try {
      // Simulate API call
      // await ApiClient.addAntivirus(data); // Uncomment this when API is ready
      setCmdModalContent(
          `Command Execution:\n\nExecuting AV Setup for ${data.av_name}...\nIP Address: ${data.ip_address}\nUsername: ${data.username}\nStatus: Success!`
      );
      setCmdModalContent('Antivirus added successfully!');
    } catch (error) {
      console.error('Error adding antivirus:', error);
      setCmdModalContent('Failed to add antivirus. Please try again.');
      setCmdModalContent(
        `Command Execution:\n\nFailed to execute setup for ${data.av_name}. Please check the logs for details.`
      );
    } finally {
      setModalVisible(true); // Show confirmation modal
      setCmdModalVisible(true); // Show command modal
    }
  };

  const handleRetry = () => {
    console.log('Retrying...');
  }
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const closeCmdModal = () => {
    setCmdModalVisible(false);
  };

  return (
    <div className="form-container">
      <h1>Add Antivirus</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="form-group">
          <label htmlFor="antivirusName">Antivirus Name</label>
          <input type="text" id="antivirusName" name="antivirusName" required />
        </div>
        <div className="form-group">
          <label htmlFor="vmIpAddress">VM's IP Address</label>
          <input
            type="text"
            id="vmIpAddress"
            name="vmIpAddress"
            pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              required
            />
            <button className='password-visibility-button' type="button" onClick={togglePasswordVisibility}>
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="avExecutionCommand">AV Execution Command</label>
          <input
            type="text"
            id="avExecutionCommand"
            name="avExecutionCommand"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="avUpdationCommand">AV Updation Command (Optional)</label>
          <input type="text" id="avUpdationCommand" name="avUpdationCommand" />
        </div>
        <div className="form-group">
          <label htmlFor="customField">Custom Field (Optional)</label>
          <input type="text" id="customField" name="customField" />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Confirmation Modal */}
      {/* <Modal show={modalVisible} onClose={closeModal}>
        <p>{modalContent}</p>
      </Modal> */}
      {/* Command Prompt Modal */}
      <Modal show={cmdModalVisible} onClose={closeCmdModal}>
        <>
        {loading ? (
         <>
          <h5>Command Prompt</h5>
          <div>
            {Number(status) !== 200 && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button onClick={handleRetry} style={{ marginRight: '10px' }}>Retry</button>
                <button onClick={closeCmdModal}>OK</button>
              </div>
            )}
            <p>Status : {status}</p>
            <p>Logs : {logs}</p>
          </div>
         </>
          
        ) : (
          <pre>{cmdModalContent}</pre>
        )}
        </>
      </Modal>

      <style>
        {`
          .form-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          h1 {
            text-align: center;
            color: #043927;
          }
          .form-group {
            margin-bottom: 15px;
          }
          label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          }
          input {
            width: 90%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          button {
            background-color: #043927;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top:10px
          }
          button:hover {
            background-color: #036b4f;
          }
        `}
      </style>
    </div>
  );
};

export default AddAntivirus;
