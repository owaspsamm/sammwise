import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=>{
            // redirect to homepage 
            router.push('/')

        }, 3000)
    }, [])
    return ( 
        <div className = "not-found">
            <h1>Turn back</h1>
            <h2>This is not the promised land</h2>
            <p>Go back from whence you came..<Link href = "/"><a>Home</a></Link></p>

        </div>

     );
}
 
export default NotFound;