// src/components/SplitText/SplitText.jsx
// Faz o texto aparecer letra por letra (by="letter") ou palavra por palavra (by="word").
export default function SplitText({ text, delay = 0, by = "letter", className = "" }) {
  const words = text.split(" ");
  let i = 0;

  return (
    <span
      className={className}
      aria-label={text}
      style={{ "--d": `${delay}ms`, "--s": by === "word" ? "55ms" : "32ms" }}
    >
      {words.map((word, w) => (
        <span key={w} aria-hidden="true">
          <span className="inline-block whitespace-nowrap">
            {by === "word" ? (
              <span className="letter" style={{ "--i": i++ }}>{word}</span>
            ) : (
              [...word].map((ch, c) => (
                <span key={c} className="letter" style={{ "--i": i++ }}>{ch}</span>
              ))
            )}
          </span>
          {w < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}