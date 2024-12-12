import React, { useEffect, useState } from "react";
import axios from "axios";

interface FileScanData {
  id: number;
  result: string;
}

interface AntivirusData {
  id: number;
  avname: string;
}

const Statistics: React.FC = () => {
  const [totalFilesScanned, setTotalFilesScanned] = useState(0);
  const [totalThreats, setTotalThreats] = useState(0);
  const [avSupportCount, setAvSupportCount] = useState(0);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const fileResponse = await axios.get("http://127.0.0.1:5000/target/latest");
        const files: FileScanData[] = Object.values(fileResponse.data);
        setTotalFilesScanned(files[0]?.length)
        setTotalThreats(files.filter((file) => file.result !== "S").length);

        // Fetch AV support count
        const avResponse = await axios.get("http://127.0.0.1:5000/antivirus/fetch/all");
        setAvSupportCount(avResponse.data.total_records)
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div>
      <div className="quick-heal-stats">
        <h3>VitalCore has saved you so far :</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">{totalFilesScanned}</div>
            <div className="stat-label">Total Files Scanned</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{totalThreats}</div>
            <div className="stat-label">Total Threats</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{avSupportCount}</div>
            <div className="stat-label">AV Support</div>
          </div>
        </div>
      </div>

      <style>{`
        .quick-heal-stats {
          border-top: 1px solid #E5E7EB;
          padding: 16px;
          background-color: white;
          border-radius: 10px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 16px;
        }
        .stat-item {
          border: 1px solid #E5E7EB;
          padding: 8px;
          border-radius: 10px;
          background-color: white;
        }
        .stat-value {
          font-size: 24px;
          font-weight: bold;
        }
       .stat-label {
         font-size: 14px;
          color: #6B7280;
       }
      `}</style>
    </div>
  );
};

export default Statistics;
