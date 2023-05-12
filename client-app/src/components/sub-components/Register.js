import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";
const Register=()=>{
    const [firstname,setFirstName] = useState();
    const [lastname,setlastName] = useState();
    const [username,setUserName] = useState();
    const [password,setPassword] = useState();
    const [email,setemailName] = useState();
    const [mobile,setMobile] = useState(0);
    const getdata=()=>{
        axios.post("http://localhost:3001/Register",{firstname:firstname,lastname:lastname,username:username,password:password,email:email,mobile:mobile}).then(()=>  window.alert('Welcome To Comonk ' + firstname));
    }
    return(
        <div className="Register-Component center bg">
                <div className="container">
                    <div className="upper">
                        <div className="logo">COMONK</div>
                        <div className="Box">
                            <div className="Text">
                                <span>Sign up</span><br/>
                            <label>Enter your credentials to continue</label>
                            </div>
                            <div className="google">
                                <input type="button" value="Sign up with google" className="btn-google"/>
                            </div>
                        </div>
                    </div>
                    <div className="Break"><hr value="OR"/>OR</div>
                    <div className="lower">
                        <form>
                            <div className="inline">
                                <input type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
                                <input type="text" placeholder="Last Name" onChange={(e)=>setlastName(e.target.value)}/>
                            </div>
                            <div className="Block">
                            <input type="text" placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}/>
                            <input type="text" placeholder="Email" onChange={(e)=>setemailName(e.target.value)}/>
                            <input type="text" placeholder="Mobile No" onChange={(e)=>setMobile(e.target.value)}/>
                            <input type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                            <input type="submit" value="Sign up" onClick={getdata}/><br/>
                            <Link to="/login">Already Have An Account!</Link>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Register;