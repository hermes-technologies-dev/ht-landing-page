"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import TypingText from "../animations/TypingText";
import Image from "next/image";

export function Hero({ data }) {
  return (
    <section className="overflow-hidden px-7 py-12 md:px-12 md:py-16">
      <div className="mx-auto grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
        {/* CONTEÚDO */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="text-3xl font-semibold leading-[0.96] tracking-[-0.055em] text-black md:text-7xl lg:text-[82px]"
          >
            <TypingText text={data.title} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mt-7 text-sm leading-relaxed md:text-base"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="mt-7"
          >
            <Link href={data.cta.href}>
              <Button className="cursor-pointer rounded-md bg-accent p-6 text-md font-medium text-white hover:bg-accent">
                {data.cta.label}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="flex justify-center md:justify-end"
        >
          <Image
            width={500}
            height={500}
            src={data.image.src}
            alt={data.image.alt}
          />
        </motion.div>
      </div>
    </section>
  );
}
