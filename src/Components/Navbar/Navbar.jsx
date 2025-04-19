import { Avatar, Badge, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ cartCount }) => {



    const navigate = useNavigate();
    return (
        <Box className="sticky top-0 left-0 right-0 bg-white shadow z-50">
            <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 h-[60px] sm:h-[70px]">

                {/* Left Section */}
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-9 w-full max-w-[60%]">
                    {/* Logo and Menu */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <IconButton className="block lg:hidden hover:scale-105 transition duration-300">
                            <MenuIcon />
                        </IconButton>
                        <h1 className="text-xl sm:text-2xl font-semibold text-blue-600 cursor-pointer whitespace-nowrap transition duration-300 hover:text-opacity-80">
                            e-commerce
                        </h1>
                    </div>

                    {/* Categories */}
                    <ul className="hidden lg:flex items-center gap-4 font-medium text-gray-800">
                        {["Home", "Men", "Women", "Kids"].map((item) => (
                            <li
                                onClick={() => navigate("/e-commercee-task")}
                                key={item}
                                className="cursor-pointer hover:text-blue-600 hover:scale-105 transition duration-300"
                            >
                                {item}
                            </li>
                        ))}
                        <li className="cursor-pointer hover:text-blue-600 hover:scale-105 transition duration-300"
                            onClick={() => navigate('/api-products')}
                        >
                            API-DATA
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                    {/* Search */}
                    <IconButton className="text-blue-600 hover:bg-blue-100 hover:scale-110 transition duration-300 p-2">
                        <SearchIcon className="text-[20px] sm:text-[24px]" />
                    </IconButton>

                    {/* User */}
                    <Button
                        variant="outlined"
                        className="flex items-center gap-1 sm:gap-2 min-w-fit px-2 sm:px-3 transition duration-300 hover:shadow-md"
                    >
                        <Avatar sx={{ height: 26, width: 26 }} />
                        <span className="hidden sm:inline-block font-medium text-blue-600 text-sm sm:text-base">
                            User
                        </span>
                    </Button>

                    {/* Favorites */}
                    <IconButton className="hover:text-red-600 hover:scale-110 transition duration-300">
                        <FavoriteBorder className="text-[22px] sm:text-[26px] text-blue-600" />
                    </IconButton>

                    {/* Cart */}

                    <Badge badgeContent={cartCount.length} color="primary" >
                        <IconButton onClick={() => navigate('/cart')} className="hover:scale-110 transition duration-300 bg-white p-2 border rounded-full">
                            <AddShoppingCart className="text-[22px] sm:text-[26px] text-blue-600" />
                        </IconButton>
                    </Badge>

                    {/* Become Seller */}
                    <Button
                        startIcon={<Storefront />}
                        variant="outlined"
                        className="hidden lg:flex text-blue-600 whitespace-nowrap transition duration-300 hover:shadow-md hover:scale-105"
                    >
                        Become Seller
                    </Button>
                </div>
            </div>
        </Box>
    );
};

export default Navbar;
