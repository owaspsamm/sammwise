// to use later 
// aim of this is to add a simplified percentage done bar
import { useState, useEffect } from 'react';




const ProgressDiv = () => {
   
    const [page, setPage] = useState('')
    
    useEffect(() => {
        const pageName = sessionStorage.getItem('currentPage')
        setPage(pageName)
    }, [])

    return (
        <>
            <div className ="NavTest">
                <p>this is a test{page} </p>
            </div>
        </>
     );
}
 
export default ProgressDiv;