import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Apicall() {
    const [ApiData,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>{
            setData(res.data);
            
        })
    },[])
  return (
    <div>
        <p>
        {
            ApiData.map((val)=>{
                return(
                        <div>
                                <p>{val.name.common}</p>
                                
                                <p>{val.idd.root+val.idd.suffixes}</p>
                                <p><img src={val.flags.png}></img></p>
                        </div>
                );
            })
        }

        </p>
    </div>
  )
}

export default Apicall
