"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import sofa from "../../../public/assets/images/sofa.png";
import { useScreenSize } from "@/utils/useScreenSize";

function TimerOffer() {
  const { isMobile } = useScreenSize();
  return (
    <Box
      sx={{
        maxHeight: "80dvh",
        backgroundColor: "#ffd873",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
          gap: "24px",
        }}
      >
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: "800",
          }}
        >
          Winter offer
        </Typography>
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: 500,
          }}
        >
          5d : 2h : 30s
        </Typography>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          Open page
        </Button>
      </Box>
      <Image
        src={sofa}
        alt="sofa-image"
        height={isMobile ? 200 : 290}
        width={"auto"}
      />
    </Box>
  );
}

export default TimerOffer;
