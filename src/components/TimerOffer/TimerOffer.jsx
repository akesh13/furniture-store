import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import sofa from "../../../public/assets/images/sofa.png";

function TimerOffer() {
  return (
    <Box
      sx={{
        height: "40dvh",
        backgroundColor: "#ffd873",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "30px",
      }}
    >
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"start",
        gap:"24px"
      }}>
        <Typography sx={{
            fontSize:"48px",
            fontWeight:"800"
        }}>Winter offer</Typography>
        <Typography sx={{
            fontSize:"48px",
            fontWeight:500
        }}>5d : 2h : 30s</Typography>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          Open page
        </Button>
      </Box>
      <Image src={sofa} alt="sofa-image" height={290} width={"auto"} />
    </Box>
  );
}

export default TimerOffer;
