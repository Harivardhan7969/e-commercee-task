import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import { useState } from 'react'

const CartItem = ({ item, cartCount, setCartCount }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = (product) => {
        setQuantity(prev => prev + 1);
        //setCartCount((prevItems) => [...prevItems, product]);
    }
    const decreaseQuantity = (item) => {
        setQuantity(prev => prev - 1);
        // setCartCount(cartCount.filter((product) => product.id !== item.id));
    }

    const removeFromCart = (item) => {
        setCartCount(cartCount.filter((product) => product.id !== item.id));
    };

    const addToCart = (product) => {
        setCartCount((prevItems) => [...prevItems, product]);
    };


    return (
        <div className='border rounded-md relative'>
            <div className='p-5 flex gap-3'>


                <div className=''>
                    <img className='rounded-md w-[100px] ' src={item.imageUrls[1]} />
                </div>
                <div className='space-y-2'>
                    <h1 className='font-semibold text-lg'>{item?.name}</h1>
                    <p className='text-gray-600 font-medium text-sm'>{item?.subBrand}</p>
                    <p className='text-gray-400 text-xs'><strong>Sold by:</strong> Natural lifestyle Prdoucts private limited</p>
                    <p className='text-sm'>7 days   replacement available</p>
                    <p className='text-sm  text-gray-500'><strong>Quantity :</strong> 5</p>
                </div>




            </div>
            <Divider />
            <div className="flex items-center justify-between px-5 py-3 bg-white shadow-md rounded-lg">
                {/* Quantity Selector */}
                <div className="flex items-center gap-3">
                    <Button onClick={() => decreaseQuantity(item)} disabled={quantity === 1} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
                        <Remove className="text-primary-color" />
                    </Button>
                    <span className="text-lg font-semibold text-gray-900">{quantity}</span>
                    <Button onClick={() => increaseQuantity(item)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
                        <Add className="text-primary-color" />
                    </Button>
                </div>

                {/* Price Section */}
                <div>
                    <p className="text-xl font-semibold text-gray-900">₹{quantity * item?.price}</p>
                </div>

            </div>
            <div className="absolute top-2 right-2">
                <IconButton onClick={() => removeFromCart(item)} className="p-1  hover:text-red-500 transition duration-300">
                    <Close className='text-primary-color hover:text-red-500 ' />
                </IconButton>
            </div>

        </div>
    )
}

export default CartItem