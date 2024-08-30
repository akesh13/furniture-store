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
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function OfferSection() {
  const offerTextRef = useRef(null);
  const offerBoxRef = useRef(null);
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
          toggleActions: "restart pause reverse pause",
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
          toggleActions: "restart pause reverse pause",
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
          padding: "18px",
          borderRadius: "28px",
          gap: "18px",
          backgroundColor: "#f5f5f5",
          height: "40dvh",
          width: "35%",
        }}
      >
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: "800",
          }}
        >
          Daily offer
        </Typography>
        <Typography>
          Check out our duty that can big csscovito on prcxiucts, may champ
          overy day. do not rniso yocr charwo
        </Typography>
        <Button
          sx={{
            backgroundColor: "#ffd873",
          }}
        >
          Open store
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "18px",
          borderRadius: "28px",
          gap: "18px",
          backgroundColor: "#dfe5f3",
          height: "40dvh",
          width: "40%",
          // "&:hover": {
          //   width: "40%",
          // },
          // flexGrow: 1,
          // transition: "0.5s ease-in",
          cursor: "pointer",
          // "&:hover": {
          //   boxShadow:
          //     "inset 0px 33px 25px 0px #000, inset 0 66px 15px 0px #ccc, inset 0 99px 5px 0px #fff",
          // },
          // background:
          //   "url('https://res.cloudinary.com/dgcy4qkiz/image/upload/v1722696890/chair-thumb_eqmuik.png')",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "contain",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "800",
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
            }}
          >
            30%
            <br />
            OFF
          </Box>
        </Box>
        <Image alt="chair" src={chair} height={280} width={280} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "18px",
          borderRadius: "28px",
          gap: "18px",
          backgroundColor: "#fdedd6",
          height: "50dvh",
          width: "40%",
          // "&:hover": {
          //   width: "40%",
          // },
          // flexGrow: 1,
          // transition: "0.5s ease-in",
          cursor: "pointer",
          // "&:hover": {
          //   boxShadow:
          //     "inset 0px 33px 25px 0px #000, inset 0 66px 15px 0px #ccc, inset 0 99px 5px 0px #fff",
          // },
          // background:
          //   "url('https://res.cloudinary.com/dgcy4qkiz/image/upload/v1722696890/chair-thumb_eqmuik.png')",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "contain",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "800",
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
            }}
          >
            50%
            <br />
            OFF
          </Box>
        </Box>
        <Image alt="chair" src={table} height={280} width={280} />
      </Box>
    </Box>
  );
}

export default OfferSection;
