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
import { SlideUp } from "@/components/animations/SlideUp";

export default function Home() {
  return (
    <>
      <Header data={data.header} />

      <main>
        <Hero data={data.hero} />
        <SlideUp>
          <BuildMarquee data={data.build} />
        </SlideUp>
        <SlideUp>
          <Solutions data={data.solutions} />
        </SlideUp>
        <SlideUp>
          <ContactCta data={data.contactCta} />
        </SlideUp>
        <SlideUp>
          <Projects data={data.projects} />
        </SlideUp>
        <SlideUp>
          <Process data={data.process} />
        </SlideUp>
        <SlideUp>
          <About data={data.about} />
        </SlideUp>
        <SlideUp>
          <Contact data={data.contact} />
        </SlideUp>
      </main>

      <Footer data={data.footer} />

      <BackToTop />
    </>
  );
}
