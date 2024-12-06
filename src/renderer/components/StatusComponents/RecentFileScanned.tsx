import React from "react";

const RecentFileScanned = () => {
  const transactions = [
    { id: 1, name: "document.txt", date: "Jul 12th 2024", status: "Safe", icon: "📄" },
    { id: 2, name: "game.exe", date: "Jul 12th 2024", status: "Infected", icon: "🎮" },
    { id: 3, name: "photo.png", date: "Jul 12th 2024", status: "Safe", icon: "🖼️" },
    { id: 4, name: "video.mp4", date: "Jul 12th 2024", status: "Safe", icon: "🎥" },
    { id: 5, name: "archive.zip", date: "Jul 12th 2024", status: "Infected", icon: "📦" },
    { id: 6, name: "presentation.ppt", date: "Jul 12th 2024", status: "Safe", icon: "📊" },
  ];

  return (
    <div className="transaction-card">
      <h2>Recent File Scanned</h2>
      {transactions.map((transaction) => (
        <div className="transaction-item" key={transaction.id}>
          <div className="transaction-info">
            <span className="transaction-icon">{transaction.icon}</span>
            <div className="transaction-details">
              <span>{transaction.name}</span>
              <small>{transaction.date}</small>
            </div>
          </div>
          <div
            className={`transaction-status ${
              transaction.status === "Completed" ? "status-completed" : "status-pending"
            }`}
          >
            {transaction.status}
          </div>
        </div>
      ))}
<style>{`
*{
    font-family: Montserrat, sans-serif;
    overflow-y: hidden;
}
.transaction-card {
  background: #fff;
  border-radius: 12px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 360px;
  padding: 16px;
  font-family: Arial, sans-serif;
  margin-bottom: 10px;
}

.transaction-card h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eaeaea;
}

.transaction-item:last-child {
  border-bottom: none;
}

.transaction-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.transaction-icon {
  font-size: 24px;
}

.transaction-details {
  display: flex;
  flex-direction: column;
}

.transaction-details span {
  font-size: 14px;
  color: #333;
}

.transaction-details small {
  font-size: 12px;
  color: #888;
}

.transaction-status {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 12px;
}

.status-completed {
  color: #fff;
  background-color: #4caf50;
}

.status-pending {
  color: #fff;
  background-color: #ff9800;
}
`}</style>
    </div>
  );
};

export default RecentFileScanned;
