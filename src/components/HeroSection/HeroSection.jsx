"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import sofa from "../../../public/assets/images/sofa.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import chair1 from "../../../public/assets/images/lounge_chair1.png";
import chair2 from "../../../public/assets/images/lounge_chair_2.png";

gsap.registerPlugin(useGSAP);

function HeroSection() {
  const sofaRef = useRef(null);
  const chair1Ref = useRef(null);
  const chair2Ref = useRef(null);

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
    },
    // {
    //   scope: "container",
    // }
  );
  return (
    <>
      <Box
        ref={sofaRef}
        sx={{
          height: "40dvh",
          width: "100%",
          backgroundColor: "#5c75b8",
          borderRadius: "36px",
          padding: "24px 0px",
          marginTop:"14px"
        }}
      >
        <Typography
          variant="h1"
          component={"h1"}
          align="center"
          sx={{
            textTransform: "capitalize",
            fontSize: {
              sm:"24px",
              lg:"84px"
            },
            color: "#ffffff",
            fontWeight: 600,
            fontFamily: "Montserrat",
            lineHeight: "84px",
          }}
        >
          modern minimalist furniture
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <Image src={sofa} alt="sofa-image" height={290} width={"auto"} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "start",
              flexGrow: 1,
              gap: "18px",
              maxWidth: "40%",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                maxWidth: "75%",
                color: "white",
              }}
            >
              Discover o curated collection ot handcrafted pieces designed to
              tronstoen yout Wing spaces into expressions ot your unique tasto
              ond lifesty10.
            </Typography>
            <Button
              sx={{
                backgroundColor: "#ffd873",
                color: "black",
                padding: "14px 24px",
                borderRadius: "100px",
              }}
            >
              Explore more
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "28px",
          marginTop: "14px",
        }}
      >
        <Box
          ref={chair1Ref}
          sx={{
            minHeight: "35vh",
            minWidth: "48%",
            backgroundColor: "#dfe5f3",
            borderRadius: "32px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "0px 24px",
            gap: "32px",
            transition: "transform 0.5s ease-in-out",
            "&:hover": {
              transform: "rotate(-1deg)",
            },
            overflow: "hidden",
          }}
        >
          <Image src={chair1} alt="sofa-image" height={260} width={"auto"} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexDirection: "column",
              flexGrow: 1,
              gap: "32px",
            }}
          >
            <Typography
              sx={{
                fontSize: "54px",
                fontWeight: 800,
                fontFamily: "Montserrat",
              }}
            >
              New Designer Sofa Collection
            </Typography>
            <Button
              sx={{
                backgroundColor: "#ffd873",
                color: "black",
                padding: "14px 24px",
                borderRadius: "100px",
              }}
            >
              Explore more
            </Button>
          </Box>
        </Box>
        <Box
          ref={chair2Ref}
          sx={{
            minHeight: "35vh",
            minWidth: "40%",
            backgroundColor: "#ffd873",
            borderRadius: "32px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "0px 24px",
            gap: "32px",
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
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexDirection: "column",
              flexGrow: 1,
              gap: "32px",
              color: "#876929",
            }}
          >
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: 800,
                fontFamily: "Montserrat",
              }}
            >
              Wooden chair <br /> flat 50% OFF
            </Typography>
            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                padding: "14px 24px",
                borderRadius: "100px",
              }}
            >
              Explore more
            </Button>
          </Box>
          <Image src={chair2} alt="sofa-image" height={260} width={"auto"} />
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
