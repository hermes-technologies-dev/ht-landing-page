import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header({ data }) {
  return (
    <header className="relative z-50 p-4 rounded-b-[18px] bg-primary text-[#F4F0E6] ">
      <div className="mx-auto flex  items-center justify-between gap-6">
        <Link href="/" aria-label={data.logo.alt}>
          <img
            src={data.logo.src}
            alt={data.logo.alt}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {data.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}

          <Button
            asChild
            variant="outline"
            className="h-9 rounded-md border-[#D4AF37] bg-transparent px-4 text-[11px] text-[#F4F0E6] hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
          >
            <Link href={data.cta.href}>{data.cta.label}</Link>
          </Button>
        </nav>

        <Link
          href={data.cta.href}
          className="rounded-md border border-[#D4AF37] px-3 py-2 text-[10px] md:hidden"
        >
          Contato
        </Link>
      </div>
    </header>
  );
}
