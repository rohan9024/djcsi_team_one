import React, { useState } from 'react'
import { Poppins } from "@next/font/google"
import mainLogo from "../assets/mainLogo.png"
import more from "../assets/more.svg"
import tamma from "../assets/tamma.PNG"
import img2 from "../assets/img2.PNG"
import img3 from "../assets/img3.PNG"
import img4 from "../assets/img4.PNG"
import img5 from "../assets/img5.PNG"
import img6 from "../assets/img6.PNG"
import img7 from "../assets/img7.PNG"
import img8 from "../assets/img8.PNG"
import img9 from "../assets/img9.PNG"
import img10 from "../assets/img10.PNG"
import img11 from "../assets/img11.PNG"
import img12 from "../assets/img12.jpg"
import close from "../assets/close.svg"
import search from "../assets/search.svg"
import Image from 'next/image'
import { useRouter } from 'next/router'


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700']
})

function menu() {
    const router = useRouter()


    return (
        <div className={`${poppins.className} && 'text-black bg-[#E2C2AA] h-full w-screen  '`}>

            {/* <video src={starterVideo} /> */}

            {/* <video autoplay>
                <source src="../assets/starterVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}


            {/* Header */}
            <div className='flex justify-between p-10'>
                <Image
                    src={mainLogo}
                    width={180}
                    height={120}
                    cover
                    className=''
                />      <Image
                    src={more}
                    width={20}
                    height={20}
                    contain
                    className=''
                />
            </div>


            <div className='flex justify-center items-center bg-white mx-auto w-[270px] px-4 py-2 rounded-full mt-10'>
                <input placeholder='Search' type="text" className='outline-none bg-transparent' />
                <Image
                    src={search}
                    width={20}
                    height={20}
                    className='rounded-lg shadow-lg '
                    onClick={() => router.push('imagedetail')}
                />
            </div>
            <div className='grid grid-cols-2 gap-8 ml-10 mr-10 pb-10 mt-10'>
                <div>
                    <div className='flex flex-col h-40 justify-center items-center relative mb-3'>
                        <Image
                            src={img4}
                            fill
                            className='rounded-lg shadow-lg'
                            onClick={() => router.push('imagedetail')}
                        />
                    </div>
                    <h1>Espresso Tonic</h1>
                    <h1>$12</h1>
                </div>
                <div>
                    <div className='flex flex-col h-40 justify-center items-center relative mb-3'>
                        <Image
                            src={img5}
                            fill
                            className='rounded-lg shadow-lg'
                            onClick={() => router.push('imagedetail')}
                        />
                    </div>
                    <h1>Espresso</h1>
                    <h1>$10</h1>
                </div>
                <div>
                    <div className='flex flex-col h-40 justify-center items-center relative mb-3'>
                        <Image
                            src={img6}
                            fill
                            className='rounded-lg shadow-lg'
                            onClick={() => router.push('imagedetail')}
                        />
                    </div>
                    <h1>Mini Samosa</h1>
                    <h1>$10</h1>
                </div>
                <div>
                    <div className='flex flex-col h-40 justify-center items-center relative mb-3'>
                        <Image
                            src={img7}
                            fill
                            className='rounded-lg shadow-lg'
                            onClick={() => router.push('imagedetail')}
                        />
                    </div>
                    <h1>Espresso</h1>
                    <h1>$10</h1>
                </div>
                <div>
                    <div className='flex flex-col h-40 justify-center items-center relative mb-3'>
                        <Image
                            src={img8}
                            fill
                            className='rounded-lg shadow-lg'
                            onClick={() => router.push('imagedetail')}
                        />
                    </div>
                    <h1>Espresso</h1>
                    <h1>$10</h1>
                </div>
                <div>
                    <div className='flex flex-col h-40 justify-center items-center relative mb-3'>
                        <Image
                            src={img9}
                            fill
                            className='rounded-lg shadow-lg'
                            onClick={() => router.push('imagedetail')}
                        />
                    </div>
                    <h1>Espresso</h1>
                    <h1>$10</h1>
                </div>
                <div>
                    <div className='flex flex-col h-40 justify-center items-center relative mb-3'>
                        <Image
                            src={img10}
                            fill
                            className='rounded-lg shadow-lg'
                            onClick={() => router.push('imagedetail')}
                        />
                    </div>
                    <h1>Espresso</h1>
                    <h1>$10</h1>
                </div>
                <div>
                    <div className='flex flex-col h-40 justify-center items-center relative mb-3'>
                        <Image
                            src={img11}
                            fill
                            className='rounded-lg shadow-lg'
                            onClick={() => router.push('imagedetail')}
                        />
                    </div>
                    <h1>Espresso</h1>
                    <h1>$10</h1>
                </div>
                <div>
                    <div className='flex flex-col h-40 justify-center items-center relative mb-3'>
                        <Image
                            src={img12}
                            fill
                            className='rounded-lg shadow-lg'
                            onClick={() => router.push('imagedetail')}
                        />
                    </div>
                    <h1>Espresso</h1>
                    <h1>$10</h1>
                </div>


            </div>
        </div>
    )
}

export default menu