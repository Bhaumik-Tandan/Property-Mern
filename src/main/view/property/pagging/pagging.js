import React,{useEffect} from 'react'
import Individual from "../individual/individual"
import {usePageNo} from "./pageNoHook";
import Fotter from './fotter/fotter';
import "./pagging.css";

function Pagging(props) {
   const pageNo=usePageNo();
    const currentPosts=props.data.slice(pageNo*6,(pageNo+1)*6);
    const pageArr=[];
    const pageLen=Math.ceil(props.data.length/6);

    for(let i=0;i<pageLen;i++)
        pageArr.push(i);


    return (
        <div>
            <div className="grid-container">
           {currentPosts.map((data,index)=>{
                   return <Individual className="grid-item" data={data} key={index}/>
                } )
            }
            </div>
                
                <Fotter pageArr={pageArr}/> 
        </div>
    )
}

export default Pagging;
