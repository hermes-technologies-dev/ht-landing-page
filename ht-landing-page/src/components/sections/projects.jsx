import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";

export function Projects({ data }) {
  return (
    <section id="projetos" className=" px-7 py-10 md:px-12 md:py-16">
      <div className="mx-auto">
        <SectionHeading title={data.title} description={data.description} />

        <div className="mt-8 grid gap-7 rounded-[18px] bg-secondary p-6 md:grid-cols-3 md:p-8">
          {data.items.map((item, index) => (
            <ProjectCard key={item.title} item={item} first={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
