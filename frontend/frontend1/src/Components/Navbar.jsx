import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navbar = ({ onAddProduct }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0F5132",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          Product Management System
        </Typography>

        <Button
          onClick={onAddProduct}
          sx={{
            backgroundColor: "white",
            color: "#0F5132",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#e8f5e9",
            },
          }}
        >
          Add Product
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;