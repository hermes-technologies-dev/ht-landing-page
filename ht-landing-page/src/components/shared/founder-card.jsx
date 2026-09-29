import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

export function FounderCard({ founder }) {
  return (
    <Link
      href={founder.linkedin || "#"}
      target={founder.linkedin ? "_blank" : undefined}
      rel={founder.linkedin ? "noreferrer" : undefined}
      className="block"
    >
      <article className="rounded-[16px] border border-accent bg-primary-foreground p-5 transition-opacity hover:opacity-90">
        <div className="flex items-center gap-3">
          <Image
            width={80}
            height={80}
            src={founder.image}
            alt={founder.displayName}
            className="rounded-full object-cover"
          />

          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-[#0A0A0A]">
                {founder.displayName}
              </h3>

              <p className="text-[10px] text-accent">{founder.role}</p>
            </div>

            {founder.linkedin && (
              <span className="flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-accent bg-black p-2 text-accent">
                <FaLinkedin size={20} />
              </span>
            )}
          </div>
        </div>

        <div className="my-4 h-px bg-[#202020]/50" />

        {founder.bio ? (
          <p className="text-xs leading-relaxed text-[#202020]">
            {founder.bio}
          </p>
        ) : (
          <p className="text-xs italic leading-relaxed text-[#202020]/60">
            Informações biográficas serão adicionadas aqui.
          </p>
        )}
      </article>
    </Link>
  );
}
