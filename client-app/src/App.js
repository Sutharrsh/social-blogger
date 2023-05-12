import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Reg from './pages/Reg';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import { useState } from 'react';
import { useEffect } from 'react';
import Login from './pages/Login';
import {AuthContext} from './Helpers/AuthContext';
import Header from './components/Header';
import Search from './components/sub-components/search';
import { BrowserRouter as Router, Routes as Switch,Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Bot from './components/bot';
import PremiumConsultancy from './pages/consultancy';
import Node from './trainee/Node'
import Courses from './pages/Courses'
import Apicall from './pages/apicall';
import Deshboard from './pages/Deshboard';
import Chatbot from './pages/bot';
function App() {
  const [authState,setAuthState] = useState({username:"",id:0,status:false});

  useEffect(()=>{
    axios.get('http://localhost:7240/auth/auth',{
      headers:{
        accessToken:localStorage.getItem('accessToken')
      }
    }).then((res)=>{
      if(res.data.error){
        setAuthState({...authState,status:false});
      }
      else{
        setAuthState({
        username:res.data.username,
        id:res.data.id,
        status:true});
      }
    })
  },[]);
  
  return (
    <div className="App">
      <AuthContext.Provider value={{authState,setAuthState}}>  
            <Router>
              <Header/>
          <Switch>
            
          <Route path="/Deshboard/:id" element={<Deshboard/>}></Route>
          <Route path="/" exact element={<Homepage/>}></Route>
          <Route path="/blogs" exact element={!authState.status ? <Blog/> : <Home/>}></Route>
          <Route path="/createPost" exact element={<CreatePost/>}></Route>
          <Route path="/Post/:id" exact element={<Post/>}></Route>
          <Route path="/Register" exact element={<Reg/>}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="/search" exact element={<Search/>}></Route>
          <Route path="/about" exact element={<About/>}></Route>
          <Route path="/Profile/:id" exact element={<Profile/>}></Route>
          <Route path="*" exact element={<h1>Page Not found</h1>}></Route>
          
          <Route path="/Call" exact element={<Apicall/>}></Route>
        
          <Route path="/hiden-app" exact element={<Chatbot/>}></Route>
          
         </Switch>
         
         <Footer/>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
