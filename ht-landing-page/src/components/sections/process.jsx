import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";

export function Process({ data }) {
  return (
    <section id="processo" className="px-7 py-10 md:px-12 md:py-16">
      <div className="mx-auto">
        <SectionHeading title={data.title} description={data.description} />

        <Accordion defaultValue={["01"]} className="mt-8 space-y-2">
          {data.items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="
                group
                overflow-hidden
                rounded-[32px]
                border
                border-[var(--ht-gold)]
                bg-[var(--ht-gray)]
                px-5
                transition-colors
                duration-300

                data-open:bg-[var(--ht-navy)]
              "
            >
              <AccordionTrigger
                className="
                  relative
                  cursor-pointer
                  py-6
                  hover:no-underline
                "
              >
                <span className="flex w-full items-center justify-between gap-5 text-left">
                  <span className="flex items-center gap-5">
                    {/* Número */}
                    <span
                      className="
                        text-2xl
                        font-light
                        text-[var(--ht-black)]
                        transition-colors
                        duration-300
                        md:text-3xl

                        group-data-open:text-[var(--ht-ivory)]
                      "
                    >
                      {item.id}
                    </span>

                    {/* Título */}
                    <span
                      className="
                        text-sm
                        font-medium
                        text-[var(--ht-black)]
                        transition-colors
                        duration-300
                        md:text-base

                        group-data-open:text-[var(--ht-ivory)]
                      "
                    >
                      {item.title}
                    </span>
                  </span>
                </span>
              </AccordionTrigger>

              <AccordionContent
                className="
                  pb-0
                  text-xs
                  leading-relaxed
                  text-[var(--ht-ivory)]
                  md:text-sm
                "
              >
                {/* Barra separadora */}
                <div
                  className="
                    mb-6
                    h-[2px]
                    w-full
                    bg-[var(--ht-gold)]
                  "
                />

                {/* Texto */}
                <p
                  className="
                    pb-6
                    text-[var(--ht-ivory)]
                  "
                >
                  {item.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
