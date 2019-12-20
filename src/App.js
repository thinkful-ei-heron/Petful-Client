import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav  from './TopNav/TopNav';
import Home from './HomePage/HomePage';
import Adoption from './Adoption/Adoption';

class App extends Component {

  render() {
    return (
      <Router>
          <div className='App'>
          <Nav />
          <main>
            <Switch>
                <Route path={'/adopt'} component={ () => <Adoption/>}/>
                <Route path={'/'} component={ () => <Home/>}/>
            </Switch>
          </main>
        </div> 
      </Router>
    )
  }
}
export default App;
