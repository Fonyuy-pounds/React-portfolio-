import React from 'react';
import './FloatingElements.css';

const FloatingElements = () => {
    return (
        <>
            {/* Floating background shapes */}
            <div
                className="floating-element floating-circle"
                style={{
                    top: '20%',
                    left: '10%',
                    animationDuration: '25s',
                    animationDelay: '0s'
                }}
            />
            <div
                className="floating-element floating-square"
                style={{
                    top: '60%',
                    left: '80%',
                    animationDuration: '30s',
                    animationDelay: '5s'
                }}
            />
            <div
                className="floating-element floating-triangle"
                style={{
                    top: '80%',
                    left: '30%',
                    animationDuration: '20s',
                    animationDelay: '10s',
                    animationDirection: 'reverse'
                }}
            />

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="particle"
                    style={{
                        width: `${Math.random() * 10 + 5}px`,
                        height: `${Math.random() * 10 + 5}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 20 + 10}s`,
                        animationDelay: `${Math.random() * 10}s`,
                        opacity: Math.random() * 0.3 + 0.1,
                        backgroundColor: `var(--primary-color)`
                    }}
                />
            ))}
        </>
    );
};

export default FloatingElements;