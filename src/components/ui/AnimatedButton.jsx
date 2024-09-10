import { Box, Button, Typography } from "@mui/material";
import { HiArrowLongRight } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useScreenSize } from "@/utils/useScreenSize";

gsap.registerPlugin(useGSAP);

export const AnimatedButton = ({ bgcolor, innerColor, textColor, text }) => {
  const { isMobile } = useScreenSize();
  const [hover, setHover] = useState(null);
  const boxRef = useRef();
  let tl = gsap.timeline({ paused: true });
  let tl2 = gsap.timeline({ paused: true });
  useGSAP(() => {
    hover && tl.play();
    !hover && tl2.play();
    tl.to(boxRef.current, {
      width: "calc(100% - 10px)",
      right: 4,
      borderRadius: "18px",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.5,
    });
    tl.to(boxRef.current, {
      width: "2em",
      left: "calc(100% - 2.4rem)",
      borderRadius: "18px",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.5,
    });
    tl2.to(boxRef.current, {
      width: "calc(100% - 10px)",
      left: 4,
      borderRadius: "18px",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.5,
    });
    tl2.to(boxRef.current, {
      width: "2em",
      right: "calc(100% - 2.4rem)",
      borderRadius: "18px",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.5,
    });
  }, [hover]);

  return (
    <>
      <Button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() =>
          setTimeout(() => {
            setHover(false);
          }, 600)
        }
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "14px",
          backgroundColor: bgcolor || "white",
          color: textColor || "black",
          padding: "0px 14px",
          position: "relative",
          minHeight: "2.5rem",
          minWidth: "6rem",
          overflow: "hidden",
          "&:hover": {
            backgroundColor: bgcolor || "black",
          },
        }}
      >
        <Box
          ref={boxRef}
          sx={{
            position: "absolute",
            left: 6,
            minHeight: "2rem",
            minWidth: "2rem",
            backgroundColor: innerColor || "red",
            borderRadius: "100%",
          }}
        ></Box>
        <Typography sx={{ zIndex: 1, fontSize: isMobile && "14px" }}>
          {text}
        </Typography>{" "}
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <HiArrowLongRight />
        </Typography>
      </Button>
    </>
  );
};
