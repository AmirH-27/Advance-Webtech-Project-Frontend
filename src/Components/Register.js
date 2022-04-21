import React, {useState, userEffect} from "react";
import axios from "axios";
import '../Head.css';
import {useHistory} from "react-router-dom";

const Register = ()=>{
    let[name, setName] = useState("");
    let[password, setPassword] =useState("");
    let[email, setEmail] =useState("");
    let[phone, setPhone] =useState("");
    let[file, setFile] =useState("");
    let history = useHistory();

    const RegisterSubmit =() =>{
        console.log(name);
        console.log(password);
        console.log(email);
        console.log(phone);
        var obj = {name: name, password: password, email: email, phone: phone};
        axios.post("http://127.0.0.1:8000/api/registration",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {user_Id: token.user_id, access_token:token.token, type:token.type};
            localStorage.setItem('user',JSON.stringify(user));
            history.push("/verify");
        }).catch(err=>{
            console.log(err);
        });
    }


return(
    <div className ="formContent">
        <form>
            <label className="label">Register</label><br></br>
            <input className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"></input><br></br>
            <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Password"></input>
            <input className="input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder="Email"></input>
            <input className="input" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}placeholder="Phone"></input>
        </form>
        <button className= "button" onClick={RegisterSubmit}>Register</button>
    </div>

    )
}

export default Register; 