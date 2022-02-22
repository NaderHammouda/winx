import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layouts from '../components/sharedComponenets/Layout'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        

    </Head>
    <Layouts>
    <Component {...pageProps} />

    </Layouts>
        
   
    </>
    
    
  ) 
}

export default MyApp
