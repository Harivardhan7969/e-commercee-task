const DealCard = ({ item }) => {
    return (
        <div className='px-2'>
            <div className='rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 cursor-pointer'>
                <img
                    className='w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover object-top border-t-4 border-x-4 border-pink-600'
                    src={item?.imageUrls[0]}
                    alt={item?.name}
                />
                <div className='p-3 bg-black text-white text-center border-4 border-black'>
                    <p className='text-sm sm:text-base md:text-lg font-semibold truncate'>
                        {item?.name}
                    </p>
                    <p className='text-sm sm:text-base md:text-lg font-bold'>
                        {item?.discountPercentage}% OFF
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DealCard;
