import { FilterAlt } from "@mui/icons-material";
import FilterSection from "./FilterSection"
import ProductCard from "./ProductCard"
import { Box, Divider, IconButton, useMediaQuery, useTheme, Drawer } from "@mui/material";
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
    const [mobileFilterOpen, setMobileFilterOpen] = React.useState(false);

    const handleSortChange = (event) => setSort(event.target.value);
    const handlePageChange = (e, value) => setPage(value);
    const addToCart = (product) => {
       
            setCartCount(prev => [...prev, product]);
    

    }

    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-8">
            <div className="mb-10">
                <h1 className="text-2xl text-center font-bold uppercase text-gray-700 mb-6">Women Sarees Slide</h1>
                <Deal />
            </div>

            <div className="lg:flex gap-6">
                {/* Sidebar for large screens */}
                <aside className="hidden lg:block w-[22%]">
                    <FilterSection />
                </aside>

                {/* Mobile filter button and drawer */}
                <div className="lg:hidden flex justify-end mb-4">
                    <IconButton onClick={() => setMobileFilterOpen(true)}>
                        <FilterAlt />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={mobileFilterOpen}
                        onClose={() => setMobileFilterOpen(false)}
                    >
                        <Box className="w-64 p-4">
                            <FilterSection />
                        </Box>
                    </Drawer>
                </div>

                {/* Main Product Section */}
                <div className="w-full lg:w-[78%] space-y-6">
                    {/* Sorting dropdown */}
                    <div className="flex justify-end">
                        <FormControl size="small" sx={{ minWidth: 180 }}>
                            <InputLabel id="sort-label">Sort</InputLabel>
                            <Select
                                labelId="sort-label"
                                value={sort}
                                label="Sort"
                                onChange={handleSortChange}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={"price_low"}>Price: Low - High</MenuItem>
                                <MenuItem value={"price_high"}>Price: High - Low</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <Divider />

                    {/* Product grid */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                setCartCount={setCartCount}
                                addToCart={addToCart}
                            />
                        ))}
                    </section>

                    {/* Pagination */}
                    <div className="flex justify-center pt-10">
                        <Stack spacing={4}>
                            <Pagination
                                count={10}
                                variant="outlined"
                                color="primary"
                                onChange={handlePageChange}
                                sx={{
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
    );
};

export default Product;
