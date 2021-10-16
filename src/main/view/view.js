import React,{useState,useEffect} from 'react'
import UpperOption from './upperoption/upperOption';
import Property from './property/property';
import { restCon } from '../../restCon';
import {usePropertySet,useStatus,useStatusSet} from "./dataHook";
import Loading from '../../loading/main';
import PageNoHook from './property/pagging/pageNoHook';

function View() 
{
    const status=useStatus();
    const setStatus=useStatusSet();
    const propertySet=usePropertySet();

    useEffect(()=>{

        function dataToJSON(data)
        {
            const jsonData={};
            data.forEach(function(property) {
                const propertyJSON={
                    "productId": property["productId"],
                    "name": property["name"],
                    "cost": property["cost"],
                    "address": property["address"],
                };

                if(jsonData.hasOwnProperty(property["city"]))
                jsonData[property["city"]].push(propertyJSON);
                else
                jsonData[property["city"]]=[propertyJSON];
              });
              propertySet(jsonData);
        }

        async function fetchData() 
        {
           const res= await restCon(undefined,"GET","property");
           const data=await res.json();
           dataToJSON(data);
           setStatus(0);
        }

        fetchData();

    },[useStatus()]);

    return (
        <div>
            {status?<Loading text="Loading Properties"/>:<PageNoHook><UpperOption/><Property/></PageNoHook>}
        </div>
    )
}

export default View;
