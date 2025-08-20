import Image from "next/image";
import React from "react";
import SectionTitle from "../Reusable/SectionTitle";
import { Button } from "../ui/button";

export default function FoodDrink() {
  return (
    <section className="bg-white  py-10 px-4 lg:py-20 lg:px-20 flex flex-col items-center gap-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div className="flex flex-col items-start gap-3">
          <SectionTitle text={"Food & Drink"} />
          <h2 className="text-[40px] font-[800]">
            <div className="fadeInUp">Quality Food And</div>
            <div className="fadeInUp delay-300">Drink Your Trip Are</div>
            <div className="fadeInUp delay-300">Enjoyable</div>
          </h2>
          <p className="leading-[1.5em] text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae
            accumsan. interdum hendrerit lacinia.
          </p>
          <section>
            <div className="flex flex-col items-start gap-2 ">
              <div className="flex items-center gap-3 ">
                <div className="relative w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4 text-primary text-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="text-[20px] font-[800]">
                  Free Breakfast, Tea & Coffee
                </div>
              </div>
              <p className="text-muted ml-8">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 ">
              <div className="flex items-center gap-3 ">
                <div className="relative w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4 text-primary text-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="text-[20px] font-[800]">
                  Free Breakfast, Tea & Coffee
                </div>
              </div>
              <p className="text-muted ml-8">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 ">
              <div className="flex items-center gap-3 ">
                <div className="relative w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4 text-primary text-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="text-[20px] font-[800]">
                  Free Breakfast, Tea & Coffee
                </div>
              </div>
              <p className="text-muted ml-8">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator.
              </p>
            </div>
          </section>
          <div className="mt-5">
            <Button size="lg" variant="destructive">
              <span className="text-[16px] ">Learn More Hotel</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
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
        <div className="relative flex flex-col items-center justify-center gap-5">
          <div className="flex items-center gap-5">
            <div className="relative w-[150px] h-[300px] sm:w-[200px] sm:h-[400px] lg:w-[270px] lg:h-[450px] p-10 ">
              <Image
                src="/food1.jpg"
                alt="food image"
                fill
                className="object-cover rounded-4xl"
              />
              <div className="left-32 bottom-0 absolute flex flex-col items-center justify-center w-[250px] h-[150px] bg-white shadow-md p-5 rounded-3xl gap-5 z-40">
                <div className="text-primary text-lg">Popular Client</div>
                <div className=" flex items-center justify-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/ceoPhoto.png"
                      alt="CEO photo"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative -ml-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/ceoPhoto.png"
                      alt="CEO photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative -ml-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/ceoPhoto.png"
                      alt="CEO photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative -ml-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/ceoPhoto.png"
                      alt="CEO photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative -ml-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/ceoPhoto.png"
                      alt="CEO photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative -ml-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/ceoPhoto.png"
                      alt="CEO photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[150px] h-[300px] sm:w-[200px] sm:h-[400px] lg:w-[270px] lg:h-[450px] rounded-4xl overflow-hidden p-10 mb-48">
              <Image
                src="/food2.jpg"
                alt="food image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
