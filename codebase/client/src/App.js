import React from 'react'
import { Router, Switch, Route } from "react-router-dom";

import Login from './components/login/Login';
import Home from './components/home/Home';
import ErrorBoundary from './helper/Error';
import ButtonAppBar from './components/navbar/Navbar';
import checkSession from './helper/checkSession';
import history from './helper/history';
import SignUp from './components/signup/Signup';
import { MyComponent } from './components/article/Article';
export default function App() {
  let session = checkSession()
  
  return (
    <div>
        <Router history={history}>
          {/* <Navbar></Navbar> */}
          <ButtonAppBar/>
          <ErrorBoundary>
            <Switch>
              { session[1] ? <Route exact path="/home" component={Home} /> : <Route   exact path="/login"     component={Login}/> }
              { session[1] ? <Route exact path="/home" component={Home} /> : <Route exact path="/signup" component={SignUp} /> }

                
              <Route   exact path="*"          component={SignUp} />
                
            </Switch>
          </ErrorBoundary>
        </Router>

    </div>
  )
}
