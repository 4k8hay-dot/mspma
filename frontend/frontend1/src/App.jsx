import React, { useState } from "react";

import Navbar from "./components/Navbar";
import ProductDashboard from "./components/ProductDashboard";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  const [page, setPage] = useState("dashboard");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [refreshProducts, setRefreshProducts] = useState(0);

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setPage("add");
  };

  const handleCloseAddProduct = () => {
    setPage("dashboard");
    setRefreshProducts((prev) => prev + 1);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setPage("edit");
  };

  const handleCloseEditProduct = () => {
    setSelectedProduct(null);
    setPage("dashboard");
  };

  const handleProductUpdated = () => {
    setSelectedProduct(null);
    setPage("dashboard");
    setRefreshProducts((prev) => prev + 1);
  };

  const renderPage = () => {
    if (page === "add") {
      return (
        <AddProduct
          onClose={handleCloseAddProduct}
        />
      );
    }

    if (page === "edit") {
      return (
        <EditProduct
          product={selectedProduct}
          onClose={handleCloseEditProduct}
          onUpdated={handleProductUpdated}
        />
      );
    }

    return (
      <ProductDashboard
        onEditProduct={handleEditProduct}
        refreshProducts={refreshProducts}
      />
    );
  };

  return (
    <>
      <Navbar onAddProduct={handleAddProduct} />

      {renderPage()}
    </>
  );
}

export default App;