"use client";
import React, { useEffect, useRef } from "react";
import { categories } from "./category-data";
import { Box, Typography } from "@mui/material";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScreenSize } from "@/utils/useScreenSize";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function CategorySection() {
  const containerRef = useRef(null);
  const { isMobile } = useScreenSize();
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(containerRef.current.children);

      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          {
            x: -2555,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            rotation: 360,
            duration: 1,
            scrollTrigger: {
              trigger: box,
              toggleActions: "restart pause pause pause",
              // start: "top 90%",
              // end: "bottom center",
              // scrub: true,
              // markers: true,
            },
            stagger: {
              from: "end",
              amount: 2,
              each: 1.5,
              ease: "power.in",
              axis: "x",
            },
          }
        );
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexWrap: {
          xs: "wrap",
          md: "nowrap",
        },
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "48px",
        gap: isMobile ? "14px" : "32px",
      }}
    >
      {categories.map((category) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: isMobile ? "space-between" : "space-evenly",
            alignItems: "center",
            padding: isMobile ? "18px 0px" : "38px 18px",
            backgroundColor: "#f5f5f5",
            borderRadius: isMobile ? "24px" : "32px",
            cursor: "pointer",
            width: isMobile && "25%",
            "&:hover": {
              // transition: "0.5s ease-in",
              backgroundColor: "#ffd873",
            },
          }}
          key={category.id}
        >
          <Typography
            sx={{
              fontSize: isMobile ? "48px" : "94px",
            }}
          >
            {category.icon}
          </Typography>
          <Typography
            sx={{
              fontSize: isMobile ? "18px" : "22px",
              fontFamily: "Montserrat",
              fontWeight: 700,
            }}
          >
            {category.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default CategorySection;
