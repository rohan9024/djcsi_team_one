import React, { useRef } from 'react'
import logo from "../assets/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import sideimage from "../assets/sideimage.gif"
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import show from "../assets/show.svg"
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})


function Mainpage() {

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [contact, setContact] = useState('')
    const [city, setCity] = useState('')
    const [name, setName] = useState('')


    const signIn = async () => {

        if (!email) {
            toast.error("Please Enter email");
        }
        else if (!password) {
            toast.error("Please Enter password");
        }

        else {

        }

    }


    const login = (e) => {
        e.preventDefault();

    }


    // Notify for successful login
    const notifySuccess = () => toast.success('Logged in successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    //Notify if unsuccessfull error
    const notifyError = () => toast.error('Invalid email or password', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />


<div
                    
                        className='flex justify-center items-center w-screen h-screen'
                    >
                        <div className='w-3/4 h-screen'>
                            <Image src={sideimage} alt="sideimage" className='h-full w-full object-contain' />
                        </div>
                        <div className='flex flex-col justify-center items-center w-screen h-[640px] space-y-5'>
                            {/* <img
        className='object-contain w-28 h-28 cursor-pointer rounded-full border border-black '
        src={logo} alt="logo" /> */}
                            <h1 className='text-center text-4xl mb-10'>Just one step left!</h1>
                            <div
                                className='flex flex-col justify-center items-center space-y-8'>
                                <div className='flex justify-between items-center w-full space-x-12'>
                                    <input
                                        value={name}
                                        type="text" placeholder="Name" className='placeholder:text-gray-600 px-4 py-2 outline-none border border-gray-800 w-64'
                                        onChange={(event) => { setName(event.target.value) }}
                                    />
                                    <input
                                    
                                        type="text"
                                        value={contact}
                                        placeholder="Contact" className='placeholder:text-gray-600 px-4 py-2  outline-none border border-gray-800 w-64'
                                        onChange={(event) => { setContact(event.target.value) }}
                                    />
                                </div>
                                <div className='flex justify-between items-center w-full '>
                                    <input
                                        type="email" placeholder="Email address" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64 '
                                        value={email}
                                        onChange={(event) => { setEmail(event.target.value) }}
                                    />
                                    <input
                                        type="description" placeholder="City" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64'
                                        onChange={(event) => { setCity(event.target.value) }}
                                    />
                                </div>
                          
                                <div className='flex justify-between items-center w-full '>

                                    <input
                                        type="password" placeholder="Password" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64'
                                        onChange={(event) => { setPassword(event.target.value) }}

                                        
                                    />
                                    <input
                                        type="password" placeholder="Confirm Password" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64'
                                        onChange={(event) => { setConfirmPassword(event.target.value) }}
                                    />
                                </div>

                        
                                <div className='flex justify-center items-center space-x-24'>
                                    <button class=" mt-10 hover:transition hover:duration-150 hover:ease-in-out hover:scale-105 px-12 py-4 rounded-lg bg-blue-800 text-gray-200">Signup</button>
                                </div>
                            </div>
                        </div>
                    </div>


        </>

    )
}

export default Mainpage