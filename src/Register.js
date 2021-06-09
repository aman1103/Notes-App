import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <React.Fragment>
            <h1> Regsitration Page</h1>
            <form>
                <label htmlFor='username'>Username</label>
                <br />
                <input
                    type='text'
                    spellCheck='false'
                    value={username}
                    id='username'
                    name='username'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    size='25'
                />
                {username.length > 20 ? <span style={{ color: 'red' }}> Name Character Limit Exceeded</span>
                    : <span> Character Limit is 20</span>}
                <br />
                <label htmlFor='email'>Email</label>
                <br />
                <input
                    spellCheck='false'
                    type='text'
                    value={email}
                    id='email'
                    name='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    size='30'
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