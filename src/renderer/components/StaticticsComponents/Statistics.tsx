// import React, { useState, useEffect } from 'react';

// interface FileDetails {
//   file_hash: string;
//   file_name: string;
//   basic_details: string;
//   binary_signature: string;
//   identified_capabilities: string;
//   file_properties: string;
//   imports: string;
// }

// const Statistics: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('detection');
//   const [fileDetails, setFileDetails] = useState<FileDetails | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const fileId = 1; // Replace with dynamic file ID if needed

//   // Predefined antivirus results
//   const avResults = [
//     { vendor: 'ClamAV', status: 'Infected' },
//     { vendor: 'ESET', status: 'Safe' },
//     { vendor: 'Windows Defender', status: 'Safe' },
//     { vendor: 'TrendMicro', status: 'Infected' },
//     { vendor: 'McAfee', status: 'Infected' },
//   ];

//   // Calculate infections
//   const infections = avResults.filter(
//     (result) => result.status === 'Infected',
//   ).length;

//   // Fetch file details from the server
//   useEffect(() => {
//     const fetchFileDetails = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`http://localhost:5000/file-details/${fileId}`);

//         if (!response.ok) {
//           throw new Error('Failed to fetch file details');
//         }

//         const data: FileDetails = await response.json();
//         setFileDetails(data);
//         setError(null);
//       } catch (error) {
//         console.error('Error fetching file details:', error);
//         setError(error instanceof Error ? error.message : 'An unknown error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFileDetails(); // Call the function to fetch file details
//   }, [fileId]); // The useEffect hook will run when `fileId` changes

//   return (
//     <div className="card">
//       {/* Header */}
//       <div className="header">
//         <div className="score-circle">{infections}</div>
//         <div className="info">
//           <div className={`status ${infections === 0 ? 'safe' : 'infected'}`}>
//             {infections === 0
//               ? 'No security vendors flagged this file as infected'
//               : `${infections} security vendor(s) flagged this file as infected`}
//           </div>
//           {fileDetails && (
//             <>
//               <div className="file-info">Hash: {fileDetails.file_hash}</div>
//               <div className="file-info">Name: {fileDetails.file_name}</div>
//             </>
//           )}
//           <div className="file-info">36.31 KB | a moment ago</div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="tabs">
//         {['detection', 'details'].map((tab) => (
//           <div
//             key={tab}
//             className={`tab ${activeTab === tab ? 'active' : ''}`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab.toUpperCase()}
//           </div>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="tab-contents">
//         {/* Detection Tab */}
//         <div
//           className={`tab-content ${activeTab === 'detection' ? 'active' : ''}`}
//           id="detection"
//         >
//           <div className="vendor-grid">
//             {avResults.map((result, index) => (
//               <div className="vendor-item" key={index}>
//                 <span>{result.vendor}</span>
//                 <span
//                   className={`vendor-status ${
//                     result.status === 'Infected' ? 'infected' : 'safe'
//                   }`}
//                 >
//                   {result.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Details Tab */}
//         <div
//           className={`tab-content ${activeTab === 'details' ? 'active' : ''}`}
//           id="details"
//         >
//           {loading ? (
//             <p>Loading file details...</p>
//           ) : error ? (
//             <p className="error">Error: {error}</p>
//           ) : fileDetails ? (
//             <div className="file-details">
//               <div className="detail-item">
//                 <strong>Basic Details:</strong>
//                 <span>{fileDetails.basic_details}</span>
//               </div>
//               <div className="detail-item">
//                 <strong>Binary Signature:</strong>
//                 <span>{fileDetails.binary_signature}</span>
//               </div>
//               <div className="detail-item">
//                 <strong>Identified Capabilities:</strong>
//                 <span>{fileDetails.identified_capabilities}</span>
//               </div>
//               <div className="detail-item">
//                 <strong>File Properties:</strong>
//                 <span>{fileDetails.file_properties}</span>
//               </div>
//               <div className="detail-item">
//                 <strong>Imports:</strong>
//                 <span>{fileDetails.imports}</span>
//               </div>
//             </div>
//           ) : (
//             <p>No file details available</p>
//           )}
//         </div>

//         {/* Behavior Tab */}
//         <div
//           className={`tab-content ${activeTab === 'behavior' ? 'active' : ''}`}
//           id="behavior"
//         >
//           Behavior content goes here
//         </div>

//         {/* Community Tab */}
//         <div
//           className={`tab-content ${activeTab === 'community' ? 'active' : ''}`}
//           id="community"
//         >
//           Community content goes here
//         </div>
//       </div>

//       <style>{`
//         body {
//           font-family: Montserrat, sans-serif;
//           background-color: #f3f4f6;
//           margin: 0;
//           color: #333;
//         }

//         .card {
//           background-color: white;
//           border-radius: 8px;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//           margin: 0 auto;
//           padding: 20px;
//           height: 80vh;
//           width: 94%;
//           color: #333;
//         }

//         .header {
//           display: flex;
//           gap: 20px;
//           margin-bottom: 20px;
//         }

//         .score-circle {
//           width: 100px;
//           height: 100px;
//           border-radius: 50%;
//           background-color: #e5e7eb;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           font-size: 24px;
//           font-weight: bold;
//           color: #10b981;
//         }

//         .score-circle::before {
//           content: "/ 5";
//           position: absolute;
//           bottom: 10px;
//           font-size: 12px;
//           color: #6b7280;
//         }

//         .info {
//           flex-grow: 1;
//         }

//         .status {
//           background-color: #f9f9f9;
//           padding: 5px 10px;
//           border-radius: 9999px;
//           display: inline-block;
//           font-size: 14px;
//           margin-bottom: 10px;
//         }

//         .status.safe {
//           color: green;
//         }

//         .status.infected {
//           color: red;
//         }

//         .file-info {
//           font-size: 14px;
//           color: #6b7280;
//           margin-bottom: 5px;
//         }

//         .tabs {
//           display: flex;
//           border-bottom: 1px solid #e5e7eb;
//           margin-top: 20px;
//           color: #6b7280;
//         }

//         .tab {
//           padding: 10px 15px;
//           cursor: pointer;
//           border-bottom: 2px solid transparent;
//         }

//         .tab.active {
//           border-bottom-color: #3b82f6;
//           color: #3b82f6;
//         }

//         .tab-content {
//           display: none;
//           animation: fadeIn 0.5s;
//         }

//         .tab-content.active {
//           display: block;
//         }

//         .vendor-grid {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//           margin-top: 20px;
//         }

//         .vendor-item {
//           background-color: #f5f5f5;
//           border-radius: 4px;
//           padding: 10px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           font-size: 16px;
//         }

//         .vendor-status {
//           font-weight: bold;
//         }

//         .vendor-status.infected {
//           color: #f87171; /* Red for Infected */
//         }

//         .vendor-status.safe {
//           color: #10b981; /* Green for Safe */
//         }

//         .file-details {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }

//         .detail-item {
//         margin-top: 10px;
//           display: flex;
//           flex-direction: column;
//           background-color: #f5f5f5;
//           padding: 10px;
//           border-radius: 4px;
//           color:#000
//         }

//         .detail-item strong {
//           margin-bottom: 5px;
//           color: #000;
//         }

//         .detail-item span {
//           color: black;
//         }

//         .error {
//           color: red;
//           font-weight: bold;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Statistics;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
const logo = require('../../../../assets/cii-sheild.png');

interface FileDetails {
  file_hash: string;
  file_name: string;
  basic_details: string;
  binary_signature: string;
  identified_capabilities: string;
  file_properties: string;
  imports: string;
}

const Statistics: React.FC = () => {
  const { fileId } = useParams<{ fileId: string }>();
  const [activeTab, setActiveTab] = useState('detection');
  const [fileDetails, setFileDetails] = useState<FileDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const avResults = [
    { vendor: 'ClamAV', status: 'Infected' },
    { vendor: 'ESET', status: 'Safe' },
    { vendor: 'Windows Defender', status: 'Safe' },
    { vendor: 'TrendMicro', status: 'Infected' },
    { vendor: 'McAfee', status: 'Infected' },
  ];

  const infections = avResults.filter(
    (result) => result.status === 'Infected',
  ).length;

  useEffect(() => {
    const fetchFileDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/file-details/${fileId}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch file details');
        }
        const data: FileDetails = await response.json();
        setFileDetails(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching file details:', error);
        setError(
          error instanceof Error ? error.message : 'An unknown error occurred',
        );
      } finally {
        setLoading(false);
      }
    };

    if (fileId) fetchFileDetails();
  }, [fileId]);


// Assume you have a logo image
const logoPNG = require('../../../../assets/cii-sheild.png');

const exportToPDF = (
  fileDetails: any,
  avResults: any[] = [], // Ensure avResults defaults to an empty array
  infections: number = 0 // Default to 0 infections if undefined
) => {
  try {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    let yOffset = 20;

    // Set font
    doc.setFont("helvetica");

    // Add CII Shield Watermark
    doc.setTextColor(230, 230, 230);
    doc.setFontSize(60);
    doc.text("CII SHIELD", pageWidth / 2, pageHeight / 2, {
      align: "center",
      angle: 45,
    });
    doc.setTextColor(0);

    // Add logo
    doc.addImage(logoPNG, 'PNG', 10, 10, 30, 30);

    // Header
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Antivirus Scan Report", pageWidth / 2, yOffset, { align: "center" });
    yOffset += 15;

    // File Details Table
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    const fileDetailsData = [
      ["File Name", fileDetails?.file_name || "N/A"],
      ["File Hash", fileDetails?.file_hash || "N/A"],
      ["Infections", infections.toString()],
    ];
    doc.autoTable({
      startY: yOffset,
      head: [["Property", "Value"]],
      body: fileDetailsData,
      theme: "grid",
      headStyles: { fillColor: [41, 128, 185], textColor: 0 },
      styles: { fontSize: 10 },
      columnStyles: { 0: { cellWidth: 40 } },
    });
    yOffset = (doc as any).lastAutoTable.finalY + 10;

    // Detection Results Table
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Detection Results", 10, yOffset);
    yOffset += 10;

    // Safely process avResults
    const detectionData = (avResults || []).map((result) => [
      result.vendor || "Unknown",
      result.status || "Unknown",
    ]);
    if (detectionData.length === 0) {
      detectionData.push(["No Data", "No Detection Results"]);
    }

    doc.autoTable({
      startY: yOffset,
      head: [["Vendor", "Status"]],
      body: detectionData,
      theme: "striped",
      headStyles: { fillColor: [41, 128, 185], textColor: 0 },
      styles: { fontSize: 10 },
    });
    yOffset = (doc as any).lastAutoTable.finalY + 10;

    // File Details (Additional Information)
    if (fileDetails) {
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("File Details", 10, yOffset);
      yOffset += 10;

      const details = [
        { label: "Basic Details", value: fileDetails.basic_details },
        { label: "Binary Signature", value: fileDetails.binary_signature },
        { label: "Identified Capabilities", value: fileDetails.identified_capabilities },
        { label: "File Properties", value: fileDetails.file_properties },
        { label: "Imports", value: fileDetails.imports },
      ];

      const fileDetailsTableData = details.map((detail) => [
        detail.label,
        detail.value || "N/A",
      ]);
      doc.autoTable({
        startY: yOffset,
        head: [["Property", "Value"]],
        body: fileDetailsTableData,
        theme: "grid",
        headStyles: { fillColor: [41, 128, 185], textColor: 0 },
        styles: { fontSize: 10, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 40 }, 1: { cellWidth: "auto" } },
        didDrawPage: (data) => {
          // Footer with page numbers
          doc.setFontSize(10);
          doc.text(
            "Page " + doc.internal.getNumberOfPages(),
            data.settings.margin.left,
            pageHeight - 10
          );
        },
      });
    }

    // Save PDF
    doc.save("CII-Shield-Scan-Report.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};



  return (
    <div className="card">
      <div className="header">
        <div className="score-circle">{infections}</div>
        <div className="info">
          <div className={`status ${infections === 0 ? 'safe' : 'infected'}`}>
            {infections === 0
              ? 'No security vendors flagged this file as infected'
              : `${infections} security vendor(s) flagged this file as infected`}
          </div>
          {fileDetails && (
            <>
              <div className="file-info">Hash: {fileDetails.file_hash}</div>
              <div className="file-info">Name: {fileDetails.file_name}</div>
            </>
          )}
          <div className="file-info">36.31 KB | a moment ago</div>
        </div>
      </div>

      {/* Export to PDF Button */}
      <div className="export-button saket">
        <button className="export-btn" onClick={exportToPDF}>
          Export to PDF
        </button>
      </div>

      <div className="tabs">
        {['detection', 'details'].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>

      <div className="tab-contents">
        <div
          className={`tab-content ${activeTab === 'detection' ? 'active' : ''}`}
          id="detection"
        >
          <div className="vendor-grid">
            {avResults.map((result, index) => (
              <div className="vendor-item" key={index}>
                <span>{result.vendor}</span>
                <span
                  className={`vendor-status ${result.status === 'Infected' ? 'infected' : 'safe'}`}
                >
                  {result.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`tab-content ${activeTab === 'details' ? 'active' : ''}`}
          id="details"
        >
          {loading ? (
            <p>Loading file details...</p>
          ) : error ? (
            <p className="error">Error: {error}</p>
          ) : fileDetails ? (
            <div className="file-details">
              <div className="detail-item">
                <strong>Basic Details:</strong>
                <span>{fileDetails.basic_details}</span>
              </div>
              <div className="detail-item">
                <strong>Binary Signature:</strong>
                <span>{fileDetails.binary_signature}</span>
              </div>
              <div className="detail-item">
                <strong>Identified Capabilities:</strong>
                <span>{fileDetails.identified_capabilities}</span>
              </div>
              <div className="detail-item">
                <strong>File Properties:</strong>
                <span>{fileDetails.file_properties}</span>
              </div>
              <div className="detail-item">
                <strong>Imports:</strong>
                <span>{fileDetails.imports}</span>
              </div>
            </div>
          ) : (
            <p>No file details available</p>
          )}
        </div>
      </div>
      <style>{`
        body {
          font-family: Montserrat, sans-serif;
          background-color: #f3f4f6;
          margin: 0;
          color: #333;
        }

        .card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          padding: 20px;
          height: 80vh;
          width: 94%;
          color: #333;
        }

        .header {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .score-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          font-size: 24px;
          font-weight: bold;
          color: #10b981;
        }

        .score-circle::before {
          content: "/ 5";
          position: absolute;
          bottom: 10px;
          font-size: 12px;
          color: #6b7280;
        }

        .info {
          flex-grow: 1;
        }

        .export-btn{
        color: green;
        width: max-content;
        padding: 7px;
        border-radius: 8px;
        font-size: 13px;
        font-family: Montserrat, sans-serif;
          }

        .status {
          background-color: #f9f9f9;
          padding: 5px 10px;
          border-radius: 9999px;
          display: inline-block;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .status.safe {
          color: green;
        }

        .status.infected {
          color: red;
        }

        .file-info {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 5px;
        }

        .tabs {
          display: flex;
          border-bottom: 1px solid #e5e7eb;
          margin-top: 20px;
          color: #6b7280;
        }

        .tab {
          padding: 10px 15px;
          cursor: pointer;
          border-bottom: 2px solid transparent;
        }

        .tab.active {
          border-bottom-color: #3b82f6;
          color: #3b82f6;
        }

        .tab-content {
          display: none;
          animation: fadeIn 0.5s;
        }

        .tab-content.active {
          display: block;
        }

        .vendor-grid {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 20px;
        }

        .vendor-item {
          background-color: #f5f5f5;
          border-radius: 4px;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
        }

        .vendor-status {
          font-weight: bold;
        }

        .vendor-status.infected {
          color: #f87171; /* Red for Infected */
        }

        .vendor-status.safe {
          color: #10b981; /* Green for Safe */
        }

        .file-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .detail-item {
        margin-top: 10px;
          display: flex;
          flex-direction: column;
          background-color: #f5f5f5;
          padding: 10px;
          border-radius: 4px;
          color:#000
        }

        .detail-item strong {
          margin-bottom: 5px;
          color: #000;
        }

        .detail-item span {
          color: black;
        }

        .error {
          color: red;
          font-weight: bold;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Statistics;
