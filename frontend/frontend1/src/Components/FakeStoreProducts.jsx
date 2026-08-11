import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FakeStoreProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Fake Store products:", error);
      });
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Fake Store Products
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              rating: product.rating.rate,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FakeStoreProducts;