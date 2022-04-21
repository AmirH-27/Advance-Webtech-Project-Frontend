import React from "react";
import '../Head.css';
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import axios from "axios";

const HeadAdmin = () => {
    let history = useHistory();
    const handleLogout=()=>{
        var obj = {delete_token: "delete"};
        axios.post("http://127.0.0.1:8000/api/logout", obj)
        .then(resp=>{
            
        }).catch(err=>{
            console.log(err);
        });
        localStorage.clear();
        setTimeout(() => { history.push('/'); }, 100);
    }
    return ( 
        <div className = "wrapper" >
            <Link className="link" to = "/home/admin" >< b > Home </b></Link >
            <Link className="link" to = "/profile/admin" >< b > Profile </b></Link >
            <Link className="link" to = "/userList" >< b > User List </b></Link>
            <button className="logoutButton" onClick={handleLogout}>< b > Logout </b></button >
        </div>
    )
}

export default HeadAdmin;