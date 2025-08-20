"use client";
import SectionTitle from "../Reusable/SectionTitle";

import RoomCard from "../Reusable/RoomCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Rooms() {
  return (
    <section className="my-28 ">
      <div className="flex flex-col items-center justify-center gap-3 ">
        <div className="text-center space-y-2">
          <SectionTitle text="Room Type" />
          <div className="text-[40px] font-[800]">
            The Best Luxury Rooms And Suites
          </div>
        </div>
        <div className="w-full mt-10 px-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            // grabCursor={true}
            effect="fade"
          >
            <SwiperSlide className="!w-[400px] cursor-pointe">
              <RoomCard
                price={"$400 / Night"}
                roomName={"Junior Rooms"}
                paraGraph={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                }
                image="/room.jpg"
              />
            </SwiperSlide>

            <SwiperSlide className="!w-[400px]">
              <RoomCard
                price={"$350 / Night"}
                roomName={"Deluxe Room"}
                paraGraph={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                }
                image="/room.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="!w-[400px]">
              <RoomCard
                price={"$350 / Night"}
                roomName={"Deluxe Room"}
                paraGraph={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                }
                image="/room.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="!w-[400px]">
              <RoomCard
                price={"$350 / Night"}
                roomName={"Deluxe Room"}
                paraGraph={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                }
                image="/room.jpg"
              />
            </SwiperSlide>
            <SwiperSlide className="!w-[400px]">
              <RoomCard
                price={"$350 / Night"}
                roomName={"Deluxe Room"}
                paraGraph={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                }
                image="/room.jpg"
              />
            </SwiperSlide>

            <SwiperSlide className="!w-[400px]">
              <RoomCard
                price={"$500 / Night"}
                roomName={"Luxury Suite"}
                paraGraph={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                }
                image="/room.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
