import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';
import './log.css'
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';

export default function Reg() {
    const initialValues ={
        username:"",
        password:"",
        
    }
    const history=useNavigate();
    const validationSchema = yup.object().shape({
        username:yup.string().required(),
        password:yup.string().required(),
        
        email:yup.string().required()
      //  username:yup.string().required(),
    })
   const onSubmit=(data)=>{
    axios.post("http://localhost:7240/auth",data).then((res)=>{
            console.log(data);
            if(res.data) {  
              alert(res.data.welcome + ":" + data.username);
            history("/login");
            }
            else{
              alert("something wents wrongs");
            }
    });
   };
  return (
  <div className='PostPage'>
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
      <Form className="form">
        
      <h2 style={{textAlign:'center'}}>REGISTER</h2>
      <ErrorMessage name="username" component="span"/>
          <span style={{display:'flex',margin:'auto'}}>
          <PersonIcon sx={{color:'black',position:'absolute',padding:'1.8rem 1rem',opacity:'.5'}}/>
          <Field id="inputCreatePost" name="username" placeholder="username"/>
          </span>
          
      <ErrorMessage name="email" component="span"/>
          <span style={{display:'flex',margin:'auto'}}>
          <PersonIcon sx={{color:'black',position:'absolute',padding:'1.8rem 1rem',opacity:'.5'}}/>
          <Field id="inputCreatePost" name="email" placeholder="username" type="email"/>
          </span>
          
          <ErrorMessage name="password" component="span"/>
          <span style={{display:'flex',margin:'auto'}}>
          
          <HttpsIcon sx={{color:'black',position:'absolute',padding:'1.8rem 1rem',opacity:'.5'}}/>
          <Field id="inputCreatePost" name="password" placeholder="password" type='password'/>
          </span>
         
          <button type='submit'>Register</button>
      </Form>
  </Formik>
</div>

  )
}
