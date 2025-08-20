export default function StrokeText({ text }: { text: string }) {
  return (
    <svg viewBox="0 0 400 110" height="100">
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Poppins, sans-serif"
        fontSize="50"
        fill="transparent"
        stroke="white"
        strokeWidth="1"
      >
        {text}
      </text>
    </svg>
  );
}
