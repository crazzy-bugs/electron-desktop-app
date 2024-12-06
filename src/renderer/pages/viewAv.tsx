import React, { useEffect, useState } from 'react';
import ApiClient from '../../api/client';
import '../styles/view-av.css';

interface Antivirus {
  id: number;
  name: string;
  status: string;
  ip_address: string;
  username: string;
  password: string;
  av_exe_command: string;
  av_update_command: string;
  custom_field: string;
}

const ViewAv: React.FC = () => {
  const [antiviruses, setAntiviruses] = useState<Antivirus[]>([]);
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>(
    {},
  );

  const fetchAntiviruses = async () => {
    try {
      let result = await ApiClient.getAntiviruses();
      setAntiviruses(result?.records);
      console.log('Antiviruses:', result?.records);
    } catch (error) {
      console.error('Error fetching antiviruses:', error);
    }
  };

  useEffect(() => {
    fetchAntiviruses();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      let result = await ApiClient.deleteAntivirus(id);
      console.log('Antivirus deleted:', result);
      fetchAntiviruses();
    } catch (error) {
      console.error('Error deleting antivirus:', error);
    }
  };

  const togglePasswordVisibility = (name: string) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div className="antivirus-container">
      {antiviruses.map((av) => (
        <div key={av.name} className="antivirus-card">
          <button
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={() => {
              handleDelete(av.id);
            }}
          >
            Delete
          </button>
          <h2>{av.name}</h2>
          <p>Status: Active</p>
          <p>IP: {av.ip_address}</p>
          <p>Username: {av.username}</p>
          <p>
            Password: {showPassword[av.name] ? av.password : '******'}
            <button onClick={() => togglePasswordVisibility(av.name)}>
              {showPassword[av.name] ? 'Hide' : 'Show'}
            </button>
          </p>
          <p>Exe Command: {av.av_exe_command}</p>
          <p>Update Command: {av.av_update_command}</p>
          <p>Custom Field: {av.custom_field}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewAv;
