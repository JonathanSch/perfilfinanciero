import React from 'react';
import MainContainer from './containers/MainContainer';
import Cuestionario from './containers/Cuestionario'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import './containers/Login.css'
import Login from './containers/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/cuestionario" component={Cuestionario} />
        <Route exact path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
