import React, {useState, useEffect} from "react";
import axios from "axios";
import Head from "./Head";

const ProfileUser = (props) =>{
    const [user,setUser]=useState([]);
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/profile")
        .then(resp=>{
        console.log(resp.data);
        setUser(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
    const {id,name,password,email,phone}=user;
    const [update,setUpdate]=useState({
        id: "",
        name:"" ,
        password:"",
        email:"" ,
        phone:"" 
    });

    const EditProfile =()=>{
        
    }
    return(
        <div>
            <Head></Head>
            <div className="formContent">
            <form>
            <label className="label">Profile</label><br></br>
            <input className="input" type="text" name = "username" value={name} readOnly/><br></br>
            <input className="input" type="text" name = "password" value={password} readOnly/>
            <input className="input" type="text" name = "email" value={email} readOnly/>
            <input className="input" type="text" name = "phone" value={phone} readOnly/>
        </form>
        <button className= "button" onClick={EditProfile}>Edit Profile</button>
            </div>
        </div>
    )
}
export default ProfileUser; 