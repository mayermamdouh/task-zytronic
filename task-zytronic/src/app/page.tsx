import FirstSection from "@/components/FirstPage/firstSection";
import FoodDrink from "@/components/FoodDrink/FoodDrink";
import Header from "@/components/Header/Header";
import Rooms from "@/components/RoomsPage/Rooms";
import AboutSection from "@/components/AboutPage/AboutSection";
import ServicePage from "@/components/ServicePage/ServicePage";
import Tape from "@/components/Tapes/Tape";
import VideoSection from "@/components/videoSection/VideoSection";
import DiscountSection from "@/components/DiscountPage/DiscountSection";
import FeedBack from "@/components/FeedBackPage/FeedBack";
import StaffSection from "@/components/StaffPage/StaffSection";
import NewsSection from "@/components/NewsPage/NewsSection";
import InstagramSection from "@/components/InstagramPage/InstagramSection";

import CheckIn from "@/components/CheckIn/CheckIn";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <FirstSection />
      <CheckIn />
      <AboutSection />
      <Tape />
      <Rooms />
      <ServicePage />
      <VideoSection />
      <FoodDrink />
      <DiscountSection />
      <FeedBack />
      <StaffSection />
      <NewsSection />
      <InstagramSection />
    </main>
  );
}
