import Circle from "../Reusable/Circle";
import StrokeText from "../Reusable/StrokeText";

export default function Tape() {
  return (
    <section>
      <div className="relative w-[110%] h-[100px] bg-primary rotate-3 -left-10 overflow-hidden z-20">
        <div className="flex items-center animate-tape">
          <Circle bgColor="bg-[var(--circle1)]" />
          <StrokeText text="Hotel & Resort" />
          <Circle bgColor="bg-[var(--circle1)]" />
          <StrokeText text="Holiday Booking" />
          <Circle bgColor="bg-[var(--circle1)]" />
          <StrokeText text="Luxury Hotel" />
          <Circle bgColor="bg-[var(--circle1)]" />
          <StrokeText text="Relax" />

          <Circle bgColor="bg-[var(--circle1)]" />
          <StrokeText text="Hotel & Resort" />
          <Circle bgColor="bg-[var(--circle1)]" />
          <StrokeText text="Holiday Booking" />
          <Circle bgColor="bg-[var(--circle1)]" />
          <StrokeText text="Luxury Hotel" />
          <Circle bgColor="bg-[var(--circle1)]" />
          <StrokeText text="Relax" />
        </div>
      </div>

      <div className="relative w-[110%] h-[100px] bg-ring -rotate-3 -left-10 overflow-hidden -mt-24 z-10">
        <div className="flex items-center animate-tape-reverse">
          <Circle bgColor="bg-[var(--circle2)]" />
          <StrokeText text="Hotel & Resort" />
          <Circle bgColor="bg-[var(--circle2)]" />
          <StrokeText text="Holiday Booking" />
          <Circle bgColor="bg-[var(--circle2)]" />
          <StrokeText text="Luxury Hotel" />
          <Circle bgColor="bg-[var(--circle2)]" />
          <StrokeText text="Relax" />

          <Circle bgColor="bg-[var(--circle2)]" />
          <StrokeText text="Hotel & Resort" />
          <Circle bgColor="bg-[var(--circle2)]" />
          <StrokeText text="Holiday Booking" />
          <Circle bgColor="bg-[var(--circle2)]" />
          <StrokeText text="Luxury Hotel" />
          <Circle bgColor="bg-[var(--circle2)]" />
          <StrokeText text="Relax" />
        </div>
      </div>
    </section>
  );
}
