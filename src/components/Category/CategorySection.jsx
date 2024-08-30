"use client";
import React, { useEffect, useRef } from "react";
import { categories } from "./category-data";
import { Box, Typography } from "@mui/material";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function CategorySection() {
  const containerRef = useRef(null);
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
            duration:1,
            scrollTrigger: {
              trigger: box,
              toggleActions: "restart pause reverse pause",
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
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "48px",
        gap: "32px",
      }}
    >
      {categories.map((category) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "38px 18px",
            backgroundColor: "#f5f5f5",
            borderRadius: "32px",
            cursor: "pointer",
            "&:hover": {
              // transition: "0.5s ease-in",
              backgroundColor: "#ffd873",
            },
          }}
          key={category.id}
        >
          <Typography
            sx={{
              fontSize: "94px",
            }}
          >
            {category.icon}
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
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
