"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import sofa from "../../../public/assets/images/sofa.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import chair1 from "../../../public/assets/images/lounge_chair1.png";
import chair2 from "../../../public/assets/images/lounge_chair_2.png";
import { useScreenSize } from "@/utils/useScreenSize";
import { AnimatedButton } from "../ui/AnimatedButton";

gsap.registerPlugin(useGSAP);

function HeroSection() {
  const sofaRef = useRef(null);
  const chair1Ref = useRef(null);
  const chair2Ref = useRef(null);
  const { isMobile } = useScreenSize();

  useGSAP(
    () => {
      // Set initial position and opacity
      gsap.set(sofaRef.current, { y: -260, opacity: 0 });
      // gsap.set(chair1Ref.current, { x: -250 });
      // gsap.set(chair2Ref.current, { opacity: 0 });

      // Animate to original position and full opacity
      gsap.to(sofaRef.current, {
        y: 0,
        opacity: 1,
        duration: 2,
        yoyo: true,
        // repeat:-1,
        ease: "elastic",
      });

      gsap.fromTo(
        chair1Ref.current.children,
        {
          x: -500,
          rotation: 0,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          yoyo: true,
          // rotation: 360,
          duration: 3,
          ease: "bounce",
        }
      );
      // gsap.to(chair2Ref.current, {
      //   opacity: 1,
      //   duration: 3,
      // });
      gsap.fromTo(
        chair2Ref.current.children,
        {
          x: 500,
          rotation: 0,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          yoyo: true,
          // rotation: 360,
          duration: 3,
          ease: "bounce",
        }
      );
    }
    // {
    //   scope: "container",
    // }
  );
  return (
    <>
      <Box
        ref={sofaRef}
        sx={{
          height: isMobile ? "60dvh" : "40dvh",
          width: "100%",
          backgroundColor: "#5c75b8",
          borderRadius: "36px",
          padding: isMobile ? "24px 0px" : "24px 0px",
          marginTop: isMobile ? "0px" : "14px",
        }}
      >
        <Typography
          variant="h1"
          component={"h1"}
          align="center"
          sx={{
            textTransform: "capitalize",
            fontSize: {
              sm: "24px",
              lg: "84px",
            },
            color: "#ffffff",
            fontWeight: 600,
            fontFamily: "Montserrat",
            lineHeight: isMobile ? "28px" : "84px",
          }}
        >
          modern minimalist furniture
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-around",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <Image
            src={sofa}
            alt="sofa-image"
            height={isMobile ? 200 : 290}
            width={"auto"}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: isMobile ? "center" : "start",
              flexGrow: 1,
              gap: "18px",
              maxWidth: isMobile ? "100%" : "40%",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                maxWidth: isMobile ? "90%" : "75%",
                color: "white",
                fontSize: isMobile ? "16px" : "18px",
              }}
            >
              Discover o curated collection ot handcrafted pieces designed to
              tronstoen yout Wing spaces into expressions ot your unique tasto
              ond lifestyle.
            </Typography>
            <AnimatedButton
              text={"Explore more"}
              bgcolor={"#ffd873"}
              innerColor={"#5c75b8"}
              textColor={"black"}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
          justifyContent: "space-between",
          alignItems: "center",
          gap: isMobile ? "14px" : "28px",
          marginTop: "14px",
        }}
      >
        <Box
          ref={chair1Ref}
          sx={{
            minHeight: isMobile ? "20dvh" : "35vh",
            width: "100%",
            backgroundColor: "#dfe5f3",
            borderRadius: "32px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: isMobile ? "18px 14px" : "0px 24px",
            gap: isMobile ? "0px" : "32px",
            transition: "transform 0.5s ease-in-out",
            "&:hover": {
              transform: "rotate(-1deg)",
            },
            overflow: "hidden",
          }}
        >
          <Image
            src={chair1}
            alt="sofa-image"
            height={isMobile ? 140 : 260}
            width={"auto"}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexDirection: "column",
              flexGrow: 1,
              gap: isMobile ? "10px" : "32px",
            }}
          >
            <Typography
              sx={{
                fontSize: isMobile ? "20px" : "32px",
                fontWeight: 800,
                fontFamily: "Montserrat",
              }}
            >
              New Designer Sofa Collection
            </Typography>
            <AnimatedButton
              text={"Explore more"}
              bgcolor={"#ffd873"}
              innerColor={"#5c75b8"}
              textColor={"black"}
            />
          </Box>
        </Box>
        <Box
          ref={chair2Ref}
          sx={{
            minHeight: isMobile ? "20dvh" : "35vh",
            width: "100%",
            backgroundColor: "#ffd873",
            borderRadius: "32px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: isMobile ? "18px 14px" : "0px 24px",
            gap: isMobile ? "0px" : "32px",
            transition: "transform 0.5s ease-in-out",
            "&:hover": {
              transform: "rotate(1deg)",
            },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "space-evenly" : "space-between",
              alignItems: "flex-start",
              flexDirection: "column",
              flexGrow: 1,
              gap: isMobile ? "10px" : "32px",
              color: "#876929",
            }}
          >
            <Typography
              sx={{
                fontSize: isMobile ? "20px" : "54px",
                fontWeight: 800,
                fontFamily: "Montserrat",
              }}
            >
              Wooden chair <br /> flat 50% OFF
            </Typography>
            <AnimatedButton
              text={"Explore more"}
              bgcolor={"white"}
              innerColor={"#5c75b8"}
              textColor={"black"}
            />
          </Box>
          <Image
            src={chair2}
            alt="sofa-image"
            height={isMobile ? 140 : 260}
            width={"auto"}
          />
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
