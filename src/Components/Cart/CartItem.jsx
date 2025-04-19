import { Add, Close, Remove } from '@mui/icons-material';
import { Button, Divider, IconButton } from '@mui/material';
import { useState } from 'react';

const CartItem = ({ item, cartCount, setCartCount }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    const removeFromCart = (item) => {
        const index = cartCount.findIndex(product => product.id === item.id);
        if (index !== -1) {
            const updatedCart = [...cartCount.slice(0, index), ...cartCount.slice(index + 1)];
            setCartCount(updatedCart);
        }
    };


    return (
        <div className="border rounded-md relative bg-white shadow-sm">
            {/* Product Info */}
            <div className="p-4 flex flex-col sm:flex-row sm:items-start sm:gap-4">
                <div className="w-full sm:w-[100px] flex-shrink-0 mb-3 sm:mb-0">
                    <img
                        src={item?.imageUrls[1]}
                        alt={item?.name}
                        className="w-full h-auto rounded-md object-contain"
                    />
                </div>

                <div className="flex flex-col space-y-2 text-sm sm:text-base">
                    <h1 className="font-semibold text-lg text-gray-800">{item?.name}</h1>
                    <p className="text-gray-600">{item?.subBrand}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                        <strong>Sold by:</strong> Natural Lifestyle Products Pvt Ltd
                    </p>
                    <p className="text-sm text-gray-700">7 days replacement available</p>
                    <p className="text-sm text-gray-500">
                        <strong>Quantity Available:</strong> 5
                    </p>
                </div>
            </div>

            <Divider />

            {/* Quantity and Price */}
            <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                    <Button
                        onClick={decreaseQuantity}
                        disabled={quantity === 1}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 min-w-0"
                    >
                        <Remove className="text-primary-color" />
                    </Button>
                    <span className="text-base font-medium text-gray-900">{quantity}</span>
                    <Button
                        onClick={increaseQuantity}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 min-w-0"
                    >
                        <Add className="text-primary-color" />
                    </Button>
                </div>

                {/* Price */}
                <div className="text-lg font-semibold text-gray-800">
                    ₹{quantity * item?.price}
                </div>
            </div>

            {/* Remove Button */}
            <div className="absolute top-2 right-2">
                <IconButton
                    onClick={() => removeFromCart(item)}
                    className="hover:text-red-500 transition duration-300"
                >
                    <Close className="text-primary-color hover:text-red-600" />
                </IconButton>
            </div>
        </div>
    );
};

export default CartItem;
