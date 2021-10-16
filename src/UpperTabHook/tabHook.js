import React, {useState,useContext} from 'react'



const Tab=React.createContext();

export function useTab()
{
    return useContext(Tab);
}


const TabSet=React.createContext();


export function useTabSet() {
    return useContext(TabSet);   
}


function TabHook({children}){
    const [tab, setTab] = useState(0);

    function toggleTab(setVal)
    {
        setTab(setVal);  
    }


    return (
        <TabSet.Provider value={toggleTab} >
        <Tab.Provider value={tab} >
            {children}
        </Tab.Provider>
        </TabSet.Provider>
    )
}

export default TabHook;
