import React, { useContext, useState } from 'react';
import '../App.css';
import * as yup from 'yup';
import './createpost.css'

import axios from 'axios';
import { AuthContext } from '../Helpers/AuthContext';
const CreatePost = () => {
    
    const {authState} = useContext(AuthContext);
    const [counter,setcounter]=useState(0);
    const [counte,setcounte]=useState(0);
    const [count,setcount]=useState(0);
    const [video,setVideo]=useState([]);
    const [image,setImage]=useState([]);
    const videoFormats = ['video/mp4', 'video/mpeg', 'video/ogg', 'video/quicktime', 'video/webm'];
const maxFileSize = 100000000; // 100 MB in bytes

    const userSchema = yup.object().shape({        
          title: yup.string().min(10).max(50).required(""),
          postText: yup.string().min(50).max(200).required(""),
          postImage: yup.mixed().required('An image file is required').test(
           "fileSize",
           "File too large",
           (value) => value && value.size <= 5000000
         ).test(
           "fileType",
           "Only image files are allowed",
           (value) => value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
         ),
           postBodyOne: yup.string().max(255).required(""),
          postBodyTwo:yup.string().max(500).required("") ,
          postBodyThree: yup.string().max(1000).required(""),
          videoLink: yup.mixed()
    .required('A video file is required')
    .test('fileSize', 'File size is too large', (value) => value && value.size <= maxFileSize)
    .test('fileFormat', 'Invalid file format', (value) => value && videoFormats.includes(value.type)),
    videoLinkTwo: yup.mixed().required('An image file is required').test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= 5000000
      ).test(
        "fileType",
        "Only image files are allowed",
        (value) => value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
      )
    });
    const [banner,setBanner]=useState([]);
    const [errors, setErrors] = useState({
        
        title: "",
        postText: "",
        postImage: "",
        postBodyOne: "",
        postBodyTwo: "",
        postBodyThree: "",
        videoLink:"",
        videoLinkTwo:"",
    });

    const createUser = async (e) => {
        e.preventDefault();
        const formData = {
            title: e.target[0].value,
            postText: e.target[1].value,
            postImage: e.target[2].files[0],
            postBodyOne: e.target[5].value,
            postBodyTwo: e.target[6].value,
            postBodyThree: e.target[7].value,
            videoLink:e.target[3].files[0],
            videoLinkTwo:e.target[4].files[0],
            
        }
        try {
            await userSchema.validate(formData, { abortEarly: false });
            console.log(formData);
            setErrors({
                title: "",
                postText: "",
                postImage: "",
                postBodyOne: "",
                postBodyTwo: "",
                postBodyThree: "",
                videoLink:"",
                videoLinkTwo:"",
            });
        } catch (err) {
            const newErrors = {          
                title: "",
                postText: "",
                postImage: "",
                postBodyOne: "",
                postBodyTwo: "",
                postBodyThree: "",
                videoLink:"",
                videoLinkTwo:"",
            };
            err.inner.forEach((e) => {
                newErrors[e.path] = e.message;
            });
            setErrors(newErrors);
        }
        const isValid = await userSchema.isValid(formData);
        if(isValid){
            console.log(isValid)
            console.log(banner);
            const sendImage = new FormData();
            sendImage.append('title',formData.title);
            sendImage.append('postText',formData.postText);
            sendImage.append('postImage',banner);
            sendImage.append('postBodyOne',formData.postBodyOne);
            
            sendImage.append('postBodyTwo',formData.postBodyTwo);
            
            sendImage.append('postBodyThree',formData.postBodyThree);
            
            sendImage.append('videoLink',video);
            
            sendImage.append('videoLinkTwo',image);

            axios.post('http://localhost:7240/Posts',sendImage, { headers: { accessToken: localStorage.getItem("accessToken") }}).then((res)=>{
                alert("Data Send to back end");
            })
        
     }
    }
  
    return (
        <div className="PostPage">
            <form onSubmit={createUser} className="form-post-mn">
                    <div className='ul'>
                        <ul>
                            <li>{authState.username}</li>
                            
                            <li>Create Post</li>
                        </ul>
                    </div>
                <div className='flex'>
                <div className='grid'>
                <div className='data'>
                    
                    <input type="text" name="title" placeholder='Post Title..'/>
                    {errors.title && <span>{errors.title}</span>}
                </div>
                <div className='data'>
                    <input type="text" name="postText"  placeholder='Post Preview Description'/>
                    {errors.postText && <span>{errors.postText}</span>}
                </div>
                <div className='data'>
                    <input type="file" name="postImage" onChange={(e)=>{setBanner(e.target.files[0])}} />
                    {errors.postImage && <span>{errors.postImage}</span>}

                </div>
                
                
                <div className='data'>
                    <input type="file" name="videoLink"  placeholder='www.youtube.com' onChange={(e)=>{setVideo(e.target.files[0])}}/>
                    {errors.videoLink && <span>{errors.videoLink}</span>}
                </div>
                
                <div className='data'>
                    <input type="file" name="videoLinkTwo"  placeholder='www.vimeo.com' onChange={(e)=>{setImage(e.target.files[0])}}/>
                    {errors.videoLinkTwo && <span>{errors.videoLinkTwo}</span>}
                </div>
                
                </div>
                <div className='grid'>
                
                <div className='data'>
                    <textarea type="text" name="postBodyOne"  placeholder='short Description' onChange={(e)=>setcounter(e.target.value.length)}/>
                    <span>{counter}/255</span>
                    {errors.postBodyOne && <span>{errors.postBodyOne}</span>}
                </div>
                <div className='data'>

                    <textarea type="text" name="postBodyTwo"  placeholder='short Description' onChange={(e)=>setcounte(e.target.value.length)}/>
                    <span>{counte}/500</span>
                    {errors.postBodyTwo && <span>{errors.postBodyTwo}</span>}
                </div>
                
                <div className='data'>
                    <textarea type="text" name="postBodyThree"  placeholder='Long Description'onChange={(e)=>setcount(e.target.value.length)}/>
                    <span>{count}/1000</span>
                    {errors.postBodyThree && <span>{errors.postBodyThree}</span>}
                </div>
                </div>
                </div >
                <div>
                <input type="submit" className='btn'/>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
