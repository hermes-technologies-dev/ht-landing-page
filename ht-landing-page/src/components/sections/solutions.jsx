import { SectionHeading } from "@/components/shared/section-heading";
import { SolutionCard } from "@/components/shared/solution-card";

export function Solutions({ data }) {
  return (
    <section id="solucoes" className="bg-[#F4F0E6] px-7 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-[1380px]">
        <SectionHeading title={data.title} description={data.description} />

        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {data.items.map((item) => (
            <SolutionCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
