import React from 'react'
import {useProperty,useCurrentlySelected} from "../dataHook";
import Pagging from './pagging/pagging';

function Property() {

    const CurrentlySelected=useCurrentlySelected();
    const property=useProperty();
    
    return (
        <div>
            <br/>
           <center> {CurrentlySelected=="0"?
           "":          
               <Pagging data={property[CurrentlySelected]}/>
            }
            </center> 
        </div>
    )
}

export default Property;
