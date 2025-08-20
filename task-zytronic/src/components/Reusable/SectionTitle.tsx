export default function SectionTitle({ text }: { text: string }) {
  return (
    <span className="bg-white font-semibold text-primary uppercase rounded-md text-[14px] tracking-[1.5px] py-1.5 px-2.5 shadow-sm inline-block">
      {text}
    </span>
  );
}
