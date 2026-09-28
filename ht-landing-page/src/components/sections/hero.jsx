import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero({ data }) {
  return (
    <section className="overflow-hidden bg-[#F4F0E6] px-7 py-12 md:px-12 md:py-16">
      <div className="mx-auto grid max-w-[1380px] items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
        <div className="max-w-[560px]">
          <h1 className="text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#0A0A0A] md:text-7xl lg:text-[82px]">
            {data.title}
          </h1>

          <p className="mt-7 max-w-[450px] text-sm leading-relaxed text-[#202020] md:text-base">
            {data.description}
          </p>

          <Button
            asChild
            className="mt-7 rounded-md bg-[#D4AF37] px-5 text-xs font-medium text-[#0A0A0A] hover:bg-[#B99522]"
          >
            <Link href={data.cta.href}>{data.cta.label}</Link>
          </Button>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="w-[72%] max-w-[560px] object-contain md:w-[88%]"
          />
        </div>
      </div>
    </section>
  );
}
