import React from 'react'
import {restCon} from "../../../../../restCon";
import {useStatusSet} from "../../../dataHook";
function Delete(props) 
{
   const setStatus=useStatusSet();

   async function del()
    {
        setStatus(0);
        restCon(undefined,"DELETE","property/"+props.id);
        setStatus(1);
    }

    return(
        <button onClick={del}>
            Delete
        </button>
    )
}

export default Delete;
