import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Helpers/AuthContext";
import './post.css'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
export default function Post() {
  let { id } = useParams();
  const [comments, setComments] = useState([]);
  const [postObject, setPostObject] = useState([]);
const history  = useNavigate();
  const { authState } = useContext(AuthContext);
  const [newcom, setNewcom] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:7240/Posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
    axios.get(`http://localhost:7240/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);
  const addComment = () => {
    console.log(newcom + id);
    axios
      .post(
        `http://localhost:7240/comments`,
        { CommentBody: newcom, PostId: id },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((response) => {
        const commentadd = {
          CommentBody: newcom,
          username: response.data.username,
        };
        setComments([...comments, commentadd]);
        setNewcom("");
      });
  };
  const delCom = (id) => {
    axios
      .delete(`http://localhost:7240/comments/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then(() => {
        setComments(
          comments.filter((val) => {
            return val.id != id;
          })
        );
        alert("comment deleted");
      });
  };
  const editPost=(option)=>{
    if(option==="title"){

    }else{
      
    }
  }
  const delPost = (id) =>{
    axios.delete(`http://localhost:7240/posts/${id}`,{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((res)=>{
      alert(res.data.delete);
      history('/blogs');
    })
  }
  return (
    <section className="sec-post" >
      <div className="postId">
        <div className="box"> <div className='title'>
            
          <img src={`http://localhost:7240/${postObject.postImage}`}/>
              <span>{postObject.title}</span></div>
           
          <div className="body"><p>{postObject.postText}</p>
          {postObject.postBodyOne ? <p>{postObject.postBodyOne}</p>:null}
          {postObject.videoLink?<span>
 
                <video width="420" height="240" style={ {    padding: '1rem 0rem' , border:'none'}} controls>
  <source src={`http://localhost:7240/${postObject.videoLink}`} type="video/mp4"/>
  
  Your browser does not support the video tag.
</video>
          </span>:null}
          {postObject.postBodyTwo ? <p>{postObject.postBodyTwo}</p>:null}
          
          {postObject.videoLinkTwo?<span>
            
          <img width="420" height="235" style={ {    padding: '1rem 0rem' , border:'none'}}src={`http://localhost:7240/${postObject.videoLinkTwo}`}>
                </img>
          </span>:null}
          {postObject.postBodyThree? <p>{postObject.postBodyThree}</p>:null}
          
          </div>
          <div className="footer">{postObject.username}  {authState.username === postObject.username ? 
              <DeleteRoundedIcon onClick={()=>delPost(postObject.id)}  sx={{float:'right'}}/>
              :null}</div>
        </div>
      </div>
      <div className="bottom">
        {authState.status ? (
          <div className="comment">
            <input
              type="text"
              placeholder="Comment..."
              onChange={(e) => {
                setNewcom(e.target.value);
              }}
              value={newcom}
            />
            <button onClick={addComment}>Add Comments</button>
          </div>
        ) : (
          <label>Login To Write Comments</label>
        )}
        <div className="allcom">
          {comments.map((val, key) => {
            return (
              <div>
                {val.CommentBody}
                <label
                  style={{
                    display: "block",
                    float: "left",
                    color: "#000",
                    background: "#fff",
                    borderRadius: "0.51rem",
                    padding: "0.2rem 1rem",
                  }}
                >
                  user:{val.username}
                </label>
                {authState.username === val.username && (
                 < DeleteRoundedIcon onClick={() => delCom(val.id)} sx={{float:'right'}}/>
                 
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
