import { Favorite, ModeComment } from '@mui/icons-material';
import { Button } from '@mui/material';
import { teal } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const SimilarProdutCard = ({ product }) => {
    const [currentImage, setCurretImage] = useState(0);
    const [isHovered, setIsovered] = useState(false);


    useEffect(() => {

        let interval;

        if (isHovered) {
            interval = setInterval(() => {
                setCurretImage((prevImage) => (prevImage + 1) % product.imageUrls.length)
            }, 1000)

        } else if (interval) {
            clearInterval(interval);
            interval = null;
        }
        return () => clearInterval(interval);

    }, [isHovered])
    return (
        <>
            <Link to={`/product-details`}>
                <div className="group px-4 relative">
                    <div
                        onMouseEnter={() => {
                            setCurretImage(currentImage + 1);
                            setIsovered(true)
                        }
                        }
                        onMouseLeave={() => {
                            setIsovered(false)
                            setCurretImage(0)
                        }}
                        className="card">
                        {/* {

                    images.map((item, index) =>

                        <img
                            className=" card-media object-top rounded-lg"
                            style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}

                            src={item} />

                    )
                } */}

                        {
                            product.imageUrls.map((item, index) =>

                                <img
                                    className=" card-media object-top rounded-lg"
                                    style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}

                                    src={item} />

                            )
                        }


                        {
                            isHovered && <div className='indicator flex flex-col items-center space-y-2'>
                                <div className='flex gap-3 '>
                                    <Button variant='contained' color='secondary'>
                                        <Favorite sx={{ color: teal[500] }} />
                                    </Button>
                                    <Button variant='contained' color='secondary'>
                                        <ModeComment sx={{ color: teal[500] }} />
                                    </Button>
                                </div>
                            </div>

                        }
                    </div>
                    <div className='details pt-2 space-y-1 group-hover-effect rounded-md   '>
                        <div className='name '>
                            <h1>
                                {product.name}
                            </h1>
                            <p>{product.color}</p>
                        </div>
                        <div className='price flex items-center gap-3'>
                            <span className='font-snas text-gray-800'>
                                ₹ {product.price}
                            </span>
                            <span className='thin-line-through text-gray-400'>
                                ₹  {product.maxPrice}
                            </span>
                            <span className='text-primary-color font-semibold'>
                                {product.discountPercentage}%
                            </span>
                        </div>
                    </div>

                </div>

            </Link>

        </>
    )
}

export default SimilarProdutCard