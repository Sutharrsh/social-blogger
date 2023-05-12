import React ,{useState}from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import "./Register.css";
import axios from "axios";

const Login=()=>{
    //const [firstname,setFirstName] = useState();
    //const [lastname,setlastName] = useState();
    const navigate =useNavigate();
    const [username,setUserName] = useState();
    const [password,setPassword] = useState();
    const [email,setemailName] = useState();
    const [statusCall,setCall]=useState();
    const getdata=()=>{
        axios.post("http://localhost:3001/login",{username:username,password:password,email:email}).then((response)=>{
        if(response)    
        navigate('/');    
        else
            alert("user not exist")
        });
    }
    return(
        <div className="Register-Component center bg">
                <div className="container">
                    <div className="upper">
                        <div className="logo">COMONK</div>
                        <div className="Box">
                            <div className="Text">
                                <span>Sign in</span><br/>
                            <label>Enter your credentials to continue</label>
                            </div>
                            <div className="google">
                                <input type="button" value="Sign in with google" className="btn-google width"/>
                            </div>
                        </div>
                    </div>
                    <div className="Break"><hr value="OR"/>OR</div>
                    <div className="Break"><hr value="OR"/>{statusCall}</div>
                    <div className="lower">
                        <form>
                            <div className="Block">
                            <input type="text" placeholder="User Name" className="width" onChange={(e)=>setUserName(e.target.value)}/>
                            <input type="text" placeholder="Email" className="width" onChange={(e)=>setemailName(e.target.value)}/>
                            <input type="text" placeholder="Password" className="width" onChange={(e)=>setPassword(e.target.value)}/>
                            <input type="submit" value="Sign in" onClick={getdata}/><br/>
                            <Link to="/Register">Don't Have Account!</Link>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Login;