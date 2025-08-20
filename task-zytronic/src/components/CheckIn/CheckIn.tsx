"use client";
import { useState } from "react";
import { Button } from "../ui/button";

export default function CheckIn() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [room, setRoom] = useState("Single");
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");

  return (
    <div className="relative -mt-16 z-50 w-full flex justify-center items-center">
      <form className="w-full rounded-l-xl p-8  flex flex-col  sm:flex-row items-center justify-between gap-4 bg-primary/85 shadow-lg ml-20">
        <div className="flex flex-col w-full sm:w-auto gap-1">
          <label className=" text-lg text-white">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="bg-white px-4 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
        </div>

        <div className="flex flex-col w-full sm:w-auto ">
          <label className=" text-lg  text-white">Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="bg-white px-4 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
        </div>

        <div className="flex flex-col w-full sm:w-auto  ">
          <label className="mb-1 text-sm font-semibold text-white">Room</label>
          <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="bg-white px-4 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option>Single</option>
            <option>Double</option>
            <option>Suite</option>
          </select>
        </div>

        <div className="flex flex-col w-full sm:w-auto  ">
          <label className="mb-1 text-sm font-semibold text-white">
            Adults
          </label>
          <select
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="bg-white px-4 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="flex flex-col w-full sm:w-auto  ">
          <label className="mb-1 text-sm font-semibold text-white">
            Children
          </label>
          <select
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className="bg-white px-4 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div className="flex items-center gap-4 ">
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
        </div>
      </form>
    </div>
  );
}
