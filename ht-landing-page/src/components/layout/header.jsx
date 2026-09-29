import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Header({ data }) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 rounded-b-[18px] bg-primary px-6 py-2 text-[#F4F0E6]">
      <div className="mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" aria-label={data.logo.alt}>
          <Image
            width={80}
            height={80}
            src={data.logo.src}
            alt={data.logo.alt}
            className="object-contain"
          />
        </Link>

        {/* =========================
            DESKTOP MENU
        ========================== */}
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

          <Link href={data.cta.href}>
            <Button
              variant="outline"
              className="h-9 cursor-pointer rounded-md border-accent bg-transparent p-6 text-md text-accent hover:bg-accent hover:text-black"
            >
              {data.cta.label}
            </Button>
          </Link>
        </nav>

        {/* =========================
            MOBILE MENU
        ========================== */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Abrir menu"
              className="inline-flex size-10 items-center justify-center rounded-md text-[#F4F0E6] transition-colors hover:bg-white/10 hover:text-accent"
            >
              <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85%] border-none bg-primary text-[#F4F0E6] sm:max-w-sm"
            >
              <nav className="mt-8 flex flex-col gap-5">
                {data.navigation.map((item) => (
                  <SheetClose key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-3 text-base transition-colors hover:bg-white/10 hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}

                <SheetClose>
                  <Link
                    href={data.cta.href}
                    className="rounded-md px-3 py-3 text-base transition-colors hover:bg-white/10 hover:text-accent"
                  >
                    {data.cta.label}
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}