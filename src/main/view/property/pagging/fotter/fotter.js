import React,{useEffect} from 'react'
import {usePageNoSet,usePageNo} from "../pageNoHook";
function Fotter(props) {

    const setPageNo=usePageNoSet();       
    return (
        <div>
            {
                props.pageArr.map((index,p)=>{
                    return <button key={index} onClick={(e)=>{e.preventDefault();setPageNo(p)}}>{p+1}</button>
                })
            }
        </div>
    )
}

export default Fotter;
