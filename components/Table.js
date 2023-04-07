import React from 'react'

function Table() {
  return (
    <div>
         <div className='select-none flex flex-col justify-center items-center space-y-12 mt-5 bg-red-200 p-10 text-black rounded-lg' >
                        <div className='flex items-center w-full font-bold text-lg'>
                            <h1 className='w-12 mr-14'>Sr.No.</h1>
                            <h1 className='w-72 text-left mr-12'>Name</h1>
                            <h1 className='w-96 mr-12'>Managers</h1>
                            <h1 className=''>Actions</h1>
                        </div>

                        {
                            influencers.filter(influencer => {
                                if (query === '') {
                                    return influencer;
                                } else if (influencer.name.toLowerCase().includes(query.toLowerCase())) {
                                    return influencer;
                                }
                            }).map((influencer, index) => (
                                <div key={influencer.id} className="flex justify-around items-center  cursor-pointer " >
                                    <div className='w-12 text-center mr-12'>
                                        <h1>{count++}</h1>
                                    </div>
                                    <div className='flex justify-center items-center w-64'>
                                        <div className='flex justify-center items-center w-[60px] mr-3'>
                                            {influencer.imgUrl ? (
                                                <img src={influencer.imgUrl} alt="pfp" className=' w-[60px] h-[56px] rounded-full object-cover' />
                                            ) : (
                                                <img src={avatar} alt="avatar" className=' w-[60px] h-[60px] rounded-full object-cover' />
                                            )}
                                        </div>
                                        <div className='flex flex-col items-center '>
                                            <h1 className='text-left text-lg w-44 font-bold'>{influencer.name}</h1>
                                            <h1 className='text-left text-lg w-44 text-gray-800 '>{influencer.username}</h1>
                                        </div>
                                    </div>


                                    <div className=' flex justify-around items-center text-lg w-64 text-center mr-20'>
                                        {influencer.managers.map((manager) => (
                                            <div className='p-3 ' key={manager}>
                                                <h1 className='text-lg'>{manager}</h1>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex justify-around items-center w-[400px]'>
                                        <div className=' w-44 flex justify-around items-center cursor-pointer' onClick={() => removei(influencer)}>
                                            <img src={remove} alt="remove" className='w-5 h-5 ' />
                                            <h1>Remove Influencer</h1>
                                        </div>
                                        <div className=' w-36 flex justify-around items-center cursor-pointer' onClick={() => setModal(influencer)}>
                                            <img src={editImg} alt="editImg" className='w-5 h-5' />
                                            <h1>Edit Managers</h1>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div >
    </div>
  )
}

export default Table