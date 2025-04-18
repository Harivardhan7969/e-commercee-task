
import { FilterAlt } from "@mui/icons-material";
import FilterSection from "./FilterSection"
import ProductCard from "./ProductCard"
import { Box, Divider, IconButton, useMediaQuery, useTheme } from "@mui/material";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { products } from "../../data/Products/products";



// const products = [
//     {
//         id: 1,
//         name: "Banarasi Silk Saree",
//         subBrand: "Royal Banarasi",
//         price: 5200,
//         minPrice: 4800,
//         maxPrice: 5500,
//         discountPercentage: 8,
//         color: "Red",
//         imageUrls: [
//             "https://tse2.mm.bing.net/th?id=OIP.df7JqpVO6H46cY4T_E8OvwHaJQ&w=474&h=474&c=7",
//             "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRwu1OFyzDyJe5abpNa2Ouaa_REzkwDxKlg&s",

//             "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
//             "https://www.vishalprints.in/cdn/shop/files/PEHNAWA-47260-01_3deafc35-17e5-4bb7-a90f-f4c6c12c0d3f.jpg?v=1719123007",

//         ]
//     },
//     {
//         id: 2,
//         name: "Kanjivaram Silk Saree",
//         subBrand: "South Indian Weaves",
//         price: 7600,
//         minPrice: 7200,
//         maxPrice: 8000,
//         discountPercentage: 10,
//         color: "Blue",
//         imageUrls: [
//             "https://ivalinmabia.com/cdn/shop/files/kamakshi-light-blue-shade-and-bright-tone-kanchi-cotton-saree-sarees-178.webp?v=1725382942&width=3840",
//             "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
//             "https://sareewave.com/cdn/shop/products/SJSundaramsilk103.jpg?v=1670919253&width=900",
//             "https://royalanarkali.com/wp-content/uploads/2024/08/Stylish-Royal-Blue-Color-Soft-Lichi-Silk-Jacquard-All-Over-Saree-2.jpeg",
//             "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
//         ]
//     },
//     {
//         id: 3,
//         name: "Chiffon Printed Saree",
//         subBrand: "Casual Comfort",
//         price: 3400,
//         minPrice: 3000,
//         maxPrice: 3800,
//         discountPercentage: 12,
//         color: "Green",
//         imageUrls: [
//             "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
//             "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
//             "https://lajreedesigner.com/cdn/shop/files/KP-6025_1_900x1350_crop_center@2x.jpg?v=1740388663",

//             "https://lajreedesigner.com/cdn/shop/products/ShrijiAvadh-Devratna-Green_4_900x1350_crop_center@2x.jpg?v=1663236988",
//             "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
//             "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
//             "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",

//         ]
//     },
//     {
//         id: 4,
//         name: "Organza Floral Saree",
//         subBrand: "Modern Chic",
//         price: 2900,
//         minPrice: 2600,
//         maxPrice: 3200,
//         discountPercentage: 15,
//         color: "Lavender",
//         imageUrls: [
//             "https://lajreedesigner.com/cdn/shop/files/Tasrika-Masakkali-Lavender_2_900x1350_crop_center@2x.jpg?v=1738224656",
//             "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
//             "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",
//             "https://assets.ajio.com/medias/sys_master/root/20240104/rqvY/6596b7b7ddf779151902a85e/-473Wx593H-466947788-lavender-MODEL3.jpg",
//             "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
//             "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",

//         ]
//     },
//     {
//         id: 5,
//         name: "Banarasi Silk Saree",
//         subBrand: "Royal Banarasi",
//         price: 5200,
//         minPrice: 4800,
//         maxPrice: 5500,
//         discountPercentage: 8,
//         color: "Red",
//         imageUrls: [
//             "https://tse2.mm.bing.net/th?id=OIP.df7JqpVO6H46cY4T_E8OvwHaJQ&w=474&h=474&c=7",
//             "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRwu1OFyzDyJe5abpNa2Ouaa_REzkwDxKlg&s",

//             "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
//             "https://www.vishalprints.in/cdn/shop/files/PEHNAWA-47260-01_3deafc35-17e5-4bb7-a90f-f4c6c12c0d3f.jpg?v=1719123007",

//         ]
//     },
//     {
//         id: 6,
//         name: "Kanjivaram Silk Saree",
//         subBrand: "South Indian Weaves",
//         price: 7600,
//         minPrice: 7200,
//         maxPrice: 8000,
//         discountPercentage: 10,
//         color: "Blue",
//         imageUrls: [
//             "https://ivalinmabia.com/cdn/shop/files/kamakshi-light-blue-shade-and-bright-tone-kanchi-cotton-saree-sarees-178.webp?v=1725382942&width=3840",
//             "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
//             "https://sareewave.com/cdn/shop/products/SJSundaramsilk103.jpg?v=1670919253&width=900",
//             "https://royalanarkali.com/wp-content/uploads/2024/08/Stylish-Royal-Blue-Color-Soft-Lichi-Silk-Jacquard-All-Over-Saree-2.jpeg",
//             "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
//         ]
//     },
//     {
//         id: 7,
//         name: "Chiffon Printed Saree",
//         subBrand: "Casual Comfort",
//         price: 3400,
//         minPrice: 3000,
//         maxPrice: 3800,
//         discountPercentage: 12,
//         color: "Green",
//         imageUrls: [
//             "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
//             "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
//             "https://lajreedesigner.com/cdn/shop/files/KP-6025_1_900x1350_crop_center@2x.jpg?v=1740388663",

//             "https://lajreedesigner.com/cdn/shop/products/ShrijiAvadh-Devratna-Green_4_900x1350_crop_center@2x.jpg?v=1663236988",
//             "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
//             "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
//             "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",

//         ]
//     },
//     {
//         id: 8,
//         name: "Organza Floral Saree",
//         subBrand: "Modern Chic",
//         price: 2900,
//         minPrice: 2600,
//         maxPrice: 3200,
//         discountPercentage: 15,
//         color: "Lavender",
//         imageUrls: [
//             "https://lajreedesigner.com/cdn/shop/files/Tasrika-Masakkali-Lavender_2_900x1350_crop_center@2x.jpg?v=1738224656",
//             "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
//             "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",
//             "https://assets.ajio.com/medias/sys_master/root/20240104/rqvY/6596b7b7ddf779151902a85e/-473Wx593H-466947788-lavender-MODEL3.jpg",
//             "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
//             "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",

//         ]
//     },
//     {
//         id: 9,
//         name: "Banarasi Silk Saree",
//         subBrand: "Royal Banarasi",
//         price: 5200,
//         minPrice: 4800,
//         maxPrice: 5500,
//         discountPercentage: 8,
//         color: "Red",
//         imageUrls: [
//             "https://tse2.mm.bing.net/th?id=OIP.df7JqpVO6H46cY4T_E8OvwHaJQ&w=474&h=474&c=7",
//             "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRwu1OFyzDyJe5abpNa2Ouaa_REzkwDxKlg&s",

//             "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
//             "https://www.vishalprints.in/cdn/shop/files/PEHNAWA-47260-01_3deafc35-17e5-4bb7-a90f-f4c6c12c0d3f.jpg?v=1719123007",

//         ]
//     },
//     {
//         id: 10,
//         name: "Kanjivaram Silk Saree",
//         subBrand: "South Indian Weaves",
//         price: 7600,
//         minPrice: 7200,
//         maxPrice: 8000,
//         discountPercentage: 10,
//         color: "Blue",
//         imageUrls: [
//             "https://ivalinmabia.com/cdn/shop/files/kamakshi-light-blue-shade-and-bright-tone-kanchi-cotton-saree-sarees-178.webp?v=1725382942&width=3840",
//             "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
//             "https://sareewave.com/cdn/shop/products/SJSundaramsilk103.jpg?v=1670919253&width=900",
//             "https://royalanarkali.com/wp-content/uploads/2024/08/Stylish-Royal-Blue-Color-Soft-Lichi-Silk-Jacquard-All-Over-Saree-2.jpeg",
//             "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
//         ]
//     },
//     {
//         id: 11,
//         name: "Chiffon Printed Saree",
//         subBrand: "Casual Comfort",
//         price: 3400,
//         minPrice: 3000,
//         maxPrice: 3800,
//         discountPercentage: 12,
//         color: "Green",
//         imageUrls: [
//             "https://lajreedesigner.com/cdn/shop/products/KP-3042-Green_3_900x1350_crop_center@2x.jpg?v=1676695147",
//             "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
//             "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
//             "https://lajreedesigner.com/cdn/shop/files/KP-6025_1_900x1350_crop_center@2x.jpg?v=1740388663",

//             "https://lajreedesigner.com/cdn/shop/products/ShrijiAvadh-Devratna-Green_4_900x1350_crop_center@2x.jpg?v=1663236988",
//             "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
//             "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
//             "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",

//         ]
//     },
//     {
//         id: 12,
//         name: "Organza Floral Saree",
//         subBrand: "Modern Chic",
//         price: 2900,
//         minPrice: 2600,
//         maxPrice: 3200,
//         discountPercentage: 15,
//         color: "Lavender",
//         imageUrls: [
//             "https://lajreedesigner.com/cdn/shop/files/Tasrika-Masakkali-Lavender_2_900x1350_crop_center@2x.jpg?v=1738224656",
//             "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
//             "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",
//             "https://assets.ajio.com/medias/sys_master/root/20240104/rqvY/6596b7b7ddf779151902a85e/-473Wx593H-466947788-lavender-MODEL3.jpg",
//             "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
//             "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",

//         ]
//     },


// ];


const Product = ({ setCartCount }) => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const [sort, setSort] = React.useState('');
    const [page, setPage] = React.useState(1);
    console.log(page);



    const handleChange = (event) => {
        setSort(event.target.value);
    };


    const handlePageChange = (e, value) => {
        console.log(e);

        setPage(value);
    }

    // const addToCart = () => {
    //     setCartCount((prevCount) => prevCount + 1); // Increase cart count
    // };

    const addToCart = (product) => {
        setCartCount((prevItems) => [...prevItems, product]);
    };

    return (
        <div className="   ">
            <div className="  mt-10">
                <h1 className="text-2xl text-center font-bold uppercase text-gray-700 pb-5 px-9 ">Women Sarees</h1>
            </div>
            <div className="lg:flex">
                <section className=" hidden lg:block w-[20%]">
                    <FilterSection />
                </section>


                <div className="w-full  lg:w-[80%] space-y-5 ">
                    <div className="flex justify-between items-center lg:px-9 ">
                        <div className="relative w-[50%]">
                            {
                                !isLarge && (<IconButton>
                                    <FilterAlt />
                                </IconButton>
                                )
                            }
                            {
                                !isLarge && (<Box>
                                    <FilterSection />
                                </Box>)
                            }
                        </div>
                        <FormControl sx={{ m: 0, minWidth: 170, height: 30 }} size="small">
                            <InputLabel id="demo-select-small-label ">Sort</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={sort}
                                label="Sort"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"price_low"}>Price : Low - High</MenuItem>
                                <MenuItem value={"price_high"}>Price : High - Low</MenuItem>

                            </Select>
                        </FormControl>

                    </div>
                    <Divider />
                    <section className="product_section grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                     gap-y-5 px-5 justify-center">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} setCartCount={setCartCount} addToCart={addToCart} />
                        ))}

                    </section>
                    <div className="flex justify-center py-10">
                        <Stack spacing={4}>

                            <Pagination
                                count={10}
                                variant="outlined"
                                color="primary"
                                onChange={(e, value) => handlePageChange(e, value)}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "20px",
                                    "& .MuiPaginationItem-root": {
                                        fontSize: "1.1rem",
                                        borderRadius: "8px",
                                        borderColor: "blue",
                                        color: "blue",
                                        "&:hover": {
                                            backgroundColor: "rgba(0, 0, 255, 0.1)",
                                        },
                                        "&.Mui-selected": {
                                            backgroundColor: "blue",
                                            color: "white",
                                            "&:hover": {
                                                backgroundColor: "darkblue",
                                            },
                                        },
                                    },
                                }}
                            />
                        </Stack>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product