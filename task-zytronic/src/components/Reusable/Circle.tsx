import Image from "next/image";

export default function Circle({ bgColor }: { bgColor?: string }) {
  return (
    <div
      className={`flex-shrink-0 h-12 w-12 rounded-full ${bgColor ? bgColor : "bg-primary"} z-10 flex items-center justify-center overflow-visible`}
    >
      <Image
        src="/icons/shape.svg"
        alt="about image"
        className="bg-cover z-20"
        width={30}
        height={30}
        loading="lazy"
      />
    </div>
  );
}
