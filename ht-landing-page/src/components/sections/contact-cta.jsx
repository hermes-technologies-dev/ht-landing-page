import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactCta({ data }) {
  return (
    <section className="bg-[#F4F0E6] px-7 py-8 md:px-12 md:py-12">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between overflow-hidden rounded-[18px] bg-[#F7F7F7] px-6 py-7 md:px-10">
        <div className="max-w-[520px]">
          <p className="text-sm font-medium text-[#0A0A0A]">{data.title}</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#0A0A0A] md:text-4xl">
            {data.headline}
          </h2>
          <p className="mt-3 max-w-md text-xs leading-relaxed text-[#202020] md:text-sm">
            {data.description}
          </p>

          <Button
            asChild
            className="mt-5 bg-[#0A0A0A] text-[#F4F0E6] hover:bg-[#202020]"
          >
            <Link href={data.cta.href}>{data.cta.label}</Link>
          </Button>
        </div>

        <img
          src={data.image.src}
          alt={data.image.alt}
          className="hidden w-[32%] max-w-[300px] object-contain md:block"
        />
      </div>
    </section>
  );
}
