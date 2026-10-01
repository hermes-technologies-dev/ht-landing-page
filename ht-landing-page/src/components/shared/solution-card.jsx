const variants = {
  light: "bg-white text-black border-accent",
  navy: "bg-primary text-white border-accent",
  dark: "bg-secondary text-white border-accent",
};

const variantsTitle = {
  light: "bg-primary text-white ",
  navy: "bg-white text-black text-black ",
  dark: "bg-primary text-white",
};

export function SolutionCard({ item }) {
  return (
    <article
      className={`group relative min-h-[320px]  overflow-hidden rounded-2xl border-2 p-4 ${variants[item.variant] || variants.light}`}
    >
      <div className="relative z-10 flex h-full flex-col justify-between">
        <h3 className=" font-medium leading-tight md:text-base">
          <span
            className={`box-decoration-clone text-2xl text-wrap  rounded  px-1 py-0.5 ${variantsTitle[item.variant] || variantsTitle.light}`}
          >
            {item.title}
          </span>
        </h3>
      </div>
      <img
        src={item.image}
        alt=""
        className="absolute bottom-0 right-0  object-contain object-right-bottom transition-transform duration-500 group-hover:scale-105"
      />
    </article>
  );
}
