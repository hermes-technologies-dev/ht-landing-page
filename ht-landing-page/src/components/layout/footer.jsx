import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { Mail } from "lucide-react";

const socialIcons = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
};

export function Footer({ data }) {
  const emailHref = data.contact.email ? `mailto:${data.contact.email}` : null;

  const whatsappHref = data.contact.phone
    ? `https://wa.me/${data.contact.phone}`
    : null;

  return (
    <footer className="rounded-t-[18px] bg-primary px-7 py-10 text-primary-foreground md:px-12 md:py-12">
      <div className="mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* CONTATO */}
          <div>
            <span className="rounded bg-accent px-1 text-md text-black">
              {data.contact.label || "Contato"}
            </span>

            <div className="mt-4 space-y-2 text-sm leading-relaxed">
              {/* EMAIL */}
              {data.contact.email && (
                <Link
                  href={emailHref}
                  className="block transition-opacity hover:opacity-70"
                >
                  {data.contact.email}
                </Link>
              )}

              {/* WHATSAPP */}
              {data.contact.phone && (
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-opacity hover:opacity-70"
                >
                  <FaWhatsapp className="size-4" />
                  <span>WhatsApp</span>
                </Link>
              )}

              {/* ENDEREÇO */}
              {data.contact.address && <p>{data.contact.address}</p>}
            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-md">
            {data.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-3">
            {data.social
              .filter((item) => item.href)
              .map((item) => {
                const Icon = socialIcons[item.name];

                if (!Icon) return null;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className="flex size-9 items-center justify-center rounded-full border transition-all hover:border-accent hover:bg-accent hover:text-black"
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}

            {/* WHATSAPP */}
            {whatsappHref && (
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex size-9 items-center justify-center rounded-full border  transition-all hover:border-accent hover:bg-accent hover:text-black"
              >
                <FaWhatsapp className="size-4" />
              </Link>
            )}

            {/* EMAIL */}
            {emailHref && (
              <Link
                href={emailHref}
                aria-label="E-mail"
                title="E-mail"
                className="flex size-9 items-center justify-center rounded-full border transition-all hover:border-accent hover:bg-accent hover:text-black"
              >
                <Mail className="size-4" />
              </Link>
            )}
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t pt-5 text-sm text-center">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
}