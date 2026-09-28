import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header({ data }) {
  return (
    <header className="fixed top-0 right-0 left-0  z-50 p-3 rounded-b-[18px] bg-primary text-[#F4F0E6] ">
      <div className="mx-auto flex  items-center justify-between gap-6">
        <Link href="/" aria-label={data.logo.alt}>
          <img
            src={data.logo.src}
            alt={data.logo.alt}
            className="h-25 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {data.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}

          <Button
            variant="outline"
            className="h-9 rounded-md border-accent bg-transparent p-6 text-md text-accent hover:bg-accent hover:text-black"
          >
            <Link href={data.cta.href}>{data.cta.label}</Link>
          </Button>
        </nav>

        {/* <Link
          href={data.cta.href}
          className="rounded-md border border-[#D4AF37] px-3 py-2 text-[10px] md:hidden"
        >
          Contato
        </Link> */}
      </div>
    </header>
  );
}
