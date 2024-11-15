"use client"

import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {ChevronLeft, Laptop, HardDrive, Shield, AlertTriangle, Clock, CheckCircle2, XCircle } from 'lucide-react'
import '../styles/FullSystemScan.css'

interface VendorResult {
  name: string
  status: "undetected" | "detected"
  timestamp: number
}

interface ScanResult {
  overallProgress: number
  startTime: number
  vendorResults: VendorResult[]
}

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <div className={`card ${className || ''}`}>{children}</div>
)

const CardHeader: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="card-header">{children}</div>
)

const CardTitle: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <h2 className={`card-title ${className || ''}`}>{children}</h2>
)

const CardContent: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <div className={`card-content ${className || ''}`}>{children}</div>
)

const Badge: React.FC<React.PropsWithChildren<{ variant: string; className?: string }>> = ({ children, variant, className }) => (
  <span className={`badge ${variant} ${className || ''}`}>{children}</span>
)

const Progress: React.FC<{ value: number; className?: string }> = ({ value, className }) => (
  <div className={`progress ${className || ''}`}>
    <div className="progress-bar" style={{ width: `${value}%` }}></div>
  </div>
)

const CommunityScore: React.FC<{ detectedCount: number; totalCount: number }> = ({ detectedCount, totalCount }) => (
  <div className="community-score">
    <svg viewBox="0 0 100 100" className="score-circle">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="10" />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#10b981"
        strokeWidth="10"
        strokeDasharray={`${(detectedCount / totalCount) * 283} 283`}
        transform="rotate(-90 50 50)"
      />
      <text x="50" y="50" textAnchor="middle" dy="0.3em" className="score-text">
        {detectedCount}
      </text>
    </svg>
    <div className="score-label">
      <span className="score-value">{detectedCount}/{totalCount}</span>
      <span>Community Score</span>
    </div>
  </div>
)

export default function FullSystemScan() {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchScanResults = async () => {
      const mockResult: ScanResult = {
        overallProgress: 65,
        startTime: Date.now() - 1000 * 60 * 15,
        vendorResults: [
          { name: "Acronis", status: "undetected", timestamp: Date.now() },
          { name: "AhnLab-V3", status: "undetected", timestamp: Date.now() },
          { name: "ALYac", status: "detected", timestamp: Date.now() },
          { name: "Arcabit", status: "undetected", timestamp: Date.now() },
          { name: "Avast", status: "detected", timestamp: Date.now() },
          { name: "AVG", status: "detected", timestamp: Date.now() },
          { name: "Avira", status: "undetected", timestamp: Date.now() },
          { name: "Baidu", status: "undetected", timestamp: Date.now() },
          { name: "BitDefender", status: "undetected", timestamp: Date.now() },
          { name: "ClamAV", status: "undetected", timestamp: Date.now() },
          { name: "Comodo", status: "undetected", timestamp: Date.now() },
          { name: "ESET-NOD32", status: "undetected", timestamp: Date.now() },
        ]
      }
      setScanResult(mockResult)
    }

    fetchScanResults()
  }, [])

  if (!scanResult) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  const elapsedTime = Math.floor((Date.now() - scanResult.startTime) / 1000)
  const minutes = Math.floor(elapsedTime / 60)
  const seconds = elapsedTime % 60

  const detectedCount = scanResult.vendorResults.filter(v => v.status === "detected").length
  const totalCount = scanResult.vendorResults.length

  return (
    <div className="container">
      <div className="card-container">
        <Card className="main-card">
          <CardHeader>
            <CardTitle className="card-title">
              <Shield className="icon" />
              Full System Scan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="card-content">
              <div className="flex-between">
                <div className="flex-center">
                  <Clock className="icon-small muted" />
                  <span className="text-small muted">Elapsed Time:</span>
                  <span className="text-small bold">{`${minutes}m ${seconds}s`}</span>
                </div>
                <CommunityScore detectedCount={detectedCount} totalCount={totalCount} />
              </div>
              <Progress value={scanResult.overallProgress} className="progress-bar" />
              <div className="text-small muted text-right">{scanResult.overallProgress}% Complete</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="card-content">
            <div className="summary-list">
              <div className="summary-item">
                <div className="flex-center">
                  <HardDrive className="icon-small" />
                  <span className="bold">Total Items Scanned</span>
                </div>
                <span>123,456</span>
              </div>
              
              <div className="summary-item">
                <div className="flex-center">
                  <AlertTriangle className="icon-small" />
                  <span className="bold">Threats Found</span>
                </div>
                <Badge variant="destructive">{detectedCount}</Badge>
              </div>
              
              <div className="summary-item">
                <div className="flex-center">
                  <Laptop className="icon-small" />
                  <span className="bold">Scan Engine Version</span>
                </div>
                <span>2.0.1</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="card-subtitle">
            Security Vendor Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="scroll-area">
            <div className="vendor-list">
              {scanResult.vendorResults.map((vendor) => (
                <div key={vendor.name} className="vendor-item">
                  <div className="flex-center">
                    {vendor.status === "undetected" ? (
                      <CheckCircle2 className="icon-small success" />
                    ) : (
                      <XCircle className="icon-small danger" />
                    )}
                    <span className="bold">{vendor.name}</span>
                  </div>
                  <Badge 
                    variant={vendor.status === "undetected" ? "success" : "destructive"}
                    className="capitalize"
                  >
                    {vendor.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

     <div style={{display:"flex",justifyContent:"end"}}>
     <button style={{fontFamily:"Montserrat",backgroundColor:'#f9f9f9', padding:"6px", fontSize:"14px",color:"black",border:"none",borderRadius:"4px",width:"70px", display:"flex",alignItems:"center",cursor:"pointer"}} onClick={() => navigate('/test')}><ChevronLeft/>Back</button>
     </div>
    </div>
  )
}