"use client";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { productData } from "./productsData";
import { HiArrowLongRight } from "react-icons/hi2";
import { useScreenSize } from "@/utils/useScreenSize";
import { IoClose } from "react-icons/io5";

function StoreSection() {
  const { isMobile } = useScreenSize();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          fontSize: isMobile ? "38px" : "48px",
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
          width: isMobile ? "90%" : "20%",
        }}
      >
        Introducing our tatost Atfivols - Elevate space Contempatory Elegance!
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(auto-fill, minmax(100%, 1fr))"
            : "repeat(auto-fill, minmax(25%, 1fr))",
          gap: "14px",
          paddingTop: "32px",
          maxHeight: "55vh",
          overflow: "hidden",
          position: "relative",
          // display:"flex",
          // flexWrap:"wrap",
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
          onClick={handleOpen}
          sx={{
            backgroundColor: "#ffd873",
            color: "black",
            position: "absolute",
            bottom: 14,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "10px",
          }}
        >
          open store <HiArrowLongRight />
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Paper
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(auto-fill, minmax(100%, 1fr))"
              : "repeat(auto-fill, minmax(25%, 1fr))",
            gap: "14px",
            paddingTop: "32px",
            maxHeight: "75dvh",
            overflow: "scroll",
            position: "relative",
            width: "90%",
            padding: isMobile ? "18px" : "28px 32px",
            borderRadius: "28px",
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
        </Paper>
      </Modal>
    </Box>
  );
}

export default StoreSection;
