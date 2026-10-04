import ContactForm from "@/components/ContactForm";
import { profile, shell } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "GitHub", value: "AbdelazizHachemi", href: profile.github },
  { label: "LinkedIn", value: "abdelaziz-hachemi", href: profile.linkedin },
];

export function ContactBlock() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className={`${shell} grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16`}>
        <div className="scroll-in">
          <SectionLabel index="05">Contact</SectionLabel>
          <h2 className="display mt-5 text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.94] tracking-[-0.03em]">
            Tell me what you are shipping.
          </h2>
          <p className="mt-5 max-w-[42ch] text-pretty text-muted-foreground">
            A role, a product, or a system that needs a careful engineer. I
            read every note and I reply by email.
          </p>
          <dl className="mt-8 border-t border-border">
            {channels.map((channel) => (
              <div key={channel.label} className="border-b border-border py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {channel.label}
                </dt>
                <dd className="mt-1">
                  <a
                    className="link-quiet inline-flex min-h-11 items-center break-words"
                    href={channel.href}
                    {...(channel.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {channel.value}
                  </a>
                </dd>
              </div>
            ))}
            <div className="border-b border-border py-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Based
              </dt>
              <dd className="mt-1 inline-flex min-h-11 items-center">
                {profile.location} · remote
              </dd>
            </div>
          </dl>
        </div>
        <div className="scroll-in">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
