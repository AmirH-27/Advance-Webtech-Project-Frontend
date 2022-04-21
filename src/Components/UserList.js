import React, {useState, useEffect} from "react";
import axios from "axios";
import HeadAdmin from "./HeadAdmin";
import { Link } from "react-router-dom";

const APIProducts = (props) =>{
    const[users, setUser] = useState([]);
    useEffect(()=>{
        axios.get("user/list")
        .then(resp=>{
        console.log(resp.data);
        setUser(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);

    return(
        <div> 
            <HeadAdmin/>
            <div className = "tableContent">
            <h1>All Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map(p=>(
                        <tr>
                            <th>{p.id}</th>
                            <td>{p.name}</td>
                            <td>{p.email}</td>
                            <td>{p.phone}</td>
                            <td>{p.verified}</td>
                            <td>
                                <Link to={"/delete/user/"+p.id} class="btn btn-danger"> Delete</Link>  
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
export default APIProducts; 