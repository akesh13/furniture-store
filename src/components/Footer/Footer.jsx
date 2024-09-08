import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BiChair } from "react-icons/bi";

function Footer() {
  return (
    <Box
      sx={{
        minHeight: "30dvh",
        border: "1px solid grey",
        margin: "48px 0px",
        borderRadius: "25px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "start",
        padding: "28px 18px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          minHeight: "30vh",
        }}
      >
        <BiChair
          style={{
            fontSize: "64px",
          }}
        />
        <Typography>356-A, plesant nagar, nagercoil</Typography>
        <Typography>info@furniturestore.com</Typography>
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            "&:hover":{
                color:"black",
            }
          }}
        >
          Contact us
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          height: "auto",
          gap: "14px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "800",
          }}
        >
          Useful Links
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          About us
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          Contact us
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          Location
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          Site map
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          height: "auto",
          gap: "14px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "800",
          }}
        >
          Contact us
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          +91-5588669944
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          04652-994455
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          Monday - Friday
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          10:00 AM - 10:00 PM
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          Saturday - Sunday - 10:00AM - 6:00PM
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          height: "auto",
          gap: "14px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "800",
          }}
        >
          Customer service
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          Orders
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          Wishlist
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          Cart
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          Account
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          Privacy policy
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
