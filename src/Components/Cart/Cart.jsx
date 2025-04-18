import CartItem from './CartItem'
import PricingCard from './PricingCard'

import { Close, FavoriteBorder, LocalOffer } from '@mui/icons-material'
import { Button, IconButton, TextField } from '@mui/material'
import { teal } from '@mui/material/colors'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cartCount,setCartCount }) => {

    const [coupon, SetCoupon] = useState("");
    console.log(coupon);

    const handleChange = (event) => {
        SetCoupon(event.target.value);
    }
    return (
        <>
            <div className=' pt-10 px-5 sm:px-10 md:px-40 min-h-screen'>
                <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className='cartItemSection   lg:col-span-2 space-y-3'>
                        {
                            cartCount.map((item) => {
                                console.log(item);

                                return <CartItem item={item} cartCount={cartCount} setCartCount={setCartCount} />
                            })
                        }
                    </div>

                    <div className=' text-sm col-span-1 space-y-3'>
                        <div className='border rounded-md px-5 py-3 space-y-5'>
                            <div className='flex gap-3 text-sm items-center'>
                                <div className='flex gap-3 text-sm items-center'>
                                    <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />
                                </div>
                                <span>Apply Coupon</span>

                            </div>
                            {
                                true ? <div className='flex justify-between items-center gap-1'>
                                    <TextField onChange={() => handleChange} label="Coupon Code" variant="outlined" size="small" fullWidth />
                                    <Button size='small' variant="text" color="primary" className="ml-2">APPLY</Button>
                                </div> :
                                    <div className='flex'>
                                        <div className='p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center'>
                                            <span>
                                                ECOM10 Applied
                                            </span>
                                            <IconButton size='small'>
                                                <Close className='text-red-600' />
                                            </IconButton>

                                        </div>

                                    </div>
                            }

                        </div>
                        <div className='border rounded-md'>
                            <PricingCard cartCount={cartCount } />
                            <div className="  p-2">
                                <Link to={`/checkout`} >
                                    <Button sx={{ py: "11px" }} variant="contained" color="primary" fullWidth className=" rounded-lg">
                                        BUY NOW
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className=" flex items-center justify-between border rounded-md p-3  text-gray-700">
                            <span>Add From Wishlist</span>
                            <IconButton className="   hover:text-red-700 hover:scale-110 transition duration-300">
                                <FavoriteBorder className="w-9 h-9 text-primary-color" />
                            </IconButton>
                        </div>

                    </div>

                </div>

            </div>

        </>

    )
}

export default Cart