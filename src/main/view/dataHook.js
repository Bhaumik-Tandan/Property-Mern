import React, { useState,useContext} from 'react'



const Property=React.createContext();
const CurrentlySelected=React.createContext();
const Status=React.createContext();

export function useProperty()
{
    return useContext(Property);
}

export function useCurrentlySelected()
{
    return useContext(CurrentlySelected);
}

export function useStatus()
{
    return useContext(Status);
}

const PropertySet=React.createContext();
const CurrentlySelectedSet=React.createContext();
const StatusSet=React.createContext();

export function usePropertySet() {
    return useContext(PropertySet);   
}

export function useCurrentlySelectedSet(){
    return useContext(CurrentlySelectedSet);
}

export function useStatusSet(){
    return useContext(StatusSet);
}

function PropertyHook({children}){
    const [property, setProperty] = useState();
    const [selected,setSelected]=useState("0");
    const [status,setStatus]=useState(1);

    function toggleProperty(setVal)
    {
        setProperty(setVal);  
    }

    function changeSelected(val)
    {
        setSelected(val);
    }


    return (
        <StatusSet.Provider value={setStatus}>
        <Status.Provider value={status}>
        <CurrentlySelectedSet.Provider value={changeSelected}>
        <CurrentlySelected.Provider value={selected}>
        <PropertySet.Provider value={toggleProperty} >
        <Property.Provider value={property} >
            {children}
        </Property.Provider>
        </PropertySet.Provider>
        </CurrentlySelected.Provider>
        </CurrentlySelectedSet.Provider>
        </Status.Provider>
        </StatusSet.Provider>
    )
}

export default PropertyHook;
