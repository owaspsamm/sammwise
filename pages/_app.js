import '../styles/globals.css'
import '../comps/layout'
import Layout from '../comps/layout'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  
  

  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}
// Changes test
export default MyApp
