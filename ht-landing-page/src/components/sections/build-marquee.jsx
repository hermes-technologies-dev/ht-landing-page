export function BuildMarquee({ data }) {
  const items = [...data.items, ...data.items];

  return (
    <section className="overflow-hidden bg-[#F4F0E6] py-6">
      <h2 className="mb-4 text-center text-sm font-medium text-[#0A0A0A]">
        {data.title}
      </h2>

      <div className="relative overflow-hidden">
        <div className="ht-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="text-xs font-medium tracking-tight text-[#0A0A0A] md:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
