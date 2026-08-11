import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const AddProduct = ({ onClose }) => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    rating: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        {
          title: product.title,
          price: Number(product.price),
          image: product.image,
          rating: Number(product.rating),
        }
      );

      console.log("Product added successfully:", response.data);

      alert("Product added successfully!");

      setProduct({
        title: "",
        price: "",
        image: "",
        rating: "",
      });

      onClose();
    } catch (error) {
      console.error("Error adding product:", error);

      alert(
        error.response?.data?.message ||
          "Failed to add product"
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 500,
          padding: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#0F5132",
            mb: 3,
          }}
        >
          Add Product
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Product Name"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />

          <TextField
            label="Price"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            required
          />

          <TextField
            label="Image URL"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />

          <TextField
            label="Rating"
            name="rating"
            type="number"
            inputProps={{
              min: 0,
              max: 5,
              step: 0.1,
            }}
            value={product.rating}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#0F5132",
              fontWeight: "bold",
              py: 1.3,
              "&:hover": {
                backgroundColor: "#083C24",
              },
            }}
          >
            Add Product
          </Button>

          <Button
            type="button"
            variant="outlined"
            onClick={onClose}
            sx={{
              borderColor: "#0F5132",
              color: "#0F5132",
              fontWeight: "bold",
            }}
          >
            Cancel
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddProduct;