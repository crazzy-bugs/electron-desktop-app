import React, { useState, useEffect } from 'react';

interface LoaderProps {
    estimatedTime: number; // in seconds
    children: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ estimatedTime, children }) => {
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setLoading(false);
                    return 100;
                }
                return prev + (100 / estimatedTime);
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [estimatedTime]);

    if (!loading) {
        return <>{children}</>;
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ marginBottom: '10px' }}>Loading... {Math.round(progress)}%</div>
            <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
                <div
                    style={{
                        width: `${progress}%`,
                        height: '10px',
                        backgroundColor: '#76c7c0',
                        borderRadius: '5px',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Loader;