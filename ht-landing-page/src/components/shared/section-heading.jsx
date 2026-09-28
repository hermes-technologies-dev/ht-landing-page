export function SectionHeading({ title, description, className = "" }) {
  return (
    <div
      className={`flex flex-col gap-3 items-center md:flex-row  md:justify-start ${className}`}
    >
      <h2 className="inline-flex w-fit bg-primary rounded px-1.5 py-1.5 text-xl font-medium leading-none text-white md:text-2xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-md text-xs leading-relaxed text-[#202020] md:text-sm">
          {description}
        </p>
      )}
    </div>
  );
}
