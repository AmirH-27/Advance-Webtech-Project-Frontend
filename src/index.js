import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import HomeUser from './Components/HomeUser';
import axios from 'axios';
import Login from './Components/Login';
import Register from './Components/Register';
import Verify from './Components/Verify';
import ProfileUser from './Components/ProfileUser';
import ProfileAdmin from './Components/ProfileAdmin';
import HomeAdmin from './Components/HomeAdmin';
import UserList from './Components/UserList';
import Delete from './Components/Delete';
import DeleteTeam from './Components/DeleteTeam';

var token = null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.token;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization_token"] = token;

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
        <Route exact path="/home">
          <HomeUser/>
        </Route>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/registration">
          <Register/>
        </Route>
        <Route exact path="/verify">
          <Verify/>
        </Route>
        <Route exact path="/profile/user">
          <ProfileUser/>
        </Route>
        <Route exact path="/profile/admin">
          <ProfileAdmin/>
        </Route>
        <Route exact path="/home/admin">
          <HomeAdmin/>
        </Route>
        <Route exact path="/userlist">
          <UserList/>
        </Route>
        <Route exact path="/delete/user/:id">
          <Delete/>
        </Route>
        <Route exact path="/delete/team/:id">
          <DeleteTeam/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
