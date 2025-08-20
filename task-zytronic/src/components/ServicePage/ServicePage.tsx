import Image from "next/image";
import SectionTitle from "../Reusable/SectionTitle";
import { Button } from "../ui/button";

export default function ServicePage() {
  return (
    <section className="bg-white py-10 px-4 lg:py-20 lg:px-20 flex flex-col items-center gap-16">
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-1 flex-col items-center md:items-start gap-3 text-center md:text-left">
          <SectionTitle text={"Hotel Services"} />
          <h2 className="text-[40px] font-[800]">
            <div>Get The Best Hotel</div>
            <div>Fixyland Services</div>
          </h2>
          <p className="leading-[1.5em] text-muted">
            Nulla vitae ex nunc. Morbi quis purus convallis, fermentum hioon
            metus volutpat design sodales purus. Nunc quis an mauris etion eros
            vulputate mattis Nulla vitae ex nunc.
          </p>
          <div className="mt-5">
            <Button size="lg" variant="destructive">
              <span className="text-[16px] ">View All</span>
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
        <div className="flex-1 flex-col items-center justify-center space-y-3 w-full">
          <div className="flex gap-5 w-full">
            <div className="flex-1 shadow-md rounded-2xl p-10 bg-white hover:bg-primary hover:text-white transition duration-300 group">
              <div className="flex flex-col items-start gap-3">
                <Image
                  src="/bike.png"
                  alt="bike image"
                  width={100}
                  height={100}
                  className="group-hover:invert transition"
                />
                <h3 className="text-[25px] font-[800] group-hover:text-white">
                  Fitness Center
                </h3>
                <p className="group-hover:text-white">
                  orem npsum dolor sit conse cteturs adipisciorem npsum dolor
                  sit conse cteturs adipiscin
                </p>
              </div>
            </div>

            <div className="flex-1 shadow-md rounded-2xl p-10 bg-white hover:bg-primary hover:text-white transition duration-300 group">
              <div className="flex flex-col items-start gap-3">
                <Image
                  src="/jacuzzi.png"
                  alt="jacuzzi image"
                  width={100}
                  height={100}
                  className="group-hover:invert transition"
                />
                <h3 className="text-[25px] font-[800] group-hover:text-white">
                  Jacuzzi
                </h3>
                <p className="group-hover:text-white">
                  orem npsum dolor sit conse cteturs adipisciorem npsum dolor
                  sit conse cteturs adipiscin
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 w-full">
            <div className="flex-1 shadow-md rounded-2xl p-10 gap-5 bg-white hover:bg-primary hover:text-white transition duration-300 group">
              <div className="flex flex-col items-start gap-3">
                <Image
                  src="/swimming.png"
                  alt="swimming image"
                  width={100}
                  height={100}
                  className="group-hover:invert transition"
                />
                <h3 className="text-[25px] font-[800] group-hover:text-white">
                  Swimming Pool
                </h3>
                <p className="group-hover:text-white">
                  orem npsum dolor sit conse cteturs adipisciorem npsum dolor
                  sit conse cteturs adipiscin
                </p>
              </div>
            </div>

            <div className="flex-1 shadow-md rounded-2xl p-10 gap-5 bg-white hover:bg-primary hover:text-white transition duration-300 group">
              <div className="flex flex-col items-start gap-3">
                <Image
                  src="/relax.png"
                  alt="relax image"
                  width={100}
                  height={100}
                  className="group-hover:invert transition"
                />
                <h3 className="text-[25px] font-[800] group-hover:text-white">
                  SPA Treatments
                </h3>
                <p className="group-hover:text-white">
                  orem npsum dolor sit conse cteturs adipisciorem npsum dolor
                  sit conse cteturs adipiscin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-x-4 lg:space-x-10 flex items-center ">
        <div> Call us Today: (+1) 987 654 3210</div>
        <div>OR</div>
        <div>Email us: info@domain.com</div>
      </div>
    </section>
  );
}
