

const DealCard = ({ item }) => {
    return (
        <div className='w-[10rem]  cursor-pointer'>
            <img
                className='border-x-[5px] border-t-[5px] border-pink-600 w-full h-[10rem] object-cover object-top'
                src={item?.imageUrls[0]} />
            <div className='p-2 border-4  border-black text-white bg-black text-center'>
                <p className='text-lg font-semibold'>{item?.name}</p>
                <p className='text-lg font-bold'>{item?.discountPercentage}% OFF</p>

            </div>
        </div>
    )
}

export default DealCard
