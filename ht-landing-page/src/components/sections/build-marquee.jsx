export function BuildMarquee({ data }) {
  const groups = [0, 1, 2, 3];

  return (
    <section className="overflow-hidden py-6">
      <h2 className="mb-4 text-center text-md font-bold text-black">
        {data.title}
      </h2>

      <div className="ht-marquee-wrapper">
        <div className="ht-marquee">
          {groups.map((group) => (
            <div className="ht-marquee-group" key={group}>
              {data.items.map((item, index) => (
                <span
                  key={`${group}-${index}`}
                  className="text-md font-medium tracking-tight text-black md:text-md"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}