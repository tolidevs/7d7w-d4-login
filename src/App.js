import React from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
