"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import sofa from "../../../public/assets/images/blue-sofa.jpg";
import { useScreenSize } from "@/utils/useScreenSize";

function GetReady() {
  const { isMobile } = useScreenSize();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "48px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "40%",
        }}
      >
        <Image
          style={{
            borderRadius: "24px",
            objectFit: "cover",
          }}
          alt="chair"
          src={sofa}
          height={isMobile ? 420 : 480}
          width={isMobile ? 360 : 480}
        />
      </Box>
      <Box
        sx={{
          width: isMobile ? "100%" : "60%",
          // minHeight: isMobile ? "100dvh" : "400px",
          gap:"18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: isMobile ? "0px" : "48px 0px",
        }}
      >
        <Typography
          component="h4"
          sx={{
            fontSize: isMobile ? "38px" : "48px",
            fontWeight: 800,
            width: isMobile ? "100%" : "50%",
          }}
        >
          Get ready for winter
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: isMobile ? "18px" : "24px",
            fontWeight: "400",
          }}
        >
          Curl up with loved ones on our plush <strong>sofas</strong> and sink
          into the soft embrace of <strong>winter—ready</strong> fabrics.{" "}
          <strong>Enjoy</strong> the season festivities surrounded by our{" "}
          <strong>stylish</strong> and inviting living room{" "}
          <strong>furniture.</strong>
        </Typography>
        <Button
          sx={{
            backgroundColor: "#ffd873",
          }}
        >
          Open store
        </Button>
      </Box>
    </Box>
  );
}

export default GetReady;
