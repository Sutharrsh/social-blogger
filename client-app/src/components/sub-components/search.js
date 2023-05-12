import React,{useEffect, useState} from "react";
import "./search.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {SearchOutlined} from '@mui/icons-material' 
const Search = () =>{
    const [EmpList,setEmpList]=useState([]);
    let history=useNavigate();
    const [listofPosts,setlistofPosts]=useState([]);
  const [search,setSearch]=useState();
  
  const showData = (search)=>{
   
    console.log(search);
  
      axios.post(`http://localhost:7240/Posts/search`,{search}).then((response)=>{
        console.log(response);
        setlistofPosts(response.data);
        });
      
}
      return(
        <div className="search-panel">
            <div className="search-container">
                <div className="comonk">
                <div className="logo">COMONK
                <p>Career is Carrier of Life</p>
                </div>
                <div className="input">
                    <input type="search"  name="id" placeholder="What to do after 10th?" className="search-bar" onChange={(e)=>setSearch(e.target.value)}/>
                    
                    <input type="submit" onClick={showData(search)} className="search-btn" value="search"/>
                    {/* <SearchOutlined/> */}
                </div>
                </div>
                <div>
                <div className='postBody-src'>  
    {
      listofPosts.map((val,key)=>{
        return (
        <section >
        <div className='post' >
          
          <div className='box' >
          <div className='body'>
          <div className='title'>{val.title}</div>
          <div className="text" onClick={()=>{history(`/post/${val.id}`)}}>
            {
              val.postText
            }</div>
            <div className='footer'>{val.username}
            </div>
          
          </div>
          </div>
        </div>
        </section>
        );
      })
        }
    </div>
    </div>
            </div>
        </div>
    );
}
export default Search;

// import React,{useState} from "react";
// import "./search.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Search = () => {
//   const [EmpList, setEmpList] = useState([]);
//   const navigate = useNavigate();
//   const [listOfPosts, setListOfPosts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const onSubmit= (data) => {
//     axios.get(`http://localhost:7240/Posts/search`,{data})
//       .then((response) => {
//         setListOfPosts(response.data.searchResults);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="search-panel">
//       <div className="search-container">
//         <div className="comonk">
//           <div className="logo">
//             COMONK
//             <p>Career is Carrier of Life</p>
//           </div>
//           <form className="input" onSubmit={onSubmit} >
//             <input
//               type="search"
//               name="search"
//               placeholder="What to do after 10th?"
//               className="search-bar"
//             />
//             <input type="submit"  />
//           </form>
//         </div>
//         <div className="postBody">  
//           {listOfPosts.map((post, index) => (
//             <section key={index} style={{margin: '2rem'}}>
//               <div className="post">
//                 <div className="box">
//                   <div className="body">
//                     <div className="title">{post.title}</div>
//                     <div
//                       className="text"
//                       onClick={() => navigate(`/post/${post.id}`)}
//                     >
//                       {post.postText}
//                     </div>
//                     <div className="footer">{post.username}</div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;
