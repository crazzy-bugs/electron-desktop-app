import React, { useState } from 'react';
import { EyeIcon } from 'lucide-react';

export default function AntivirusForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedAntivirus, setSelectedAntivirus] = useState<string>('');
  const [formData, setFormData] = useState({
    avName: '',
    execCommand: '',
    updateCommand: '',
    ipAddress: '',
    username: '',
    password: '',
    customField: '',
  });

  // Static antivirus options
  type AntivirusOptions = {
    [key: string]: {
      avName: string;
      execCommand: string;
      updateCommand: string;
    };
  };

  const antivirusOptions: AntivirusOptions = {
    "Windows Defender": {
      avName: "Windows Defender",
      execCommand: `""C:\Program Files\Windows Defender\MpCmdRun.exe" -Scan -ScanType 3 -File C:\Users\{username}\{file}",`,
      updateCommand: "updateA",
    },
    "ESET": {
      avName: "ESET",
      execCommand: "commandB",
      updateCommand: "updateB",
    },
    "Trend Micro": {
      avName: "Trend Micro",
      execCommand: "commandC",
      updateCommand: "updateC",
    },
  };

  const handleTabClick = (antivirus: string) => {
    setSelectedAntivirus(antivirus);
    if (antivirus === 'Custom') {
      setFormData({
        avName: '',
        execCommand: '',
        updateCommand: '',
        ipAddress: '',
        username: '',
        password: '',
        customField: '',
      });
    } else {
      const data = antivirusOptions[antivirus];
      if (data) {
        setFormData({
          ...formData,
          avName: data.avName,
          execCommand: data.execCommand,
          updateCommand: data.updateCommand,
        });
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/antivirus/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          av_name: formData.avName,
          ip_address: formData.ipAddress,
          username: formData.username,
          password: formData.password,
          av_exec_command: formData.execCommand,
          av_update_command: formData.updateCommand,
          custom_field: formData.customField,
        }),
      });

// return      console.log('Response:', response);
      if (response.ok) {
        const result = await response.json();
        console.log('Form Submitted:', result);
        alert('AV added successfully!');
      } else {
        console.error('Error submitting form:', response.statusText);
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="antivirus-container">
      <div className="header-tabs">
        {Object.keys(antivirusOptions).map((antivirus) => (
          <button
            key={antivirus}
            className={`tab-button ${selectedAntivirus === antivirus ? 'active-tab' : ''}`}
            onClick={() => handleTabClick(antivirus)}
          >
            {antivirus}
          </button>
        ))}
        <button
          className={`tab-button custom-tab ${selectedAntivirus === 'Custom' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('Custom')}
        >
          <span>+</span>
          <span>Custom</span>
        </button>
      </div>

      <div className="form-container">
        <h1>Add Antivirus</h1>
        <form className="av-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="avName">Antivirus Name</label>
            <input
              type="text"
              id="avName"
              name="avName"
              value={formData.avName}
              onChange={handleInputChange}
              disabled={selectedAntivirus !== 'Custom'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="ipAddress">VM's IP Address</label>
            <input
              type="text"
              id="ipAddress"
              name="ipAddress"
              value={formData.ipAddress}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <EyeIcon />
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="execCommand">AV Execution Command</label>
            <input
              type="text"
              id="execCommand"
              name="execCommand"
              value={formData.execCommand}
              onChange={handleInputChange}
              disabled={selectedAntivirus !== 'Custom'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="updateCommand">AV Update Command (Optional)</label>
            <input
              type="text"
              id="updateCommand"
              name="updateCommand"
              value={formData.updateCommand}
              onChange={handleInputChange}
              disabled={selectedAntivirus !== 'Custom'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="customField">Custom Field (Optional)</label>
            <input
              type="text"
              id="customField"
              name="customField"
              value={formData.customField}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <style>
        {`
          .active-tab {
            background-color: #000 !important;
            color: white;
          }
            .antivirus-container {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border: 1px solid #ccc;
  position: relative;
  border-radius: 10px;
}

.header-tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.tab-button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  font-size: 14px;
  border-radius:10px;
}

.custom-tab {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 5px;
}

.form-container {
  padding: 20px;
  border: 1px solid #ccc;
}

.form-container h1 {
  color: #004d40;
  font-size: 24px;
  margin-bottom: 30px;
}

.av-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  color: #333;
}

.form-group input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.password-container {
  display: flex;
  gap: 10px;
}

.password-container input {
  flex: 1;
}

.show-password {
  padding: 8px 16px;
  background: #004d40;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button {
  width: fit-content;
  padding: 8px 24px;
  background: #004d40;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.submit-button:hover,
.show-password:hover {
  background: #00695c;
}

.chat-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #004d40;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-icon {
  font-size: 20px;
}

/* Focus states */
input:focus {
  outline: none;
  border-color: #004d40;
  box-shadow: 0 0 0 2px rgba(0, 77, 64, 0.1);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .antivirus-container {
    padding: 10px;
  }
  
  .header-tabs {
    flex-wrap: wrap;
  }
  
  .custom-tab {
    margin-left: 0;
  }
}
        `}
      </style>
    </div>
  );
}
