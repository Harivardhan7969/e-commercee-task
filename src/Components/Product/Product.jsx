
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
import Deal from "../Deal/Deal";




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



    const addToCart = (product) => {
        setCartCount((prevItems) => [...prevItems, product]);
    };

    return (
        <div className="   ">
            <div className="  mt-10">
                <h1 className="text-2xl text-center font-bold uppercase text-gray-700 pb-5 px-9 ">Women Sarees Slide</h1>
                <Deal />
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