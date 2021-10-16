import React from 'react';
import Add from "./add/add";
import View from './view/view';
import {useTab} from '../UpperTabHook/tabHook';
import PropertyHook from './view/dataHook';

function Main()
{
    const tab=useTab();
    return (
        <div>
            {tab==0?<PropertyHook><View/></PropertyHook>:<Add/>}
        </div>
    )
}

export default Main;