import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <React.Fragment>
            <h1>Login Page</h1>
            <form>
                <label htmlFor='email'>Email</label>
                <br />
                <input
                    type='text'
                    value={email}
                    id='email'
                    name='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label htmlFor='password'>Password</label>
                <br />
                <input
                    type='password'
                    value={password}
                    id='password'
                    name='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <button
                    type='submit'
                    onClick={handleSubmit}
                > Submit </button>
            </form>
        </React.Fragment>
    )
}