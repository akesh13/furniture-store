"use client";
import { Box, Button, Input, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { BiEnvelope } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useScreenSize } from "@/utils/useScreenSize";
gsap.registerPlugin(useGSAP);

function NewsLetter() {
  const { isMobile } = useScreenSize();
  useGSAP(() => {
    gsap.fromTo(
      ".mail-icon",
      {
        x: -500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "back",
        yoyo: true,
        repeat: -1,
        rotate: "+=360",
        fontSize: "56px",
        scrollTrigger: {
          trigger: ".mail-icon",
          toggleActions: "restart pause reverse pause",
        },
      }
    );
  });
  return (
    <Box
      sx={{
        margin: "48px 0px",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "35dvh",
        width: "90%",
      }}
    >
      <Typography
        component="h3"
        sx={{
          fontSize: "28px",
          width: isMobile ? "100%" : "30%",
          textAlign: "center",
        }}
      >
        Subscribe to our newsletter and grab <strong>30% off!</strong>
      </Typography>
      <BiEnvelope
        className="mail-icon"
        style={{ fontSize: "28px", color: "blue" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: isMobile ? "100%" : "60%",
          gap: "18px",
        }}
      >
        <input
          placeholder="Please enter your email"
          style={{
            width: "100%",
            height: "48px",
            borderRadius: "50px",
            padding: "0px 24px",
            fontSize: "18px",
            fontWeight: "500",
            fontFamily: "Montserrat",
          }}
        />
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "grey",
            },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}

export default NewsLetter;
