import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardMedia, Typography, Modal, Box, Button } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [quickView, setQuickView] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=6")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 m-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="hover:shadow-lg cursor-pointer"
            sx={{ width: 250, height: 300 }}
            onClick={() => setQuickView(product)}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{
                height: 160,
                width: "100%",
                objectFit: "contain",
                padding: "10px"
              }}
            />
            <CardContent className="px-3">
              <Typography className="font-bold text-2xl text-primary truncate">
                {product.title}
              </Typography>
              <Typography className="mt-1 font-bold text-green-600">
                ${product.price}
              </Typography>
            </CardContent>

          </Card>
        ))}
      </div>

      {/* Modal for Quick View */}
      <Modal open={!!quickView} onClose={() => setQuickView(null)}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] lg:w-[40%] bg-white p-6 rounded-lg shadow-lg">
          {quickView && (
            <>
              <img src={quickView.image} alt={quickView.title} className="w-full h-60 object-contain mb-4" />
              <Typography variant="h6">{quickView.title}</Typography>
              <Typography variant="body2" className="my-2">{quickView.description}</Typography>
              <Typography variant="h6" color="primary">${quickView.price}</Typography>
              <Button variant="contained" onClick={() => setQuickView(null)} className="mt-4">Close</Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Products;
