import React, {useState,useContext} from 'react'



const PageNo=React.createContext();

export function usePageNo()
{
    return useContext(PageNo);
}


const PageNoSet=React.createContext();


export function usePageNoSet() {
    return useContext(PageNoSet);   
}


function PageNoHook({children}){
    const [pageNo, setPageNo] = useState(0);

    function togglePageNo(setVal)
    {
        setPageNo(setVal);  
    }


    return (
        <PageNoSet.Provider value={togglePageNo} >
        <PageNo.Provider value={pageNo} >
            {children}
        </PageNo.Provider>
        </PageNoSet.Provider>
    )
}

export default PageNoHook;
