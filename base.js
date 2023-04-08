{recommendedData.length > 0 && recommendedData.map((dish) => (
    <div className='grid grid-cols-2 gap-8 ml-10 mr-10 pb-10 mt-10'>
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
            <h1>{dish.price}</h1>
        </div>
    </div>
))}