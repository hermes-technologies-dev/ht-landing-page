import Link from "next/link";

export function Footer({ data }) {
  return (
    <footer className="rounded-t-[18px] bg-primary px-7 py-10 text-[#F4F0E6] md:px-12 md:py-12">
      <div className="mx-auto ">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="bg-accent px-1 text-md text-black rounded">
              Contato
            </span>

            <div className="mt-4 space-y-1 text-[10px] leading-relaxed">
              {data.contact.email && <p>{data.contact.email}</p>}
              {data.contact.phone && <p>{data.contact.phone}</p>}
              {data.contact.address && <p>{data.contact.address}</p>}
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-md]">
            {data.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3 text-md">
            {data.social
              .filter((item) => item.href)
              .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-70"
                >
                  {item.name}
                </Link>
              ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[#F4F0E6]/30 pt-5 text-[10px]">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
}
