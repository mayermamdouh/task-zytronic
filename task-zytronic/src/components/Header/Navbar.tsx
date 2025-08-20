"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ChevronDown } from "lucide-react";

const menu = [
  { title: "Home", children: ["Home1", "Home2", "Home3"] },
  { title: "Pages", children: ["About Us", "FAQ", "Pricing"] },
  { title: "Rooms & Suites", children: ["Deluxe", "Family Suite", "Single"] },
  { title: "Services", children: ["Spa", "Gym", "Restaurant"] },
  { title: "Blog", children: ["Latest Posts", "Travel Tips"] },
  { title: "Contact", children: [] },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="absolute flex items-center justify-between pr-6 z-30 w-full mt-0 pt-0">
      <div className="relative">
        <div className="absolute inset-0 bg-white transform -skew-x-12 -left-4"></div>

        <div className="relative py-2 px-5 h-full">
          <Image
            src="/logo.svg"
            alt="logo"
            width={190}
            height={130}
            priority
            loading="eager"
            className="w-32 md:w-44 lg:w-52 h-auto"
          />
        </div>
      </div>

      <nav className="bg-transparent ">
        <div className="hidden 2xl:flex" id="navbar-dropdown">
          <ul className="flex p-4 md:space-x-8 ">
            {menu.map((item, index) => (
              <li key={index} className="relative group">
                <div className="flex items-center text-white transition-colors duration-300 cursor-pointer font-semibold text-opacity-70 hover:text-primary hover:text-opacity-100">
                  {item.title}
                  {item.children && item.children.length > 0 && (
                    <ChevronDown className="w-5 h-5 ms-2" />
                  )}
                </div>

                <ul
                  className="w-56 divide-y divide-gray-200  absolute left-0 mt-7  origin-top scale-y-0 transform bg-primary text-white shadow-lg 
                 transition-transform duration-200 ease-in-out group-hover:scale-y-100"
                >
                  {item.children.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-4 transition-colors duration-200 hover:bg-secondary hover:text-black hover:scale-105 hover:shadow-md cursor-pointer "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex items-center gap-4 mt-3">
        <div
          className="flex items-center justify-center p-2 md:p-3 rounded-full bg-[rgba(236,253,245,0.2)] 
                w-10 h-10 md:w-14 md:h-14 cursor-pointer"
        >
          <Image
            src="/icons/search.svg"
            alt="search icon"
            priority
            width={22}
            height={22}
            className="w-5 h-5 md:w-[27px] md:h-[27px]"
            loading="eager"
          />
        </div>

        <div className="hidden  2xl:flex  p-3 rounded-full bg-[rgba(236,253,245,0.2)] text-white  flex-col justify-center items-center w-14 h-14 cursor-pointer gap-2">
          <span className="w-[20px] h-[2px] bg-white rounded"></span>
          <span className="w-[20px] h-[2px] bg-white rounded ml-2 font-bold"></span>
          <span className="w-[20px] h-[2px] bg-white rounded"></span>
        </div>
        <div className="hidden md:block">
          <Button size="lg">
            <span className="text-[16px] ">Book Your Stay</span>
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
        <div
          onClick={() => setOpen(true)}
          className="block 2xl:hidden bg-secondary rounded-sm hover:bg-primary 
             transition-colors duration-300 cursor-pointer 
             p-1.5 sm:p-2"
        >
          <Menu className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black" />
        </div>

        <div
          className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setOpen(false)}
        ></div>
        <div
          className={`fixed top-0 right-0 z-50 h-full w-80 font-semibold bg-white shadow-lg transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-[100%]"
          }`}
          onClick={() => setOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg  transition-transform duration-300 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end items-center mb-6 p-5">
              <button className="cursor-pointer" onClick={() => setOpen(false)}>
                <X className="w-8 h-8 text-primary" />
              </button>
            </div>

            <ul className="mt-5 divide-y divide-gray-400 p-3">
              {menu.map((item, i) => (
                <li key={i} className="py-3">
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-primary"
                    onClick={() => toggle(i)}
                  >
                    <span>{item.title}</span>
                    {item.children.length > 0 && (
                      <ChevronDown
                        className={`h-6 w-6 transition-transform duration-300 ${
                          openIndex === i ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    )}
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      openIndex === i
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="ml-4 space-y-2 divide-y divide-gray-400 text-sm text-gray-600 ">
                      {item.children.map((sub, j) => (
                        <li
                          key={j}
                          className="cursor-pointer hover:text-primary transition py-3"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
