import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";

export function Process({ data }) {
  return (
    <section id="processo" className="bg-[#F4F0E6] px-7 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-[1380px]">
        <SectionHeading title={data.title} description={data.description} />

        <Accordion type="single" collapsible defaultValue="01" className="mt-8 space-y-2">
          {data.items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="overflow-hidden rounded-[16px] border border-[#D4AF37] bg-[#F7F7F7] px-5"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <span className="flex items-center gap-5 text-left">
                  <span className="text-2xl font-light md:text-3xl">{item.id}</span>
                  <span className="text-sm font-medium md:text-base">{item.title}</span>
                </span>
              </AccordionTrigger>

              <AccordionContent className="pb-5 text-xs leading-relaxed text-[#202020] md:max-w-[80%] md:text-sm">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
