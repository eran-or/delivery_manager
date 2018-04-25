import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import Orders from '../components/Orders'

const AppRouter = (props) => (
    <Router basename="/delivery_manager/">
        <div>
          <Navbar />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/orders" component={Orders} exact={true} />
            </Switch>
        </div>
    </Router >
);

export default AppRouter