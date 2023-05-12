import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { AuthContext } from '../Helpers/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './log.css'
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
export default function Login() {
    const initialValues ={
        username:"",
        password:"",
        
    }
    const {setAuthState} = useContext(AuthContext);
    const history=useNavigate();
    const validationSchema = yup.object().shape({
        username:yup.string().required(),
        password:yup.string().min(8).required(),
      //  username:yup.string().required(),
    })
   const onSubmit=(data)=>{
    axios.post("http://localhost:7240/auth/login",data).then((res)=>{
        if(res.data.error) {
          alert(res.data.error);
        }
        else{
        localStorage.setItem("accessToken",res.data.token);
        setAuthState({username:res.data.username,id:res.data.id,status:true});
        history("/");
        }
    })
   };
  return (
  <div className='PostPage'>
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
      <Form className="form">
        <h2 style={{textAlign:'center'}}>LOGIN</h2>
    
          <ErrorMessage name="username" component="span"/>
          <span style={{display:'flex',margin:'auto'}}>
          <PersonIcon sx={{color:'black',position:'absolute',padding:'1.8rem 1rem',opacity:'.5'}}/>
          <Field id="inputCreatePost" name="username" placeholder="username"/>
          </span>
          
          <ErrorMessage name="password" component="span"/>
          <span style={{display:'flex',margin:'auto'}}>
          
          <HttpsIcon sx={{color:'black',position:'absolute',padding:'1.8rem 1rem',opacity:'.5'}}/>
          <Field id="inputCreatePost" name="password" placeholder="password" type='password'/>
          </span>
          <button type='submit'>Login</button>
      </Form>
  </Formik>
</div>

  )
}
