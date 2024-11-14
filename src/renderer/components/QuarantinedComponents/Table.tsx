import React, { useState } from 'react';
import {
    PlusCircle,
    RotateCcw,
    Trash2,
    Circle,
    CheckCircle,
} from 'lucide-react';

export default function QuarantineFilesTable() {
    const [selectedFiles, setSelectedFiles] = useState<number[]>([]);
    
    const [quarantinedFiles, setQuarantinedFiles] = useState([
        {
            id: 1,
            name: 'crash-8621...',
            location: 'C:\\Users\\ADMIN\\minicon...',
            status: 'Backup',
            quarantinedOn: '29-10-2024 21:22:48',
            virusName: 'Exp.TIFF.CVE-2010-0188',
        },
        {
            id: 2,
            name: 'crash-4085...',
            location: 'C:\\Users\\ADMIN\\minicon...',
            status: 'Backup',
            quarantinedOn: '29-10-2024 21:22:50',
            virusName: 'Exp.TIFF.CVE-2010-0188',
        },
        {
            id: 3,
            name: 'crash-9082...',
            location: 'C:\\Users\\ADMIN\\minicon...',
            status: 'Backup',
            quarantinedOn: '29-10-2024 21:22:55',
            virusName: 'Exp.TIFF.CVE-2010-0188',
        },
        {
            id: 4,
            name: 'crash-9082...',
            location: 'C:\\Users\\ADMIN\\minicon...',
            status: 'Backup',
            quarantinedOn: '29-10-2024 21:22:55',
            virusName: 'Exp.TIFF.CVE-2010-0188',
        },
        {
            id: 5,
            name: 'crash-9082...',
            location: 'C:\\Users\\ADMIN\\minicon...',
            status: 'Backup',
            quarantinedOn: '29-10-2024 21:22:55',
            virusName: 'Exp.TIFF.CVE-2010-0188',
        },
        {
            id: 6,
            name: 'crash-9082...',
            location: 'C:\\Users\\ADMIN\\minicon...',
            status: 'Backup',
            quarantinedOn: '29-10-2024 21:22:55',
            virusName: 'Exp.TIFF.CVE-2010-0188',
        },
    ]);

    const handleFileSelect = (fileId: number): void => {
        setSelectedFiles((prevSelectedFiles) =>
            prevSelectedFiles.includes(fileId)
                ? prevSelectedFiles.filter((id) => id !== fileId)
                : [...prevSelectedFiles, fileId]
        );
    };

    const handleAddFile = (): void => {
        const newFile = {
            id: Date.now(), 
            name: 'new-crash-file...',
            location: 'C:\\Users\\ADMIN\\newfile...',
            status: 'Backup',
            quarantinedOn: new Date().toLocaleString(),
            virusName: 'Exp.TIFF.CVE-2010-0190',
        };
        setQuarantinedFiles((prevFiles) => [...prevFiles, newFile]);
    };

    const handleRemoveFiles = (): void => {
        setQuarantinedFiles((prevFiles) =>
            prevFiles.filter((file) => !selectedFiles.includes(file.id))
        );
        setSelectedFiles([]);
    };

    return (
        <div className="quarantine-files" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
            <h1>Quarantined Files</h1>
            <p>All malicious files are quarantined here for system security.</p>
            <div className="file-actions">
                <span>List of quarantined files.</span>
                <button className="action-button add" onClick={handleAddFile}>
                    <PlusCircle size={16} /> Add
                </button>
                <button className="action-button restore">
                    <RotateCcw size={16} /> Restore
                </button>
                <button className="action-button remove" onClick={handleRemoveFiles}>
                    <Trash2 size={16} /> Remove
                </button>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Quarantined On</th>
                            <th>Virus Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quarantinedFiles.map((file) => (
                            <tr
                                key={file.id}
                                onClick={() => handleFileSelect(file.id)}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: selectedFiles.includes(file.id) ? '#e3f2fd' : 'transparent',
                                }}
                            >
                                <td className='filename'>
                                    {selectedFiles.includes(file.id) ? (
                                        <CheckCircle size={16}/>
                                    ) : (
                                        <Circle size={16} />
                                    )}
                                    {file.name}
                                </td>
                                <td className="location" title={file.location}>
                                    {file.location.length > 20 ? `${file.location.substring(0, 20)}...` : file.location}
                                </td>
                                <td>{file.status}</td>
                                <td>{file.quarantinedOn}</td>
                                <td>{file.virusName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <style>{`
        .quarantine-files {
          font-family: 'Montserrat', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f0f0;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          font-size: 14px;
          color: #666;
          margin-bottom: 20px;
        }

        .file-actions {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .file-actions span {
          font-size: 14px;
          margin-right: 20px;
        }

        .action-button {
          display: flex;
          align-items: center;
          padding: 5px 10px;
          font-size: 14px;
          border: none;
          background-color: #fff;
          cursor: pointer;
          margin-right: 10px;
        }

        .action-button svg {
          margin-right: 5px;
        }

        .add {
          color: #4caf50;
        }

        .restore {
          color: #2196f3;
        }

        .remove {
          color: #f44336;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background-color: #fff;
        }

        th, td {
          text-align: left;
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #f2f2f2;
          font-weight: bold;
        }

        tr:hover {
          background-color: #f5f5f5;
        }

        .selected {
          color: #f44336;
        }

        .table-container {
          max-height: 350px; 
          overflow-y: auto;
        }

        thead tr {
          position: sticky;
          top: 0;
          background-color: #f2f2f2;
          z-index: 1;
        }

        .location,{
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }
        .filename{
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }
      `}</style>
        </div>
    );
}
