"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="
        fixed
        cursor-pointer
        bottom-6
        right-6
        z-50
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-accent
        bg-priamry
        text-accent
        shadow-lg
        transition-all
        duration-200
        hover:-translate-y-1
        hover:bg-accent
        hover:text-priamry
        focus:outline-none
        focus:ring-2
        focus:ring-accent
        focus:ring-offset-2
      "
    >
      <ArrowUp size={22} strokeWidth={2} />
    </button>
  );
}