
import ReviewCard from './ReviewCard'
import {  Divider } from '@mui/material'
import RatingCard from './RatingCard'

const Review = () => {
    return (
        <>
            <div className='p-5 lg:px-20 flex flex-col lg:flex-row  gap-20'>
                <section className='w-full md:w-1/2 lg:w-[30%] space-y-2'>
                    <img className='rounded-md' src='https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_900x1350_crop_center@2x.jpg?v=1696051144' />
                    <div>
                        <div className='space-y-1'>
                            <h1 className='text-xl font-bold' >Ram Clothing</h1>
                            <p className='text-lg text-gray-600'>Men's white shirt</p>
                            <div className=''>
                                <div className='price flex items-center  gap-3 text-xl my-3 '>
                                    <span className='font-sans text-gray-800'>
                                        $400
                                    </span>
                                    <span className='line-through text-gray-400'>
                                        $900
                                    </span>
                                    <span className='text-primary-color font-semibold'>
                                        60%
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='w-full'>
                    <RatingCard />
                    <div className='space-y-5'>
                        {
                            [1, 1, 1].map(() => <div className='space-y-2'><ReviewCard /> <Divider /></div>)
                        }
                    </div>

                </section>

            </div>
        </>
    )
}

export default Review