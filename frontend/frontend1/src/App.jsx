import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import FakeStoreProducts from "./components/FakeStoreProducts";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function App() {
  const [showFakeStore, setShowFakeStore] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [refreshProducts, setRefreshProducts] = useState(0);

  // Open Add Product form
  const handleAddProduct = () => {
    setShowAddProduct(true);
    setSelectedProduct(null);
  };

  // Close Add Product form
  const handleCloseAddProduct = () => {
    setShowAddProduct(false);

    // Refresh MongoDB products after adding
    setRefreshProducts((prev) => prev + 1);
  };

  // Open Edit Product form
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setShowAddProduct(false);
  };

  // Close Edit Product form
  const handleCloseEditProduct = () => {
    setSelectedProduct(null);
  };

  // Refresh products after editing
  const handleProductUpdated = () => {
    setSelectedProduct(null);
    setRefreshProducts((prev) => prev + 1);
  };

  return (
    <>
      <Navbar onAddProduct={handleAddProduct} />

      {/* ADD PRODUCT */}
      {showAddProduct ? (
        <AddProduct onClose={handleCloseAddProduct} />
      ) : selectedProduct ? (
        /* EDIT PRODUCT */
        <EditProduct
          product={selectedProduct}
          onClose={handleCloseEditProduct}
          onUpdated={handleProductUpdated}
        />
      ) : (
        /* PRODUCT DASHBOARD */
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
              onClick={() => setShowFakeStore(false)}
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
              onClick={() => setShowFakeStore(true)}
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
              onEditProduct={handleEditProduct}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;