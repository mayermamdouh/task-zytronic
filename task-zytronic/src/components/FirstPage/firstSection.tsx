import Image from "next/image";
import { Button } from "../ui/button";

export default function FirstSection() {
  return (
    <div className="h-screen relative overflow-hidden">
      <Image
        src="/home-iamge.jpg"
        alt="home image"
        width={1920}
        height={1080}
        className="w-full h-full object-cover object-center"
        priority
      ></Image>
      <div className="absolute inset-0 bg-black/55 z-10" />
      <div className="absolute inset-0 flex items-center justify-center flex-col z-20 ">
        <h1 className="text-7xl font-bold text-white text-center ">
          <div>Book With Best</div>
          <div className="text-secondary">Luxury Hotel</div>
        </h1>
        <div className="text-white mt-3 whitespace-normal text-center w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          rhoncus nunc Duis egestas ac ante sed tincidunt.
        </div>
        <div className="flex items-center gap-4 mt-7">
          <Button size="lg">
            <span className="text-[16px] ">Explor More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 w-6 h-6 text-black"
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
          <Button size="lg" variant="secondary">
            <span className="text-[16px] ">Our Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 w-6 h-6 text-black"
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
  );
}
