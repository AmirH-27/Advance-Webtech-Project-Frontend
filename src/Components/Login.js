import React, {useState, userEffect} from "react";
import axios from "axios";
import '../Head.css';
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";

const Login = ()=>{
    let[username, setName] = useState("");
    let[password, setPassword] =useState("");
    let history = useHistory();

    const loginSubmit= ()=>{

        console.log(username);
        console.log(password);
        var obj = {username: username, password: password};
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {user_Id: token.user_id, access_token:token.token, type:token.type};
            localStorage.setItem('user',JSON.stringify(user));
            if(token.type == "user"){
                history.push("/home");
            }
            else if(token.type == "admin"){
                history.push("/home/admin");
            }  
        }).catch(err=>{
            console.log(err);
        });
    }
    return(
        <div className ="formContent">
            <form>
                <label className="label">Login</label><br></br>
                <input className="input" type="text" value={username} onChange={(e)=>setName(e.target.value)}></input><br></br>
                <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </form>
                <button className= "button" onClick={loginSubmit}>Login</button>
                <p>Don't have any account?</p>
                <u><Link to="/registration"> Create an account</Link></u>
        </div>

    )
}
export default Login; 