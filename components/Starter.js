import React from 'react'
import Header from "../components/Header"
import Mainpage from './Mainpage'
import { Poppins } from "@next/font/google"
import First from './First'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700']
})


function Starter() {
    return (
        <div className={poppins.className} >
            {/* <Header />
            <Mainpage /> */}
            <First />
        </div>
    )
}

export default Starter