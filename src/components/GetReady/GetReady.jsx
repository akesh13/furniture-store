import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import sofa from "../../../public/assets/images/blue-sofa.jpg";

function GetReady() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:"48px"
      }}
    >
      <Box
        sx={{
          width: "40%",
        }}
      >
        <Image
          style={{
            borderRadius: "24px",
          }}
          alt="chair"
          src={sofa}
          height={480}
          width={480}
        />
      </Box>
      <Box
        sx={{
          width: "60%",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding:"48px 0px"
        }}
      >
        <Typography
          component="h4"
          sx={{
            fontSize: "48px",
            fontWeight: 800,
            width: "50%",
          }}
        >
          Get ready for winter
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: "24px",
            fontWeight: "400",
          }}
        >
          Curl up with loved ones on our plush <strong>sofas</strong> and sink
          into the soft embrace of <strong>winter—ready</strong> fabrics.{" "}
          <strong>Enjoy</strong> the season festivities surrounded by our{" "}
          <strong>stylish</strong> and inviting living room{" "}
          <strong>furniture.</strong>
        </Typography>
        <Button
          sx={{
            backgroundColor: "#ffd873",
          }}
        >
          Open store
        </Button>
      </Box>
    </Box>
  );
}

export default GetReady;
