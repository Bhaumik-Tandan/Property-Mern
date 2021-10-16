import React from 'react'
import {useProperty,useCurrentlySelectedSet} from "../dataHook";
import {usePageNoSet} from "../property/pagging/pageNoHook";

function UpperOption() {
    const property=useProperty();
    const setSelected=useCurrentlySelectedSet();
    const setPageNo=usePageNoSet();
    function changeApp(e)
    {
        setSelected(e.target.value);
        setPageNo(0);//set page no. on change
    }

    return (
        <div>
            <br/>
           <center> <select onChange={changeApp}>
                <option value="0">Choose Post</option>
                {Object.keys(property).map((value)=>{
                    return <option key={value} value={value}>{value}</option>
                })}
            </select></center> 
        </div>
    )
}

export default UpperOption;
