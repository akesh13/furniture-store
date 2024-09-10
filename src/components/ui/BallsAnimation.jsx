"use client";
import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function BallsAnimation() {
  const [randomX, setRandomX] = useState(0);
  let ballsRef = useRef();
  const random = gsap.utils.random(-360, 360, 60);
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.to(ballsRef.current.children, {
      y: randomX,
      opacity: 1,
      ease: "power",
      duration: 1,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
    });
  }, [randomX]);
  return (
    <>
      <Box
        onClick={() => setRandomX(random)}
        ref={ballsRef}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "80dvh",
          backgroundColor: "black",
          padding: "18px 24px",
          borderRadius: "32px",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "18px",
          overflow: "hidden",
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <Box
            key={i}
            sx={{
              minHeight: "6rem",
              maxHeight: "6rem",
              minWidth: "6rem",
              borderRadius: "100%",
              backgroundColor: "blueviolet",
            }}
          ></Box>
        ))}
      </Box>
    </>
  );
}

export default BallsAnimation;
