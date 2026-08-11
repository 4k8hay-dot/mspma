import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const EditProduct = ({ product, onClose, onUpdated }) => {
  const [form, setForm] = useState({
    title: product.title,
    price: product.price,
    image: product.image,
    rating: product.rating,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3000/products/${product._id}`,
        {
          title: form.title,
          price: Number(form.price),
          image: form.image,
          rating: Number(form.rating),
        }
      );

      console.log(
        "Product updated successfully:",
        response.data
      );

      alert("Product updated successfully!");

      onUpdated();
    } catch (error) {
      console.error("Error updating product:", error);

      alert(
        error.response?.data?.message ||
          "Failed to update product"
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
          Edit Product
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
            value={form.title}
            onChange={handleChange}
            required
          />

          <TextField
            label="Price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
          />

          <TextField
            label="Image URL"
            name="image"
            value={form.image}
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
            value={form.rating}
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
            Save Changes
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

export default EditProduct;