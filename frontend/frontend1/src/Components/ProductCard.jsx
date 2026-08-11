import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        minHeight: 500,
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="280"
        image={product.image}
        alt={product.title}
        sx={{
          objectFit: "contain",
          padding: 2,
        }}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 1,
          }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 1,
          }}
        >
          ₹{product.price}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
          }}
        >
          ⭐ {product.rating} / 5
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            marginTop: "auto",
          }}
        >
          <Button
            variant="contained"
            onClick={() => onEdit(product)}
            sx={{
              flex: 1,
              backgroundColor: "#0F5132",
              "&:hover": {
                backgroundColor: "#083C24",
              },
            }}
          >
            Edit
          </Button>

          <Button
            variant="outlined"
            onClick={() => onDelete(product._id)}
            sx={{
              flex: 1,
              borderColor: "#c62828",
              color: "#c62828",
              "&:hover": {
                borderColor: "#8e0000",
                backgroundColor: "#ffebee",
              },
            }}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;