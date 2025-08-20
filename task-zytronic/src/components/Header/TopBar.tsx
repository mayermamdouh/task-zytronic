import Image from "next/image";
import React from "react";

export default function TopBar() {
  return (
    <section className="bg-primary text-white min-h-[45px] flex items-center px-2 md:px-10 gap-3">
      <div className="text-[12px] md:text-[15px]  items-center gap-3 hidden md:flex">
        <div className="flex items-center gap-2 ">
          <div className="h-1 w-1 rounded-full bg-secondary"></div>
          <span>7631 Sabina Park, 118 Devon Isle, USA</span>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="h-1 w-1 rounded-full bg-secondary"></div>
          <span>info@domain.com</span>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="h-1 w-1 rounded-full bg-secondary"></div>
          <span>(+1) 987 654 3218</span>
        </div>
      </div>
      <div className="w-full md:w-fit flex items-center justify-center md:ml-auto  gap-4">
        <Image
          src="/icons/facebook.svg"
          alt="facebook icon"
          width={18}
          height={18}
          loading="eager"
          priority
        />
        <Image
          src="/icons/twitter.svg"
          alt="twitter icon"
          width={18}
          height={18}
          loading="eager"
          priority
        />
        <Image
          src="/icons/instagram.svg"
          alt="instagram icon"
          width={18}
          height={18}
          loading="eager"
          priority
        />
        <Image
          src="/icons/behance.svg"
          alt="behance icon"
          width={18}
          height={18}
          loading="eager"
          priority
        />
      </div>
    </section>
  );
}
