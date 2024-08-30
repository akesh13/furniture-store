import BannerProduct from "@/components/BannerProduct";
import CategorySection from "@/components/Category/CategorySection";
import GetReady from "@/components/GetReady/GetReady";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavMenu from "@/components/NavMenu";
import OfferSection from "@/components/OfferSection/OfferSection";
import StoreSection from "@/components/StoreSection/StoreSection";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{
        padding: "14px 28px"
      }}>
        <NavMenu />
        {/* <BannerProduct /> */}
        <HeroSection />
        <CategorySection />
        <OfferSection />
        <GetReady />
        <StoreSection />
      </Box>
    </>
  );
}