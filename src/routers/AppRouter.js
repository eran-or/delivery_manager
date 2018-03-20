import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'

const AppRouter = (props) => (
    <Router basename="/">
        <div>
          <Navbar />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
            </Switch>
        </div>
    </Router >
);

export default AppRouter