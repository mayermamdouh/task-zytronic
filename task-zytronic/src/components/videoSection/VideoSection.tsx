import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="relative  w-full h-[500px]">
      <div className="absolute inset-0 bg-black/45 z-10" />
      <Image
        src="/videoImage.jpg"
        alt="video Image"
        fill
        className="object-cover"
      />
    </section>
  );
}
