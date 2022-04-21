import '../Head.css';
import pic from '../images/virtual-meetings.png';
import Head from "./Head";
import axios from 'axios';
import {useHistory} from "react-router-dom";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const HomeUser = () => {
    let[teamName, setName] = useState([]);
    let history = useHistory();
    const AddTeam = () => {
        var obj = {teamName: teamName};
        axios.post("http://127.0.0.1:8000/api/addTeam",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            history.push("/home");
        }).catch(err=>{
            console.log(err);
        });
    }

    const[teams, setTeams] = useState([]);
    useEffect(()=>{
        axios.get("user/list/teams")
        .then(resp=>{
        console.log(resp.data);
        setTeams(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
    return ( 
        <div>
            
            <Head></Head>
            <h1 className="text">Welcome to Virtual Meet</h1>
            <input className="inputTeam" type="text" name = {teamName} onChange={(e)=>setName(e.target.value)} placeholder="Name your team"></input><br></br>
            <button className="buttonTeam" onClick={AddTeam}>Add Team</button>
            <div className="image">
                <img src = {pic}></img>
            </div>
            <div className = "tableContentTeams">
            <h1>All Teams</h1>
            <table className='rwd-table'>
                <thead>
                    <tr>
                        <th>Team Id</th>
                        <th>Team Name</th>
                        <th>Team Code</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    teams.map(p=>(
                        <tr>
                            <th>{p.id}</th>
                            <td>{p.name}</td>
                            <td>{p.code}</td>
                            <td>{p.created_at}</td>
                            <td>
                                <Link to={"/delete/team/"+p.id} class="btn btn-danger"> Delete</Link>  
                            </td>
                        </tr>
                    ))
                    }
            </tbody>
            </table>
            </div>
        </div>
    )
}

export default HomeUser;