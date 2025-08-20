import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 ">
      <div className=" flex items-start justify-between flex-wrap gap-10 px-6 py-10 sm:px-12 sm:py-14 md:px-20 md:py-16 lg:px-28 lg:py-20 xl:px-36">
        <div className=" flex flex-col items-start gap-5 flex-1 min-w-[250px]">
          <Image src="/white_logo.svg" alt="logo" width={200} height={1500} />
          <p className="text-muted">
            Nam libero tempore cum soluta nobis eseligendi optio cumque nihile
            impedit quo minus maxime placeat facere
          </p>
          <div className="flex gap-4">
            <div className="w-14 h-14 flex items-center justify-center bg-neutral-800 rounded-md shrink-0">
              <Image
                src="/icons/facebook.svg"
                alt="facebook icon"
                width={19}
                height={19}
              />
            </div>
            <div className="w-14 h-14 flex items-center justify-center bg-neutral-800 rounded-md shrink-0">
              <Image
                src="/icons/twitter.svg"
                alt="twitter icon"
                width={19}
                height={19}
              />
            </div>
            <div className="w-14 h-14 flex items-center justify-center bg-neutral-800 rounded-md shrink-0">
              <Image
                src="/icons/instagram.svg"
                alt="instagram icon"
                width={19}
                height={19}
              />
            </div>
            <div className="w-14 h-14 flex items-center justify-center bg-neutral-800 rounded-md shrink-0">
              <Image
                src="/icons/behance.svg"
                alt="behance icon"
                width={19}
                height={19}
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-5 flex-1 min-w-[200px]">
          <h3 className="text-white text-2xl font-bold">EXPLORE</h3>
          <ul className="text-muted space-y-4">
            <li>About Hotel</li>
            <li>Pricing</li>
            <li>Hotel Staff</li>
            <li>Latest News</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className=" flex flex-col items-start gap-5 flex-1 min-w-[250px]">
          <h3 className="text-white text-2xl font-bold">CONTACT</h3>
          <div className="text-muted text-md">
            7631 Sabina Park, 115 Devon Isle, Louisiana, USA
          </div>
          <div className="text-white text-xl ">(+1) 987 654 3210</div>
          <div className="text-white text-xl ">info@domain.com</div>
        </div>
        <div className=" flex flex-col items-start gap-10 bg-neutral-800/40 rounded-3xl p-14 flex-2 min-w-[300px] min-h-[300px]">
          <h3 className="text-white text-2xl font-bold">NEWSLETTER</h3>

          <div className="flex items-center border-b-[1.5px] pb-2 border-white w-full">
            <input
              type="text"
              className="flex-1 bg-transparent outline-0 text-white placeholder-gray-400 p-2"
              placeholder="Ex. info@domain.com"
            />
            <button type="submit" className="ml-2">
              <svg
                className="w-6 h-6 text-white rotate-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  fill="#ffffff"
                  d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="relative w-5 h-5 rounded-full bg-white border border-primary flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-3 h-3 text-black text-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="text-white text-sm">
              I agree to all terms and policies
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-neutral-800/40 mt-12"></div>
      <div className="flex items-center flex-wrap gap-5 text-muted justify-between px-2 pt-4 pb-7">
        <div>© Copyright 2025 Fixyland. All Rights Reserved.</div>
        <div className=" flex items-center gap-5">
          <div>Terms and Conditions</div>
          <div className="h-[1px] w-4 bg-muted rotate-90"></div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
}
