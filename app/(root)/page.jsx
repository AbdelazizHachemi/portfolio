import { ContactBlock } from "@/components/site/ContactBlock";
import { Hero } from "@/components/site/Hero";
import { Path } from "@/components/site/Path";
import { Practice } from "@/components/site/Practice";
import { Work } from "@/components/site/Work";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Work />
      <Practice />
      <Path />
      <ContactBlock />
    </main>
  );
}
