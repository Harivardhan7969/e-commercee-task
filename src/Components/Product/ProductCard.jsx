import { useEffect, useState } from 'react';
import './ProductCard.css'
import { Button } from '@mui/material';
import { AddShoppingCart, Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';


import { Link, useNavigate } from 'react-router-dom';

const images = [

    "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
    "https://tse2.mm.bing.net/th?id=OIP.df7JqpVO6H46cY4T_E8OvwHaJQ&w=474&h=474&c=7",
    "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
    "https://tse2.mm.bing.net/th?id=OIP.df7JqpVO6H46cY4T_E8OvwHaJQ&w=474&h=474&c=7",
    "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
    "https://tse2.mm.bing.net/th?id=OIP.df7JqpVO6H46cY4T_E8OvwHaJQ&w=474&h=474&c=7"



];

// interface ProductCardProps {
//     product: Product;
// }

const ProductCard = ({ product, addToCart }) => {




    const [currentImage, setCurretImage] = useState(0);
    const [isHovered, setIsovered] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {

        let interval;

        if (isHovered) {
            interval = setInterval(() => {
                setCurretImage((prevImage) => (prevImage + 1) % images.length)
            }, 1000)

        } else if (interval) {
            clearInterval(interval);
            interval = null;
        }
        return () => clearInterval(interval);

    }, [isHovered]);



    return (
        <>
            {/* <Link to={`/product-details`}> */}
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


                    {
                        product.imageUrls.map((item, index) =>
                            <div onClick={() => navigate(`/product-details/${product.id}`)}>
                                <img key={index}
                                    className=" card-media object-top rounded-lg"
                                    style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}

                                    src={item} />
                            </div>

                        )
                    }


                    {
                        isHovered && <div className='indicator flex flex-col items-center space-y-2'>
                            <div className='flex gap-3 '>
                                <Button variant="contained"
                                    sx={{
                                        backgroundColor: 'white',
                                        color: teal[500],
                                        boxShadow: 1,
                                        '&:hover': {
                                            backgroundColor: '#f0f0f0',
                                        },
                                    }}>
                                    <Favorite sx={{ color: teal[500] }} />
                                </Button>
                                <Button onClick={() => addToCart(product)}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'white',
                                        color: teal[500],
                                        boxShadow: 1,
                                        '&:hover': {
                                            backgroundColor: '#f0f0f0',
                                        },
                                    }}
                                >
                                    <AddShoppingCart sx={{ color: teal[500] }} />
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

            {/* </Link> */}

        </>
    )
}

export default ProductCard



