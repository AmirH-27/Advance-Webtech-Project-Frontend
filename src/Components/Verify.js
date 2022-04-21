import React, {useState} from "react";
import axios from "axios";
import '../Head.css';
import {useHistory} from "react-router-dom";

const Register = ()=>{
    let[otp, setOtp] = useState("");
    let history = useHistory();

    const RegisterSubmit =() =>{
        var obj = {otp: otp};
        axios.post("http://127.0.0.1:8000/api/verify",obj)
        .then(resp=>{
            var otp = resp.data;
            console.log(otp);
            if(otp==="Otp Invalid"){
                history.push("/verify");
            }
            else{
                history.push("/home");
            }
            
        }).catch(err=>{
            console.log(err);
        });
    }


return(
    <div className ="formContent">
        <form>
            <label className="label">Enter Otp</label><br></br>
            <input className="input" type="text" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="OTP"></input><br></br>
        </form>
        <button className= "button" onClick={RegisterSubmit}>Register</button>
    </div>

    )
}

export default Register; 