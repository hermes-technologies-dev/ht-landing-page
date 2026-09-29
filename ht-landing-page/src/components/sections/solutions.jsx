import { SectionHeading } from "@/components/shared/section-heading";
import { SolutionCard } from "@/components/shared/solution-card";
import styles from "../../app/style.module.css";

export function Solutions({ data }) {
  return (
    <section id="solucoes" className=" px-7 py-10 md:px-12 md:py-16">
      <div className="mx-auto ">
        <SectionHeading title={data.title} description={data.description} />

        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {data.items.map((item) => (
            <SolutionCard
              className={styles.solutions_card}
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
