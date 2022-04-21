import '../Head.css';
import pic from '../images/virtual-meetings.png';
import HeadAdmin from "./HeadAdmin";
import axios from 'axios';
import {useHistory} from "react-router-dom";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
const HomeAdmin = () => {
    
    let[teamName, setName] = useState([]);
    let history = useHistory();
    const[teams, setTeams] = useState([]);
    useEffect(()=>{
        axios.get("users/list/teams/all")
        .then(resp=>{
        console.log(resp.data);
        setTeams(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
    return ( 
        <div>
            <HeadAdmin></HeadAdmin>
            <h1 className="text">Welcome to Virtual Meet</h1>
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
                        <th>User ID</th>
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
                            <td>{p.user_id}</td>
                            <td>{p.created_at}</td>
                        </tr>
                    ))
                    }
            </tbody>
            </table>
            </div>
        </div>
    )
}

export default HomeAdmin;