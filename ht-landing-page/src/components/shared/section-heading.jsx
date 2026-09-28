export function SectionHeading({ title, description, className = "" }) {
  return (
    <div className={`flex flex-col gap-3 md:flex-row md:items-start md:justify-between ${className}`}>
      <h2 className="inline-flex w-fit bg-[#0A0A0A] px-1.5 py-0.5 text-xl font-medium leading-none text-[#F4F0E6] md:text-2xl">
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
