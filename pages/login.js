import React from 'react'
import Login from '../components/Login'
import Header from '../components/Header'
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})
function login() {
    return (
        <div className={poppins.className}>
            <Header />
            <Login />
        </div>

    )
}
export default login