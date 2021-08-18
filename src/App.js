import React from 'react';
import './App.scss';
import {Switch, Route, Redirect, HashRouter} from "react-router-dom";
import {Development} from "./components/developments/development";

function App() {

  return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route exact path={'/'} render={()=><Development/>}/>
            <Route exact path={'/404'} render={() => <h1 style={{textAlign: 'center', paddingTop: '50px'}}>404: Page not found</h1>}/>
            <Redirect from={'*'} to={'/404'}/>
          </Switch>
        </div>
      </HashRouter>
  )
}

export default App;
