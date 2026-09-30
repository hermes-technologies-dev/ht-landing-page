import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactCta({ data }) {
  return (
    <section className=" px-7 py-8 md:px-12 md:py-12">
      <div className="mx-auto flex bg-muted items-center justify-between overflow-hidden rounded-[18px] px-6 py-7 md:px-10">
        <div className="">
          <p className="text-sm font-medium text-black">{data.title}</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-black md:text-4xl">
            {data.headline}
          </h2>
          <p className="mt-3 max-w-md text-xs leading-relaxed text-[#202020] md:text-sm">
            {data.description}
          </p>
          <Link className="cursor-pointer" href={data.cta.href}>
            <Button className=" cursor-pointer mt-5 bg-black text-primary-foreground p-6 hover:bg-[#202020]">
              {data.cta.label}
            </Button>
          </Link>
        </div>

        <img
          src={data.image.src}
          alt={data.image.alt}
          className="hidden  object-contain md:block"
        />
      </div>
    </section>
  );
}
