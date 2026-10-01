"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

function formatPhone(value) {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  if (numbers.length <= 10) {
    return numbers
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return numbers
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

const dialogVariants = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
};

export function Contact({ data, item }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  const [dialog, setDialog] = useState({
    open: false,
    type: "success",
    title: "",
    description: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      setDialog({
        open: true,
        type: "success",
        title: "Mensagem enviada!",
        description: "Recebemos sua mensagem e entraremos em contato em breve.",
      });

      form.reset();
      setPhone("");
    } catch (error) {
      setDialog({
        open: true,
        type: "error",
        title: "Não foi possível enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section id="contato" className="px-7 py-10 md:px-12 md:py-16">
        <div className="mx-auto">
          <SectionHeading title={data.title} description={data.description} />

          {/* Container principal com position relative para conter a imagem de fundo */}
          <div className="relative mt-8 overflow-hidden rounded-[18px] bg-muted shadow-lg">
            {/* Imagem de Fundo cobrindo todo o bloco */}
            {data?.image?.src && (
              <div className="absolute inset-0 z-0">
                <Image
                  objectFit="contain"
                  fill
                  src={data.image.src}
                  alt={data.image.alt || "Fundo de contato"}
                  className="object-cover object-right opacity-45" // opacity-45 deixa a imagem sutil no fundo
                />
                {/* Overlay opcional para garantir contraste (caso precise clarear/escurecer o fundo) */}
                {/* <div className="absolute inset-0 bg-muted/70" /> */}
              </div>
            )}

            {/* Grid de 2 colunas: o formulário fica na primeira coluna (esquerda) e a segunda fica vazia (mostrando o fundo) */}
            <div className="relative z-10 grid md:grid-cols-2">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-7 md:p-10"
              >
                {/* NOME */}
                <label className="flex flex-col gap-2 text-xs text-black">
                  <span>Nome</span>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    required
                    className="h-9 rounded border-black bg-white text-xs shadow-none focus-visible:ring-0"
                  />
                </label>

                {/* EMAIL */}
                <label className="flex flex-col gap-2 text-xs text-black">
                  <span>E-mail</span>
                  <Input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                    className="h-9 rounded border-black bg-white text-xs shadow-none focus-visible:ring-0"
                  />
                </label>

                {/* TELEFONE */}
                <label className="flex flex-col gap-2 text-xs text-black">
                  <span>Telefone</span>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="(11) 98765-4321"
                    required
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    maxLength={15}
                    className="h-9 rounded border-black bg-white text-xs shadow-none focus-visible:ring-0"
                  />
                </label>

                {/* MENSAGEM */}
                <label className="flex flex-col gap-2 text-xs text-black">
                  <span>Mensagem</span>
                  <Textarea
                    name="message"
                    placeholder="Como podemos ajudar?"
                    required
                    className="min-h-32 resize-none rounded border-black bg-white text-xs shadow-none focus-visible:ring-0"
                  />
                </label>

                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-2 h-10 rounded-sm bg-black text-md text-white cursor-pointer hover:bg-[#202020]"
                >
                  {loading ? "Enviando..." : data.submitLabel}
                </Button>
              </form>

              {/* A segunda coluna fica vazia para exibir a parte direita da imagem de fundo como na sua referência */}
              <div className="hidden md:block" />
            </div>
          </div>
        </div>
      </section>
      <Dialog
        open={dialog.open}
        onOpenChange={(open) =>
          setDialog((prev) => ({
            ...prev,
            open,
          }))
        }
      >
        <DialogContent className={`sm:max-w-md ${dialogVariants[dialog.type]}`}>
          <DialogHeader>
            <DialogTitle>{dialog.title}</DialogTitle>

            <DialogDescription>{dialog.description}</DialogDescription>
          </DialogHeader>

          <Button
            onClick={() =>
              setDialog((prev) => ({
                ...prev,
                open: false,
              }))
            }
            className="w-full bg-white text-accent hover:bg-[#202020]"
          >
            Fechar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
