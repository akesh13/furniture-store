import BannerProduct from "@/components/BannerProduct";
import CategorySection from "@/components/Category/CategorySection";
import Footer from "@/components/Footer/Footer";
import GetReady from "@/components/GetReady/GetReady";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavMenu from "@/components/NavMenu";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import OfferSection from "@/components/OfferSection/OfferSection";
import StoreSection from "@/components/StoreSection/StoreSection";
import TimerOffer from "@/components/TimerOffer/TimerOffer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{
        padding: {
          lg:"14px 28px",
          sm:"12px 14px"
        }
      }}>
        <NavMenu />
        {/* <BannerProduct /> */}
        <HeroSection />
        <CategorySection />
        <OfferSection />
        <GetReady />
        <StoreSection />
        <NewsLetter />
        <TimerOffer />
        <Footer />
      </Box>
    </>
  );
}