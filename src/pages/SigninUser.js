import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './SigninUser.css'

export default function SigninUser() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const data = await res.json();

            console.log(data);

            if (res.status == 400 || !data) {
                window.alert(data.error);
            } else {
                window.alert(data.message);
                console.log(data.uuid);
                navigate("/form")
            }
        } catch (err) {
            window.alert(err)
        }
    }

    return (
        <div className="signin-container">
            <div className="inputs-section">
                <h2>Sign in to DocUp</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" className="signin-inputs" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <input type="password" className="signin-inputs" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    <div className="signin-inputs-btn-container">
                        <button type="submit" className="signin-inputs-btn">Sign in</button>
                    </div>
                </form>
                <h3>Don't have an account</h3>
                <button type="submit" className="landing-signin-btn" onClick={() => { navigate("/signup") }}>Sign up</button>
            </div>
        </div>
    )
}



