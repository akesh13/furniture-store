"use client";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import siteLogo from "../../public/assets/images/armchair.png";
import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { PiShoppingCartSimpleLight, PiUserLight } from "react-icons/pi";
import { HiBars3 } from "react-icons/hi2";
import { useScreenSize } from "@/utils/useScreenSize";

export default function NavMenu() {
  const [active, setActive] = useState("");
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const {isMobile} = useScreenSize()
  const menuItems = [
    {
      id: 1,
      menu: "Home",
    },
    {
      id: 2,
      menu: "About",
    },
    {
      id: 3,
      menu: "Store",
    },
    {
      id: 4,
      menu: "Blog",
    },
    {
      id: 5,
      menu: "Sale",
    },
  ];
  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"14px 0px"}
    >
      <Grid item display={"flex"} alignItems={"center"} gap={1}>
        <IconButton
          sx={{
            fontSize: "28px",
            display: {
              sx: "block",
              md: "none",
            },
          }}
        >
          <HiBars3 />
        </IconButton>
        <Image src={siteLogo} alt="site-log0" height={isMobile ? 28 : 48} width={isMobile ? 32 : 52} />
        <Typography
          align="left"
          variant="h1"
          component={"h1"}
          sx={{
            fontSize: {
              xs: "18px",
              lg: "24px",
            },
            fontWeight: 700,
            textTransform: "capitalize",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Furniture Store
        </Typography>
      </Grid>
      <Grid
        item
        alignItems={"center"}
        // gap={2}
        sx={{
          padding: "10px 12px",
          backgroundColor: "#eff2f9",
          borderRadius: "50px",
          display: {
            xs: "none",
            lg: "flex",
          },
        }}
      >
        {menuItems.map((menu) => (
          <Typography
            onClick={() => {
              setActive(menu.menu);
            }}
            align="left"
            variant="h6"
            component={"h6"}
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              textTransform: "capitalize",
              fontFamily: "Montserrat, sans-serif",
              padding: "4px 12px",
              cursor: "pointer",
              transition: ".3s ease-in",
              "&:hover": {
                backgroundColor: "#ffffff",
                padding: "4px 12px",
                borderRadius: "30px",
              },
              backgroundColor: menu.menu === active && "#ffffff",
              //   padding: active && "8px 14px",
              borderRadius: menu.menu === active && "30px",
            }}
            key={menu.id}
          >
            {menu.menu}
          </Typography>
        ))}
      </Grid>
      <Grid
        item
        alignItems={"center"}
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
        }}
        gap={2}
      >
        <Box
          sx={{
            height: "36px",
            width: "36px",
            border: "1px solid grey",
            borderRadius: "100%",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GoHeart style={{ height: "20px", width: "auto" }} />
        </Box>
        <Box
          sx={{
            height: "36px",
            width: "36px",
            border: "1px solid grey",
            borderRadius: "100%",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PiShoppingCartSimpleLight
            style={{ height: "20px", width: "auto" }}
          />
        </Box>
        <Box
          sx={{
            height: "36px",
            width: "36px",
            border: "1px solid grey",
            cursor: "pointer",
            "&:hover:": {
              backgroundColor: "#ffd96d",
              border: "none",
            },
            borderRadius: "100%",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PiUserLight style={{ height: "20px", width: "auto" }} />
        </Box>
      </Grid>
    </Grid>
  );
}
