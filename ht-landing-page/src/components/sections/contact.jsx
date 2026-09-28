import { SectionHeading } from "@/components/shared/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact({ data }) {
  return (
    <section id="contato" className="bg-[#F4F0E6] px-7 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-[1380px]">
        <SectionHeading title={data.title} description={data.description} />

        <div className="mt-8 grid overflow-hidden rounded-[18px] bg-[#F7F7F7] md:grid-cols-2">
          <form className="flex flex-col gap-4 p-7 md:p-10">
            {data.fields.map((field) => (
              <label key={field.name} className="flex flex-col gap-2 text-xs text-[#0A0A0A]">
                <span>{field.label}</span>

                {field.type === "textarea" ? (
                  <Textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="min-h-32 resize-none rounded-none border-[#0A0A0A] bg-transparent text-xs shadow-none focus-visible:ring-0"
                  />
                ) : (
                  <Input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="h-9 rounded-none border-[#0A0A0A] bg-transparent text-xs shadow-none focus-visible:ring-0"
                  />
                )}
              </label>
            ))}

            <Button
              type="submit"
              className="mt-2 h-10 rounded-sm bg-[#0A0A0A] text-xs text-[#F4F0E6] hover:bg-[#202020]"
            >
              {data.submitLabel}
            </Button>
          </form>

          <div className="relative hidden min-h-[420px] overflow-hidden md:block">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
