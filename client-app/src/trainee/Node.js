import React, { useEffect, useState } from 'react'
import './node.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import axios from 'axios';
function Node() {
  const [show,setShow]=useState([]);
  useEffect(()=>{
    axios
    .get(
      `http://localhost:7240/hide-app/show`,
    )
    .then((response) => {
      console.log(response.data);
      setShow(response.data);
    });
    
  });
  const [val,setData]=useState("");
  
  const [newval,setNewData]=useState("");
  const [nev,setNew] = useState(false);
  const add = () => {
    console.log(val);
    axios
      .post(
        `http://localhost:7240/hide-app`,
         {val:val}
      )
      .then((response) => {
       alert(response.data);
  })
  };
  const del = (id) =>{
    console.log(id);
    axios.delete(`http://localhost:7240/hide-app/${id}`).then((response)=>{
      alert(response.data);
    })
  }
  const update=(id)=>{
    const func =  prompt("Enter Value to Update");
    console.log(func);
    axios.put(`http://localhost:7240/hide-app/${id}`,{func}).then((response)=>{
      alert(response.data);
    })
  }
  return (
    <div className="todo-app">
      <h1>Todo-app</h1>
      <div className='add'>
        <input placeholder='Enter Task Here..' name="val" onChange={(e)=>{
          setData(e.target.value);
        }}/>
        <button onClick={add}>Add</button>
      </div>
      <div className="table">      <table>
        <tr>
            <th>ID</th>
            
            <th>Task</th>
            
            <th>Action</th>
            
            
        </tr>
        {
          show.map((val,key)=>{
            let id;
            return(<>
            <tr>
          <td>{val.id}</td>
          <td> <input value={val.Task || ""} disabled/></td>
          <td>
          <DeleteIcon onClick={()=>{del(val.id)}}/>&nbsp;
          <EditIcon onClick={()=>{update(val.id)}}/>
          </td>
        </tr></>);
})}
      </table>
      </div>

    </div>
  )
}

export default Node;
