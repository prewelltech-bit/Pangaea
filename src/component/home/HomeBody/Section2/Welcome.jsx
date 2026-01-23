import React from 'react'
import "./Welcome.css";
const Welcome = () => {
    return (
        <>
            <section className="welcome-section">
                <div className="welcome-overlay">
                    <div className="welcome-card animate-welcome-card">
                    <h1 className="welcome-h1">Find our events</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome