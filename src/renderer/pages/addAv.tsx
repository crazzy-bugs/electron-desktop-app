import React, { useState } from 'react';
import ApiClient from '../../api/client';
import '../styles/add-av.css';

const AddAvPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

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
      let result = await ApiClient.addAntivirus(data);
      //   result = await result.json();
      console.log('Antivirus added:', result);

      alert('Antivirus added successfully');
    } catch (error) {
      console.error('Error adding antivirus:', error);
      alert('Failed to add antivirus');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="form-container">
      <h1>Add Antivirus</h1>
      <form onSubmit={handleSubmit}>
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
            <button type="button" onClick={togglePasswordVisibility}>
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
          <label htmlFor="avUpdationCommand">
            AV Updation Command (Optional)
          </label>
          <input type="text" id="avUpdationCommand" name="avUpdationCommand" />
        </div>
        <div className="form-group">
          <label htmlFor="customField">Custom Field (Optional)</label>
          <input type="text" id="customField" name="customField" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAvPage;
