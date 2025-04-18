import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material'
import { Button, Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { teal } from '@mui/material/colors'
import { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';

import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Review/ReviewCard';
import { useParams } from 'react-router-dom';
import { products } from '../../data/Products/products';


function ProductDetails({ setCartCount }) {
    const { id } = useParams();
    const [size, setSize] = useState();

    const product = products.find((item) => item?.id.toString() === id);

    if (!product) {
        return <div className="p-10 text-center text-red-500">Product not found</div>;
    }

    const [quantity, setQuantity] = useState(1);
   


    const addToCart = (products) => {
        setCartCount((prevItems) => [...prevItems, products]);
    };


    return (
        <>
            <div className='px-5 lg:px-16 pt-10'>
                <div className='grid  grid-cols-1 lg:grid-cols-2 gap-10 '>
                    <section className='  flex flex-col lg:flex-row gap-3'>
                        <div className=' w-full flex flex-wrap lg:flex-col  lg:w-[15%] gap-3'>
                            {
                                product.imageUrls.map((item, index) => <  img className='lg:w-full w-[50px] rounded-md cursor-pointer' src={item} alt='no image' />
                                )
                            }
                        </div>
                        <div className='w-full  lg:w-[85%]'>

                            <img className='w-full rounded-md cursor-pointer ' src={product?.imageUrls[0]} />
                        </div>
                    </section>

                    <section >
                        <h1 className='font-bold text-lg text-primary-color '>
                            {product?.name}
                        </h1>
                        <p className='text-gray-500 font-semibold mt-2'>{product?.subBrand}</p>
                        <div className='flex justify-between items-center py-2 border w-[180px]  px-2 my-3'>
                            <div className='flex gap-1 items-center'>
                                <span>4</span>
                                <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />

                            </div>
                            <Divider orientation='vertical' flexItem />
                            <span>
                                234 Ratings
                            </span>
                        </div>
                        <div className=''>
                            <div className='price flex items-center  gap-3 text-xl my-3 '>
                                <span className='font-sans text-gray-800'>
                                    ${product.price}
                                </span>
                                <span className='line-through text-gray-400'>
                                    ${product.minPrice}
                                </span>
                                <span className='text-primary-color font-semibold'>
                                    {product.discountPercentage}%
                                </span>
                            </div>
                            <p className=' font-sm'>Inclisive all taxes free shipping</p>
                        </div>
                        <div className='my-5 space-y-3'>
                            <div className='flex items-center gap-4'>
                                <Shield sx={{ color: teal[500] }} />
                                <p>Authentic & ulaity  Assured</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <WorkspacePremium sx={{ color: teal[500] }} />
                                <p>100% money back guarantee</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <LocalShipping sx={{ color: teal[500] }} />
                                <p>Free Shipping & Returns</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <Wallet sx={{ color: teal[500] }} />
                                <p>Pay on develivery might be available</p>
                            </div>

                        </div>
                        <div className='mt-5 space-y-2'>
                            <h1>SIZE</h1>
                            <div className='w-1/2'> {/* This sets the width to 50% */}
                                <FormControl fullWidth size="small">
                                    <InputLabel id="size-label">Select Size</InputLabel>
                                    <Select
                                        labelId="size-label"
                                        value={size}
                                        label="Select Size"
                                        onChange={(e) => setSize(e.target.value)}
                                    >
                                        <MenuItem value="M">M</MenuItem>
                                        <MenuItem value="L">L</MenuItem>
                                        <MenuItem value="XL">XL</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>




                        <div className='mt-5 space-y-2 '>
                            <h1>QUANTITY</h1>
                            <div className='border rounded-md flex items-center  gpa-2 w-[140px] justify-between'>
                                <Button disabled={quantity == 1} onClick={() => setQuantity(quantity - 1)} >
                                    <Remove />
                                </Button>
                                <span>
                                    {quantity}
                                </span>
                                <Button onClick={() => setQuantity(quantity + 1)} >
                                    <Add />
                                </Button>
                            </div>
                        </div>
                        <div className='mt-5 flex items-center gap-5 ' >
                            <Button
                                onClick={() => addToCart(product)}
                                fullWidth
                                variant='contained'
                                startIcon={<AddShoppingCart />}
                                sx={{ py: "0.5rem" }}


                            >



                                Add to Bag
                            </Button>
                            <Button
                                fullWidth

                                variant='outlined'
                                startIcon={<FavoriteBorder />}
                                sx={{ py: "0.5rem" }}
                            >

                                Add to Wish list
                            </Button>
                        </div>
                        <div className='mt-5'>
                            <h1 className='font-bold my-2'>Description</h1>
                            <p>

                                Look your class best in this banarasi saree. Carefully selected designs compliment the overall appeal of the saree. Easy to drape and comfortable to wear, this saree is all about blending style with comfort.           </p>
                        </div>
                        <div className='mt-7 space-y-2'>

                            <ReviewCard />


                            <Divider />
                        </div>

                    </section>
                </div>
                <div className='my-6'>
                    <h1 className='text-xl font-bold'>Similar Products</h1>

                    <div className='pt-5'>
                        {/* <SimilarProduct /> */}
                    </div>

                </div>

            </div>
        </>
    )
}

export default ProductDetails