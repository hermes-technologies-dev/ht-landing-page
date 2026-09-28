import Link from "next/link";

export function ProjectCard({ item, first }) {
  return (
    <article
      className={`flex flex-col justify-between gap-6 ${!first ? "md:border-l md:border-[#F4F0E6]/70 md:pl-7" : ""}`}
    >
      <p className="text-md leading-relaxed text-[#F4F0E6]">
        {item.description}
      </p>

      {/* <Link
        href={item.href}
        className="text-[10px] text-[#D4AF37] underline-offset-4 hover:underline"
      >
        {item.ctaLabel} ↗
      </Link> */}
    </article>
  );
}
