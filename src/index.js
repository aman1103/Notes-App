import React from 'react'
import ReactDom from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import FOF from './FOF'
import Dashboard from './Dashboard'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route path='*'>
                    <FOF />
                </Route>
            </Switch>
        </Router>
    )
}

ReactDom.render(<App />, document.getElementById('root'))