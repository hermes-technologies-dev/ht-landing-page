import Link from "next/link";

const variants = {
  light: "bg-[#F4F0E6] text-[#0A0A0A] border-[#D4AF37]",
  navy: "bg-[#0B1628] text-[#F4F0E6] border-[#D4AF37]",
  dark: "bg-[#202020] text-[#F4F0E6] border-[#D4AF37]",
};

export function SolutionCard({ item }) {
  return (
    <article
      className={`group relative min-h-[210px] overflow-hidden rounded-[16px] border p-4 ${variants[item.variant] || variants.light}`}
    >
      <div className="relative z-10 flex h-full flex-col justify-between">
        <h3 className="max-w-[170px] text-sm font-medium leading-tight md:text-base">
          <span className="box-decoration-clone bg-current/10 px-1 py-0.5">
            {item.title}
          </span>
        </h3>

        <div className="flex items-end justify-between gap-4">
          <Link
            href={item.href}
            className="text-[10px] underline-offset-4 transition-all hover:underline"
          >
            ↗ {item.ctaLabel}
          </Link>
        </div>
      </div>

      <img
        src={item.image}
        alt=""
        className="absolute bottom-0 right-0 h-[82%] w-[55%] object-contain object-right-bottom transition-transform duration-500 group-hover:scale-105"
      />
    </article>
  );
}
