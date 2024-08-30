"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import Image from "next/image";

function BannerProduct() {
  const image1 = "https://picsum.photos/200";
  const image2 = "https://picsum.photos/200";

  return (
    <>
      <div className="product-slider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="product-slide">
              <img src={image1} alt="Product" />
              <div className="price-tag">$100</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product-slide">
              <img src={image2} alt="Product" />
              <div className="price-tag">$200</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          flexDirection: "column",
          minHeight:"50dvh",
          border:"1px solid black",
          marginTop:"50dvh"
        }}
      >
        <Box
          sx={{
            minHeight: "48px",
            backgroundColor: "red",
            padding: "24px 48px",
            position: "relative",
            width:"100%",
          }}
        >
          <img
            style={{
              position: "absolute",
              maxHeight: "40dvh",
              width: "50%",
              bottom:40,
              left:"30%",
            }}
            src={image1}
            alt="product-image"
          />
        </Box>
      </Box> */}
    </>
  );
}

export default BannerProduct;
