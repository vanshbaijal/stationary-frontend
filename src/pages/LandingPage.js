import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './LandingPage.css'

export default function LandingPage() {

    const navigate = useNavigate();

    return (
        <div className="Landing-container">
            <h1>DocUp</h1>
            <div className="button-container">
                <button className="landing-btn" onClick={() => navigate('/signin')}>User</button>
                <button className="landing-btn" onClick={() => navigate('/admin')}>Admin</button>
            </div>
        </div>
    )
}