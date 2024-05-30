import axios from "axios"
import { useEffect, useState } from "react";
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import {Link ,useNavigate } from 'react-router-dom'

export default function Home()
{
   const navigate = useNavigate();
   const [data,setData] = useState([])
   useEffect(()=>{
      axios.get("http://localhost:3000/users")
      .then(res=>setData(res.data))
      .catch(err=> console.log(err));
   },[])

   const deleteUser = (id)=>{
      axios.delete("http://localhost:3000/users/"+id)
      .then(()=>{
         const newData = data.filter(user=>user.id!==id)
         setData(newData)
      })
      .catch(err=> console.log(err));
   }
   return<>
    <h1 style={{textAlign:"center"}}>Home Component</h1><hr/>
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
         <div className="d-flex  justify-content-end">
            <Link to="/create" className="btn btn-primary">Create User</Link>
         </div>
         <Table className="striped bordered hover responsive table-sm text-center ">
            <thead>
               <th>ID</th>
               <th>Name</th>
               <th>Email</th>
               <th>Number</th>
               <th>Update</th>
               <th>Delete</th>
               <th>View</th>
            </thead>
             <tbody>
               {data.map((user,index)=><tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td><Button className=" btn-lg" onClick={()=>navigate(`/update/${user.id}`)} variant="success">UPDATE</Button></td>
                  <td><Button className=" btn-lg" onClick={()=>deleteUser(user.id)} variant="danger">DELETE</Button></td>
                  <td><Link to={`view/${user.id}`}><Button className=" btn-lg" variant="warning">VIEW</Button></Link></td>
               </tr>)}
             </tbody>
         </Table>
         
      </div>
    </div>
   </>
   
}