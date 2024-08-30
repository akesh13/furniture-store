import { Box, Card, CardContent, CardMedia, colors, Typography } from "@mui/material";
import React from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { BsCart2, BsCartCheck } from "react-icons/bs";
import sofa from "../../../public/assets/images/sofa.png";

function ProductCard({ liked, image, title, price, inCart }) {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#f5f5f5",
        borderRadius: "25px",
        padding: "28px 32px",
        // width:"100%"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 28,
          left: 32,
          cursor: "pointer",
        }}
      >
        {liked ? (
          <GoHeartFill style={{ color: "red", fontSize: "28px" }} />
        ) : (
          <GoHeart style={{ fontSize: "28px" }} />
        )}
      </Box>
      <CardMedia
        component={"img"}
        image={image}
        height={"264px"}
        width={"100%"}
        alt="sofa-image"
        sx={{
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            component="p"
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            component="p"
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            {price}
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: inCart ? "green" : "#ffd873",
            height: "48px",
            width: "48px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer"
          }}
        >
          {inCart ? <BsCartCheck style={{color:"#ffffff", fontSize:"20px"}} /> : <BsCart2 style={{color:"black", fontSize:"20px"}} />}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
