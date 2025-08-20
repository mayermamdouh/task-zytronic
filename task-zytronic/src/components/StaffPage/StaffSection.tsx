import React from "react";
import SectionTitle from "../Reusable/SectionTitle";
import Image from "next/image";

export default function StaffSection() {
  const staff = [
    { name: "Michael Dean", role: "Chef Master", img: "/person1.jpg" },
    { name: "Arnold Taylor", role: "Room Cleaner", img: "/person2.jpg" },
    { name: "Sophie Miller", role: "Assistant Chef", img: "/person3.jpg" },
    { name: "David Johnson", role: "Supervisor", img: "/person4.jpg" },
  ];
  const iconsImages = [
    "/staff1.png",
    "/staff2.png",
    "/staff3.png",
    "/staff4.png",
    "/staff5.png",
    "/staff6.png",
  ];
  return (
    <section className=" bg-white ">
      <div className="relative bg-primary w-full px-20 flex flex-col items-center justify-center gap-5 py-16 ">
        <div className="mb-20 text-center space-y-1.5 ">
          <SectionTitle text="Fixyland Staff" />
          <h2 className="text-white text-[40px] font-[800] fadeInUp">
            Expert Staff Persons
          </h2>
        </div>

        <div className="top-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full px-4 lg:px-28">
          {staff.map((person, index) => (
            <div
              key={index}
              className="flex flex-col h-[500px] items-center gap-3 bg-white rounded-2xl shadow-md w-full "
            >
              <div className="relative w-full h-[400px] rounded-t-xl overflow-hidden">
                <Image
                  src={person.img}
                  alt={person.name}
                  className="object-cover"
                  fill
                />
                <button className="absolute text-2xl bottom-3 right-3 flex items-center justify-center w-10 h-10 rounded-md bg-primary text-white shadow-md hover:bg-primary/90 transition">
                  +
                </button>
              </div>
              <div className="py-4 px-2 text-center space-y-3">
                <h3 className="font-semibold text-xl">{person.name}</h3>
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-primary h-[3px] rounded-md w-8"></div>
                  <h3 className="text-muted text-sm">{person.role}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pt-24 pb-24 px-2 w-full">
        {iconsImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`staff image ${index + 1}`}
            className="object-cover"
            width={200}
            height={200}
          />
        ))}
      </div>
    </section>
  );
}
