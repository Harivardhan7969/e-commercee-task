import {
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup
} from "@mui/material";
import { teal } from "@mui/material/colors";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { colors } from "../../data/Filter/color";
import { price } from "../../data/Filter/price";
import { discount } from "../../data/Filter/discount";
import { size } from "../../data/Filter/sizes";

const FilterSection = () => {
    const [expandColor, setExpandColor] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleToggleColor = () => {
        setExpandColor(!expandColor);
    };

    const updateFilterParams = (e) => {
        const { value, name } = e.target;
        if (value) {
            searchParams.set(name, value);
        } else {
            searchParams.delete(name);
        }
        setSearchParams(searchParams);
    };

    const clearAllFilters = () => {
        searchParams.forEach((_, key) => {
            searchParams.delete(key);
        });
        setSearchParams(searchParams);
    };

    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-9">
            <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-[50px] py-4 sm:py-0 border-b lg:border-r">
                <p className="text-lg font-semibold text-gray-800">Filter</p>
                <Button
                    onClick={clearAllFilters}
                    size="medium"
                    className="text-teal-600 font-semibold mt-2 sm:mt-0"
                >
                    Clear All
                </Button>
            </div>

            <div className="py-4 space-y-6">


                {/* Size Filter */}
                <section>
                    <FormControl>
                        <FormLabel
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                pb: "14px",
                                color: teal[500],
                            }}
                            className="text-xl font-semibold"
                            id="size"
                        >
                            Size
                        </FormLabel>
                        <RadioGroup
                            name="size"
                            onChange={updateFilterParams}
                        >
                            {size.map((item) => (
                                <FormControlLabel
                                    key={item.name}
                                    value={item.value}
                                    control={<Radio size="small" />}
                                    label={item.name}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </section>
                <Divider />

                {/* Color Filter */}
                <section>
                    <FormControl>
                        <FormLabel
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: teal[500],
                                pb: "14px",
                            }}
                            className="text-xl font-semibold text-center sm:text-left mt-4"
                            id="color"
                        >
                            Colors
                        </FormLabel>
                        <RadioGroup
                            name="color"
                            onChange={updateFilterParams}
                        >
                            {colors
                                .slice(0, expandColor ? colors.length : 5)
                                .map((item, index) => (
                                    <FormControlLabel
                                        key={index}
                                        value={item.name}
                                        control={<Radio />}
                                        label={
                                            <div className="flex items-center gap-3">
                                                <p>{item.name}</p>
                                                <span
                                                    style={{ backgroundColor: item.hex }}
                                                    className={`h-5 w-5 rounded-full ${item.name === "White" ? "border" : ""}`}
                                                />
                                            </div>
                                        }
                                    />
                                ))}
                        </RadioGroup>
                    </FormControl>
                    <button
                        onClick={handleToggleColor}
                        className="text-teal-600 font-medium hover:text-teal-500 mt-2 ml-1"
                    >
                        {expandColor ? "Hide" : `+${colors.length - 5} more`}
                    </button>
                </section>

                <Divider />

                {/* Price Filter */}
                <section>
                    <FormControl>
                        <FormLabel
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                pb: "14px",
                                color: teal[600],
                            }}
                            className="text-xl font-semibold"
                            id="price"
                        >
                            Price
                        </FormLabel>
                        <RadioGroup
                            name="price"
                            onChange={updateFilterParams}
                        >
                            {price.map((item) => (
                                <FormControlLabel
                                    key={item.name}
                                    value={item.value}
                                    control={<Radio size="small" />}
                                    label={item.name}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </section>

                <Divider />

                {/* Discount Filter */}
                <section>
                    <FormControl>
                        <FormLabel
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                pb: "14px",
                                color: teal[600],
                            }}
                            className="text-xl font-semibold"
                            id="discount"
                        >
                            Discount
                        </FormLabel>
                        <RadioGroup
                            name="discount"
                            onChange={updateFilterParams}
                        >
                            {discount.map((item) => (
                                <FormControlLabel
                                    key={item.name}
                                    value={item.value}
                                    control={<Radio size="small" />}
                                    label={item.name}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </section>
            </div>
        </div>
    );
};

export default FilterSection;
