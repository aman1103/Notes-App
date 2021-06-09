import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    return (
        <React.Fragment>
            <h1> Regsitration Page</h1>
            <form>
                <label for='username'>Username</label>
                <br />
                <input
                    type='text'
                    value={username}
                    id='username'
                    name='username'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    size='25'
                />
                {username.length > 20 && <span> Name Character Limit Exceeded</span>}
                <br />
                <label for='email'>Email</label>
                <br />
                <input
                    type='text'
                    value={email}
                    id='email'
                    name='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    size='30'
                />
                <br />
                <label for='password'>Password</label>
                <br />
                <input
                    type='password'
                    value={password}
                    id='password'
                    name='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
        </React.Fragment>
    )
}