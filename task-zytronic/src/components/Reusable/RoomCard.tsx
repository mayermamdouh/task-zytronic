import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  price: string;
  roomName: string;
  paraGraph: string;
  myHref?: string | undefined;
  news?: boolean;
  image: string;
};

export default function RoomCard({
  price,
  roomName,
  paraGraph,
  myHref,
  news,
  image,
}: Props) {
  return (
    <div className="flex flex-col items-start justify-center   ">
      <div className="relative w-[400px] h-[270px] rounded-3xl overflow-hidden group">
        <div className="absolute top-5 left-6 bg-primary rounded-md py-1 px-3 text-white z-20">
          {price}
        </div>
        <Image
          src={image}
          alt="room image"
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
        />
      </div>

      <div className="space-y-3">
        {news && (
          <div className="flex items-center gap-3 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 24 24"
              className="text-primary h-5 w-5"
            >
              <path
                fill="currentColor"
                d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"
              />
            </svg>
            <div className="text-muted text-lg">January 16, 2024</div>
            <div className="h-[1px] w-7 bg-primary"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 512 512"
              className="text-primary h-5 w-5"
            >
              <path
                fill="currentColor"
                d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6ZM432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480Z"
              />
            </svg>
            <div className="text-muted text-lg">Admin</div>
          </div>
        )}
        <div className="text-[25px] font-[800] mt-3">{roomName}</div>

        {!news && (
          <div className="flex items-center text-muted w-full gap-10">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 1920 1792"
                  className="w-5 h-5 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M593 896q-162 5-265 128H194q-82 0-138-40.5T0 865q0-353 124-353q6 0 43.5 21t97.5 42.5T384 597q67 0 133-23q-5 37-5 66q0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5H523q-121 0-194-69.5T256 1533q0-53 3.5-103.5t14-109T300 1212t43-97.5t62-81t85.5-53.5T602 960q10 0 43 21.5t73 48t107 48t135 21.5t135-21.5t107-48t73-48t43-21.5q61 0 111.5 20t85.5 53.5t62 81t43 97.5t26.5 108.5t14 109t3.5 103.5zM640 256q0 106-75 181t-181 75t-181-75t-75-181t75-181T384 0t181 75t75 181zm704 384q0 159-112.5 271.5T960 1024T688.5 911.5T576 640t112.5-271.5T960 256t271.5 112.5T1344 640zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128q81-117 81-256q0-29-5-66q66 23 133 23q59 0 119-21.5t97.5-42.5t43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75t-181-75t-75-181t75-181t181-75t181 75t75 181z"
                  />
                </svg>

                <span>2</span>
              </div>
              <div>Guests</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-primary"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="currentColor"
                      d="M3 5a1 1 0 0 1 .993.883L4 6v7h7V8a1 1 0 0 1 .883-.993L12 7h7a3 3 0 0 1 2.995 2.824L22 10v8a1 1 0 0 1-1.993.117L20 18v-3H4v3a1 1 0 0 1-1.993.117L2 18V6a1 1 0 0 1 1-1Zm4.5 2a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z"
                    />
                  </g>
                </svg>
                <span>1</span>
              </div>
              <div>Beds</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Image
                  src="/bathtub.png"
                  alt="bathtub image"
                  className=" text-primary "
                  width={20}
                  height={20}
                />
                <span>1</span>
              </div>
              <div>Bath</div>
            </div>
          </div>
        )}
        <p className="leading-[1.5em] text-muted">{paraGraph}</p>
      </div>

      {news ? (
        <div className="mt-7">
          <Button size="lg" variant="destructive">
            <span className="text-[16px] ">Learn More Hotel</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
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
      ) : (
        <Link
          href={myHref ?? "/"}
          className="group flex items-center gap-4 text-primary font-medium cursor-pointer border-b-1 border-primary pb-1 mt-4"
        >
          <span>Read More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-45"
            fill="none"
            viewBox="0 0 22 22"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H9M17 7V15"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
