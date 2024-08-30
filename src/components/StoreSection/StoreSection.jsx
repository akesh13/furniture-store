import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import { productData } from "./productsData";
import { HiArrowLongRight } from "react-icons/hi2";

function StoreSection() {
  return (
    <Box
      sx={{
        paddingTop: "48px",
        display: "flex",
        flexDirection: "column",
        columnGap: "18px",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: "48",
          fontWeight: 800,
        }}
      >
        Our latest arrivals
      </Typography>
      <Typography
        variant="body2"
        component="p"
        sx={{
          fontSize: "14px",
          fontWeight: 400,
          width: "20%",
        }}
      >
        Introducing our tatost Atfivols - Elevate space Contempatory Elegance!
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(25%, 1fr))",
          gap: "14px",
          paddingTop: "32px",
          maxHeight: "55vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {productData &&
          productData?.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              inCart={product.cart}
              liked={product.liked}
              price={product.price}
              title={product.title}
            />
          ))}
        <Button
          sx={{
            backgroundColor: "#ffd873",
            color: "black",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            gap:"10px"
          }}
        >
          open store <HiArrowLongRight />
        </Button>
      </Box>
    </Box>
  );
}

export default StoreSection;
