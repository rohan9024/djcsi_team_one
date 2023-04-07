import React from 'react'
import Signup from '../components/Signup'
import Header from '../components/Header'
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})
function signup() {
    return (
        <div className={poppins.className}>
            <Header />
            <Signup />
        </div>

    )
}

export default signup