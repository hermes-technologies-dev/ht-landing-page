import { SectionHeading } from "@/components/shared/section-heading";
import { FounderCard } from "@/components/shared/founder-card";

export function About({ data }) {
  return (
    <section id="sobre" className="bg-[#F4F0E6] px-7 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-[1380px]">
        <SectionHeading title={data.title} description={data.description} />

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {data.founders.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
