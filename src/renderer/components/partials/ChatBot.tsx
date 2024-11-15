import React, { useState } from 'react';
import '../../styles/ChatBot.css'

interface Message {
  sender: 'user' | 'bot';
  content: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', content: 'Welcome! How can I assist you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessages: Message[] = [...messages, { sender: 'user', content: inputValue }];
      setMessages(newMessages);
      setInputValue('');

      setTimeout(() => {
        const botResponse: Message = {
          sender: 'bot',
          content: 'Hello, this is Gini - your AI assistant',
        };
        setMessages([...newMessages, botResponse]);
      }, 1000); // Simulate response delay
    }
  };

  return (
    <>
      <div className={`chatbot-overlay ${isOpen ? 'expand' : ''}`} onClick={handleClose}></div>
      <div className="chatbot-button-container">
        <div className="chatbot-button" onClick={handleButtonClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5v15.793a.5.5 0 0 0 .854.353l3.853-3.853A1 1 0 0 1 8.414 17H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 12c-.8.622-1.85 1-3 1s-2.2-.378-3-1m0-3.98V8m6 .02V8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
      {isOpen && (
        <div className="chat-modal">
          <div className="chat-header">
            <h3>Gini - AI Assistant</h3>
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div className="chat-content">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <p>{msg.content}</p>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your query here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
