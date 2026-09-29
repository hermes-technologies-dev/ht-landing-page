import data from "@/data/landing-page.json";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { Hero } from "@/components/sections/hero";
import { BuildMarquee } from "@/components/sections/build-marquee";
import { Solutions } from "@/components/sections/solutions";
import { ContactCta } from "@/components/sections/contact-cta";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { BackToTop } from "@/components/layout/back-to-top";

export default function Home() {
  return (
    <>
      <Header data={data.header} />

      <main>
        <Hero data={data.hero} />
        <BuildMarquee data={data.build} />
        <Solutions data={data.solutions} />
        <ContactCta data={data.contactCta} />
        <Projects data={data.projects} />
        <Process data={data.process} />
        <About data={data.about} />
        <Contact data={data.contact} />
      </main>

      <Footer data={data.footer} />

      <BackToTop />
    </>
  );
}
