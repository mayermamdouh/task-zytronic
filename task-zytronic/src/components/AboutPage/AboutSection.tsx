"use client";
import Image from "next/image";
import React from "react";
import Circle from "../Reusable/Circle";
import SectionTitle from "../Reusable/SectionTitle";

export default function SecondSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 my-40 gap-10 mx-20 ">
      <div className="relative w-full max-w-[450px] h-[600px] rounded-2xl">
        <div className="w-full h-full overflow-hidden image-crop">
          <Image
            src="/about.jpg"
            alt="about image"
            className="bg-cover rounded-2xl"
            fill
          />
        </div>
        <div className="h-36 w-36 rounded-full bg-white absolute top-[280px] -right-14 flex items-center justify-center animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            className="absolute h-full w-full p-2 overflow-visible "
          >
            <defs>
              <path
                id="circlePath"
                d="
          M50,50
          m0,-45
          a45,45 0 1,1 0,90
          a45,45 0 1,1 0,-90
        "
              />
            </defs>
            <text
              className="fill-[var(--muted)]"
              fontSize="10"
              fontWeight="bold"
              letterSpacing="1.5"
            >
              <textPath
                href="#circlePath"
                startOffset="50%"
                textAnchor="middle"
              >
                30 YEARS OF EXPERIENCE HOTEL BUSINESS -
              </textPath>
            </text>
          </svg>

          <Circle />
        </div>
      </div>
      <div className="flex flex-col w-full items-start justify-center gap-7 pr-5">
        <SectionTitle text="About Fixyland" />
        <h2 className="text-[40px] font-[800] space-y-2">
          <div className="fadeInUp">World Class Luxury Hotel</div>
          <div className="fadeInUp delay-300">and Resort Near City</div>
        </h2>
        <p className="leading-[1.5em] text-muted">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even.
        </p>
        <div className="flex items-center justify-center gap-5">
          <div className="flex flex-col items-start justify-center gap-5">
            <div className="flex items-center gap-2 text-muted">
              <div className="relative w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>24 -Hours Emergency Service </div>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <div className="relative w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>Comfortable Atmosphere </div>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <div className="relative w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>Something by accident</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <div className="flex items-center gap-2 text-muted">
              <div className="relative w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>It is a Long Established fact</div>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <div className="relative w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>Flexible and Cost-Effective</div>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <div className="relative w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>Get Free Consultation Anytime</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/ceoPhoto.png"
              alt="CEO photo"
              width={150}
              height={150}
              className=""
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="text-[18px] font-semibold">Robert L. Robinson</div>
            <div className="text-muted">CEO & Founder</div>
          </div>
        </div>
      </div>
    </section>
  );
}
