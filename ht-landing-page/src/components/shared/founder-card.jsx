import Link from "next/link";

export function FounderCard({ founder }) {
  return (
    <article className="rounded-[16px] border border-[#D4AF37] bg-[#F7F7F7] p-5">
      <div className="flex items-center gap-3">
        <img
          src={founder.image}
          alt={founder.displayName}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div>
          <h3 className="text-sm font-medium text-[#0A0A0A]">{founder.displayName}</h3>
          <p className="text-[10px] text-[#D4AF37]">{founder.role}</p>
        </div>

        {founder.linkedin && (
          <Link
            href={founder.linkedin}
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-xs text-[#0A0A0A]"
          >
            in
          </Link>
        )}
      </div>

      <div className="my-4 h-px bg-[#202020]/50" />

      {founder.bio ? (
        <p className="text-xs leading-relaxed text-[#202020]">{founder.bio}</p>
      ) : (
        <p className="text-xs italic leading-relaxed text-[#202020]/60">
          Informações biográficas serão adicionadas aqui.
        </p>
      )}
    </article>
  );
}
