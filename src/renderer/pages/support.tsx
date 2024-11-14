import React from 'react';
import '../styles/support.css';

const Support = () => {
  return (
    <div className="support-container">
      <div className="content">
        <h1>Welcome to CII Shield Support</h1>
        <p className="intro">
          <strong>CII Shield</strong> is an innovative Offline Parallel AntiVirus Pipeline designed to protect CII (Critical Information Infrastructure) entities from various cyber threats. Our system leverages multiple renowned antivirus solutions, working in parallel, to ensure your system stays protected from the latest threats while maintaining a robust security posture.
        </p>

        <section className="how-it-works">
          <h2>How CII Shield Works</h2>
          <p>
            CII Shield uses a multi-layered security approach by integrating several powerful antivirus engines into a parallel scanning pipeline. This not only enhances the accuracy of threat detection but also creates a fail-safe system that mitigates the risk of missing any potential security issues.
          </p>
          <ul>
            <li>
              <strong>Parallel Scanning:</strong> By running multiple antivirus engines in parallel, we ensure a higher detection rate of malware, ransomware, and other malicious software, providing a comprehensive security scan without overloading your system.
            </li>
            <li>
              <strong>Offline Protection:</strong> CII Shield operates in an offline environment, ensuring that even in restricted or isolated networks, your systems remain protected from external threats while maintaining full functionality.
            </li>
            <li>
              <strong>Adaptive Detection:</strong> Our system continuously adapts to new threats and updates itself to recognize new attack vectors, keeping your infrastructure ahead of evolving cyber threats.
            </li>
          </ul>
        </section>

        <section className="best-practices">
          <h2>Best Practices for Using CII Shield</h2>
          <p>To get the most out of your CII Shield system, follow these recommended best practices:</p>
          <ul>
            <li><strong>Regular System Updates:</strong> Always ensure your CII Shield system and antivirus engines are up to date to benefit from the latest threat definitions and detection mechanisms.</li>
            <li><strong>Isolated Environment:</strong> Use the system in an isolated environment (air-gapped) where possible to reduce the risk of external access to critical systems.</li>
            <li><strong>Routine Scans:</strong> Schedule regular scans to ensure ongoing protection against emerging threats, especially after major software updates or new file transfers.</li>
            <li><strong>Limit Internet Access:</strong> For optimal security, limit or control the internet access of the system to prevent exposure to external threats.</li>
            <li><strong>Backup Critical Data:</strong> Always keep secure backups of important data, and ensure that CII Shield scans the backup files for any hidden threats.</li>
          </ul>
        </section>

        <section className="prevent-cyber-attacks">
          <h2>How to Prevent Cyber Attacks</h2>
          <p>Follow these important instructions to safeguard your systems and prevent cyber attacks:</p>
          <ul>
            <li><strong>Stay Vigilant:</strong> Always be cautious of email attachments, links, and unknown files. Use caution when downloading files or interacting with email links, even if they appear legitimate.</li>
            <li><strong>Use Strong Authentication:</strong> Implement strong password policies and enable multi-factor authentication (MFA) wherever possible to prevent unauthorized access.</li>
            <li><strong>Monitor Network Traffic:</strong> Regularly monitor your network for unusual activity that might indicate an ongoing attack or breach.</li>
            <li><strong>Use Firewalls:</strong> Ensure that firewalls are configured properly to protect your network from unwanted inbound or outbound connections.</li>
            <li><strong>Educate Users:</strong> Train users and employees on recognizing phishing attempts, suspicious activities, and cybersecurity best practices to reduce human error and improve overall security.</li>
          </ul>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <h3>1. How does CII Shield handle false positives?</h3>
          <p>
            CII Shield uses multiple antivirus engines, each with its own detection mechanisms, to cross-check and validate potential threats. If a false positive is detected, the system will automatically flag the result for manual review, ensuring no critical processes are disrupted.
          </p>

          <h3>2. Can CII Shield work without internet access?</h3>
          <p>
            Yes, CII Shield is specifically designed to function offline. The system can still perform thorough security scans without an active internet connection.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Support;
