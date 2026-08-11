import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import ProductList from "./ProductList";
import FakeStoreProducts from "./FakeStoreProducts";

const ProductDashboard = ({ onEditProduct, refreshProducts }) => {
  const [showFakeStore, setShowFakeStore] = useState(false);

  const handleMongoDBProducts = () => {
    setShowFakeStore(false);
  };

  const handleFakeStoreProducts = () => {
    setShowFakeStore(true);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 3,
          flexWrap: "wrap",
        }}
      >
        <Button
          variant={!showFakeStore ? "contained" : "outlined"}
          onClick={handleMongoDBProducts}
          sx={{
            backgroundColor: !showFakeStore
              ? "#0F5132"
              : "transparent",
            borderColor: "#0F5132",
            color: !showFakeStore
              ? "white"
              : "#0F5132",
            "&:hover": {
              backgroundColor: "#0F5132",
              color: "white",
            },
          }}
        >
          MongoDB Products
        </Button>

        <Button
          variant={showFakeStore ? "contained" : "outlined"}
          onClick={handleFakeStoreProducts}
          sx={{
            backgroundColor: showFakeStore
              ? "#0F5132"
              : "transparent",
            borderColor: "#0F5132",
            color: showFakeStore
              ? "white"
              : "#0F5132",
            "&:hover": {
              backgroundColor: "#0F5132",
              color: "white",
            },
          }}
        >
          Fake Store Products
        </Button>
      </Box>

      {showFakeStore ? (
        <FakeStoreProducts />
      ) : (
        <ProductList
          key={refreshProducts}
          onEditProduct={onEditProduct}
        />
      )}
    </>
  );
};

export default ProductDashboard;