import Image from "next/image";
import SectionTitle from "../Reusable/SectionTitle";
import { Star } from "lucide-react";

export default function FeedBack() {
  return (
    <section className="bg-white py-20 px-20 flex flex-col items-center gap-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
        <div className="flex flex-col items-start relative">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/feedback.jpg"
              alt="feedback background"
              className="object-cover"
              fill
            />
          </div>

          <div className="absolute bottom-20 -right-16 rounded-2xl z-50 border-4 border-white">
            <Image
              src="/feedback2.jpg"
              alt="feedback overlay"
              className="object-cover rounded-2xl shadow-lg"
              width={250}
              height={250}
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-3">
          <SectionTitle text={"Hotel Services"} />
          <h2 className="text-[40px] font-[800]">
            <div>Amazing Feedback Say</div>
            <div>About Services</div>
          </h2>
          <div className=" bg-background rounded-xl p-10 space-y-5">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <div className="text-lg text-muted">
              &quot;Special treat to dine, It was wow experience food was really
              delicious! outstanding dinner made by Mater chef, food experience
              was unfogetable!&quot;
            </div>
            <div className="h-[1.5px] w-full bg-gray-300"></div>
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
                <div className="text-[18px] font-semibold">
                  Robert L. Robinson
                </div>
                <div className="text-muted">CEO & Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
