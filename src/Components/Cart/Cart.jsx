import CartItem from './CartItem';
import PricingCard from './PricingCard';
import { Close, FavoriteBorder, LocalOffer } from '@mui/icons-material';
import { Button, IconButton, TextField } from '@mui/material';
import { teal } from '@mui/material/colors';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartCount, setCartCount }) => {
    const [coupon, SetCoupon] = useState("");

    const handleChange = (event) => {
        SetCoupon(event.target.value);
    };

    return (
        <div className="pt-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Section */}
                <div className="space-y-4 lg:col-span-2">
                    {cartCount.map((item, index) => (
                        <CartItem
                            key={item.id || index}
                            item={item}
                            cartCount={cartCount}
                            setCartCount={setCartCount}
                        />
                    ))}
                </div>

                {/* Right Section */}
                <div className="space-y-4">
                    {/* Coupon Box */}
                    <div className="border rounded-md p-4 space-y-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <LocalOffer sx={{ color: teal[600], fontSize: "18px" }} />
                            <span>Apply Coupon</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TextField
                                onChange={handleChange}
                                label="Coupon Code"
                                variant="outlined"
                                size="small"
                                fullWidth
                            />
                            <Button size="small" variant="text" color="primary">APPLY</Button>
                        </div>
                    </div>

                    {/* Pricing & Checkout */}
                    <div className="border rounded-md">
                        <PricingCard cartCount={cartCount} />
                        <div className="p-4">
                            <Link to="/checkout">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ py: 1.5 }}
                                    className="rounded-lg text-white text-base"
                                >
                                    BUY NOW
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Wishlist CTA */}
                    <div className="flex items-center justify-between border rounded-md p-4 text-gray-700 text-sm">
                        <span>Add From Wishlist</span>
                        <IconButton className="hover:text-red-600 hover:scale-110 transition duration-300">
                            <FavoriteBorder />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
