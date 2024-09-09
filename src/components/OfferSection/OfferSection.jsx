"use client";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import chair from "../../../public/assets/images/chair-thumb.png";
import table from "../../../public/assets/images/table.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useScreenSize } from "@/utils/useScreenSize";
import { AnimatedButton } from "../ui/AnimatedButton";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function OfferSection() {
  const offerTextRef = useRef(null);
  const offerBoxRef = useRef(null);
  const { isMobile } = useScreenSize();
  useGSAP(() => {
    const boxes = gsap.utils.toArray(offerBoxRef.current.children);
    gsap.fromTo(
      offerTextRef.current.children,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        ease: "sine.in",
        stagger: 0.5,
        scrollTrigger: {
          trigger: offerTextRef.current.children,
          toggleActions: "restart pause pause pause",
        },
      }
    );
    gsap.fromTo(
      [boxes[1], boxes[2]],
      {
        opacity: 0,
        y: 250,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back",
        scrollTrigger: {
          trigger: boxes,
          toggleActions: "restart pause pause pause",
        },
        stagger: 0.5,
      }
    );
  }, []);
  return (
    <Box
      ref={offerBoxRef}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "24px",
        marginTop: "42px",
        // overflow:"hidden"
        flexGrow: 1,
      }}
    >
      <Box
        ref={offerTextRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "18px 14px 18px 18px",
          borderRadius: "28px",
          gap: "18px",
          backgroundColor: "#f5f5f5",
          height: isMobile ? "30dvh" : "40dvh",
          width: isMobile ? "92%" : "35%",
        }}
      >
        <Typography
          sx={{
            fontSize: isMobile ? "38px" : "48px",
            fontWeight: "800",
          }}
        >
          Daily offer
        </Typography>
        <Typography
          sx={{
            fontSize: isMobile ? "16px" : "20px",
          }}
        >
          Check out our duty that can big csscovito on prcxiucts, may champ
          overy day. do not rniso yocr charwo
        </Typography>
        <AnimatedButton
          text={"open store"}
          bgcolor={"#ffd873"}
          innerColor={"#5c75b8"}
          textColor={"black"}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: isMobile ? "0px" : "18px 0px",
          borderRadius: "28px",
          gap: isMobile ? "10px" : "18px",
          backgroundColor: "#dfe5f3",
          height: "40dvh",
          width: isMobile ? "100%" : "35%",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: isMobile && "15px",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "800",
              marginLeft: "15px",
            }}
          >
            Chairs
          </Typography>

          <Box
            sx={{
              backgroundColor: "white",
              height: "64px",
              width: "64px",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            30%
            <br />
            OFF
          </Box>
        </Box>
        <Image
          alt="chair"
          src={chair}
          height={isMobile ? 240 : 280}
          width={isMobile ? 240 : 280}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: isMobile ? "0px" : "18px",
          borderRadius: "28px",
          gap: "18px",
          backgroundColor: "#fdedd6",
          height: "50dvh",
          width: isMobile ? "100%" : "35%",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: isMobile && "15px",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "800",
              marginLeft: isMobile && "15px",
            }}
          >
            Tables
          </Typography>

          <Box
            sx={{
              backgroundColor: "white",
              height: "64px",
              width: "64px",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: isMobile && "15px",
            }}
          >
            50%
            <br />
            OFF
          </Box>
        </Box>
        <Image
          alt="chair"
          src={table}
          height={isMobile ? 240 : 280}
          width={280}
        />
      </Box>
    </Box>
  );
}

export default OfferSection;
