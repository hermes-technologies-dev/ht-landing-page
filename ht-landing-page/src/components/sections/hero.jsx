import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero({ data }) {
  return (
    <section className=" overflow-hidden px-7 py-12 md:px-12 md:py-16">
      <div className="mx-auto grid  items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
        <div className="">
          <h1 className="text-5xl font-semibold leading-[0.96] tracking-[-0.055em]text-black md:text-7xl lg:text-[82px]">
            {data.title}
          </h1>

          <p className="mt-7 ] text-sm leading-relaxed text- md:text-base">
            {data.description}
          </p>

          <Button className="mt-7 rounded-md bg-accent p-6 text-md font-medium text-white hover:bg-accent hover:transform">
            <Link href={data.cta.href}>{data.cta.label}</Link>
          </Button>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src={data.image.src} alt={data.image.alt} />
        </div>
      </div>
    </section>
  );
}
