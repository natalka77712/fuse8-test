import React from 'react';
import './App.scss';
import {Switch, Route, Redirect, HashRouter} from "react-router-dom";
import EstateInfo from "./components/estate-info/estate-info";
import Development from "./components/development/development";


const App = () => {

  return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route exact path={'/'} component={Development}/>
            <Route exact path={'/house/:id'} component={EstateInfo}/>
            <Route exact path={'/404'} render={() => <h1 style={{textAlign: 'center', paddingTop: '50px'}}>404: Page not found</h1>}/>
            <Redirect from={'*'} to={'/404'}/>
          </Switch>
        </div>
      </HashRouter>
  )
}

export default App;
