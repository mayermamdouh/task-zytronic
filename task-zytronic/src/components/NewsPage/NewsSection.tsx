import RoomCard from "../Reusable/RoomCard";
import SectionTitle from "../Reusable/SectionTitle";

export default function NewsSection() {
  return (
    <section className="my-10 mx-2 lg:my-28 lg:mx-20">
      <div className="flex flex-col items-center justify-center gap-3">
        <SectionTitle text="Hotel News" />
        <div className="text-[40px] font-[800]">
          Get More Update For Flxyland
        </div>
        <div className="w-full mt-4 px-4 lg:mt-10 lg:px-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">
          <RoomCard
            price={"Hotel"}
            roomName={"Junior Rooms"}
            paraGraph={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
            }
            news={true}
            image="/news1.jpg"
          />
          <RoomCard
            price={"Room"}
            roomName={"Junior Rooms"}
            paraGraph={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
            }
            news={true}
            image="/news2.jpg"
          />
          <RoomCard
            price={"Resort"}
            roomName={"Junior Rooms"}
            paraGraph={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
            }
            news={true}
            image="/news3.jpg"
          />
        </div>
      </div>
    </section>
  );
}
