import { BeyondUi } from "@/components/home/BeyondUi";
import { Contact } from "@/components/home/Contact";
import { Experience } from "@/components/home/Experience";
import { Hero } from "@/components/home/Hero";
import { Indicators } from "@/components/home/Indicators";
import { Skills } from "@/components/home/Skills";
import { TuskrFeature } from "@/components/home/TuskrFeature";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd()} />
      <Hero />
      <Indicators />
      <TuskrFeature />
      <Experience />
      <BeyondUi />
      <Skills />
      <Contact />
    </>
  );
}
