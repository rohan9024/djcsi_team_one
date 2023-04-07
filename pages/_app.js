import { useState } from 'react'
import AppContext from '../components/AppContext'
import '../styles/globals.css'
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

function MyApp({ Component, pageProps }) {
const [nameContext, setNameContext] = useState("John")

  return (
    <AppContext.Provider value={{ nameContext, setNameContext }} className={poppins.className}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
