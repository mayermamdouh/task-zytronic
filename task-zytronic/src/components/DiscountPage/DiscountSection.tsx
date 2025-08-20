import Image from "next/image";
import SectionTitle from "../Reusable/SectionTitle";
import { Button } from "../ui/button";

export default function DiscountSection() {
  return (
    <section className="flex flex-col items-center py-10 px-4 lg:py-20 lg:px-20 gap-10">
      <SectionTitle text="Special Offers" />
      <h2 className="text-[40px] font-[800] text-center">
        <div className="fadeInUp">Special Discount for Hotel &</div>
        <div className="fadeInUp delay-300">Resort Booking</div>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
        <div className="flex-1  group transition-transform duration-500 hover:scale-105">
          <div className="relative w-full h-[350px] rounded-3xl overflow-hidden">
            <Image
              src="/hotel1.png"
              alt="home image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45 z-10" />
            <div className="absolute inset-0 flex items-start justify-center flex-col z-20 p-14 gap-3">
              <div className="py-1.5 px-4 text-white border border-white text-sm rounded-md">
                35% Off
              </div>
              <h1 className="text-[40px] font-bold text-white">
                Get 30% Off on Hotel Booking
              </h1>
              <Button size="lg" variant="secondary">
                <span className="text-[16px]">Book Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H9M17 7V15"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 group transition-transform duration-500 hover:scale-105">
          <div className="relative w-full h-[350px] rounded-3xl overflow-hidden">
            <Image
              src="/hotel2.png"
              alt="home image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45 z-10" />
            <div className="absolute inset-0 flex items-start justify-center flex-col z-20 p-14 gap-3">
              <div className="py-1.5 px-4 text-white border border-white text-sm rounded-md">
                35% Off
              </div>
              <h1 className="text-[40px] font-bold text-white">
                Get 30% Off on Resort Booking
              </h1>
              <Button size="lg" variant="secondary">
                <span className="text-[16px]">Book Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H9M17 7V15"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
