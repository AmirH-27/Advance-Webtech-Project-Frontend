import React,{useState} from "react";
import axios from 'axios';

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const DeleteUser=()=>{
    let history = useHistory();
    const {id}=useParams();
    const [posts,setPosts]=useState([]);

   if(
        axios.delete("users/delete/"+id).then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        })
   )
    {
        history.push("/userList");
        
    }
    return (
        <div>
      
                
        </div>
    )
}
export default DeleteUser;