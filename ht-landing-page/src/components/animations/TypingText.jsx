"use client";

import { useEffect, useState } from "react";

export default function TypingText() {
  const words = [
    "ideias",
    "problemas",
    "processos",
    "desafios",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.slice(0, text.length + 1));

        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span >
      Transformamos{" "}
      <span className="text-[#0F3D91]">
        {text}
        <span className="ml-1 animate-pulse">|</span>
      </span>
    </span>
  );
}