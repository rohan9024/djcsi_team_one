import React, { useEffect, useState } from 'react'
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
import Image from 'next/image'


// import starterVideo from "../assets/starterVideo.mp4"
import next from "../assets/next.svg"
import { useRouter } from 'next/router'
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700']
})
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import { RecaptchaVerifier } from 'firebase/auth'

function third() {
    const router = useRouter()

    const [recommended, setRecommended] = useState(true)
    const [trending, setTrending] = useState(false)
    const [combos, setCombos] = useState(false)
    const [recommendedData, setRecommendedData] = useState([])

    const [More, setMore] = useState(false)

    useEffect(() => {

        async function getData() {
            const q = query(collection(db, "recommended"));

            const querySnapshot = await getDocs(q);
            const formattedData = [];
            const data = querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                formattedData.push(doc.data());
                // console.log(doc.id, " => ", doc.data());
            });
            console.log('formattedData', formattedData)
            setRecommendedData(formattedData)
        }
        getData()
    }, [])

    return (
        More ?
            (<div className={`${poppins.className} && 'text-black bg-[#E2C2AA] h-full min-h-screen w-screen -ml-12'`}>
                <div className='flex justify-between p-10 ml-64'>
                    <Image
                        src={close}
                        width={20}
                        height={20}
                        contain
                        className=''
                        onClick={() => setMore(false)}
                    />
                </div>
             


                <div className='flex flex-col justify-center items-center text-xl space-y-12'>
                    <h1 onClick={() => router.push('menu')}>View Menu </h1>
                    <h1 onClick={() => router.push('offers')}>Explore Offers </h1>
                    <h1>My Points</h1>
                    <h1>Contact Us </h1>
                    <h1>Know More About Us </h1>
                </div>
            </div>)
            :
            (<div className={`${poppins.className} && 'text-black bg-[#E2C2AA] h-full min-h-screen w-screen -ml-12'`}>


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
                    />
                    <Image
                        src={more}
                        width={20}
                        height={20}
                        contain
                        className=''
                        onClick={() => setMore(true)}
                    />
                </div>

                <h1 className='text-2xl  text-center mt-10'>Smooth Out Your Everyday</h1>
                <div className='flex justify-center items-center mt-10 overflow-x-scroll mx-auto gap-8 '>
                    <Image
                        src={img12}
                        width={300}
                        height={300}
                        cover
                        className='rounded-lg shadow-2xl'
                        onClick={() => router.push('imagedetail')}
                    />
                    <Image
                        src={img12}
                        width={300}
                        height={300}
                        cover
                        className='rounded-lg shadow-2xl'
                        onClick={() => router.push('imagedetail')}
                    />
                    <Image
                        src={img12}
                        width={300}
                        height={300}
                        cover
                        className='rounded-lg shadow-2xl'
                        onClick={() => router.push('imagedetail')}
                    />
                    <Image
                        src={img12}
                        width={300}
                        height={300}
                        cover
                        className='rounded-lg shadow-2xl'
                        onClick={() => router.push('imagedetail')}
                    />

                </div>


                {/* Links */}
                <div className='flex justify-center items-center mt-10'>
                    <h1
                        onClick={() => {
                            setRecommended(true)
                            setTrending(false)
                            setCombos(false)
                        }}
                        className={`p-2 ${recommended && 'bg-[#DEAD84]'} rounded-full text-black`}>Recommended</h1>
                    <h1
                        onClick={() => {
                            setRecommended(false)
                            setTrending(true)
                            setCombos(false)
                        }}
                        className={`p-2 ${trending && 'bg-[#DEAD84]'} rounded-full text-black`}>Trending</h1>
                    <h1
                        onClick={() => {
                            setRecommended(false)
                            setTrending(false)
                            setCombos(true)
                        }}
                        className={`p-2 ${combos && 'bg-[#DEAD84]'} rounded-full text-black`}>Combos</h1>
                </div>

                <div className='grid grid-cols-2 gap-8 ml-10 mr-10 pb-10 mt-10 '>
                    {
                        recommended &&
                        recommendedData.length > 0 && recommendedData.map((dish) => (
                            <div key={dish.id}>
                                <div className='flex flex-col h-40 justify-center items-center relative mb-3'>
                                    <Image
                                        src={dish.image}
                                        fill
                                        className='rounded-lg shadow-lg'
                                        onClick={() => router.push('imagedetail')}
                                    />
                                </div>
                                <h1>{dish.name}</h1>
                                <h1 className="text-sm">Rs.{dish.price}</h1>
                            </div>
                        ))
                    }
                </div>

                {
                    trending && (
                        <div className='grid grid-cols-2 gap-8 ml-10 mr-10 pb-10 mt-10'>
                            <div className='flex flex-col justify-center items-center relative'>
                                <Image
                                    src={img8}
                                    fill
                                    className='rounded-lg shadow-lg'
                                    onClick={() => router.push('imagedetail')}
                                />
                            </div>
                            <div className='flex justify-center items-center '>
                                <Image
                                    src={img9}
                                    width={300}
                                    height={300}
                                    cover
                                    className=' rounded-lg shadow-lg'
                                    onClick={() => router.push('imagedetail')}
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image
                                    src={img10}
                                    width={300}
                                    height={300}
                                    cover
                                    className='rounded-lg shadow-lg'
                                    onClick={() => router.push('imagedetail')}
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image
                                    src={img11}
                                    width={300}
                                    height={300}
                                    cover
                                    className='rounded-lg shadow-lg'
                                    onClick={() => router.push('imagedetail')}
                                />
                            </div>
                        </div>
                    )
                }
                {
                    combos && (
                        <div className='grid grid-cols-2 gap-8 ml-10 mr-10 pb-10 mt-10'>
                            <div className='flex flex-col justify-center items-center relative'>
                                <Image
                                    src={img12}
                                    fill
                                    className='rounded-lg shadow-lg'
                                    onClick={() => router.push('imagedetail')}
                                />
                            </div>
                            <div className='flex justify-center items-center '>
                                <Image
                                    src={img5}
                                    width={300}
                                    height={300}
                                    cover
                                    className=' rounded-lg shadow-lg'
                                    onClick={() => router.push('imagedetail')}
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image
                                    src={img6}
                                    width={300}
                                    height={300}
                                    cover
                                    className='rounded-lg shadow-lg'
                                    onClick={() => router.push('imagedetail')}
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image
                                    src={img7}
                                    width={300}
                                    height={300}
                                    cover
                                    className='rounded-lg shadow-lg'
                                    onClick={() => router.push('imagedetail')}
                                />
                            </div>
                        </div>
                    )
                }

            </div>)
    )
}

export default third