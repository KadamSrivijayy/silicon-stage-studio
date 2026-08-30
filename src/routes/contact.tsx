import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { PageShell, Section } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Srivijay Kadam" },
      {
        name: "description",
        content:
          "Get in touch with Srivijay Kadam by email or phone, or send a message through the contact form.",
      },
      { property: "og:title", content: "Contact | Srivijay Kadam" },
      { property: "og:description", content: "Let's connect — email, phone or message." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const socialMissing = (u: string) => !/^https?:\/\//i.test(u);

  return (
    <PageShell>
      <Section>
        <SectionHeading
          eyebrow="Say hello"
          title="Let's Connect"
          subtitle="I'm always open to connecting with fellow developers, students, recruiters, and people who enjoy building things with technology."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <Reveal>
              <a
                href={`mailto:${profile.email}`}
                className="glass card-hover flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl accent-gradient text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Email</span>
                  <span className="block text-sm break-all text-muted-foreground">
                    {profile.email}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={90}>
              <a
                href={`tel:${profile.phone}`}
                className="glass card-hover flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl accent-gradient text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Phone</span>
                  <span className="block text-sm text-muted-foreground">{profile.phone}</span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={180}>
              <div className="glass rounded-2xl p-5">
                <p className="font-mono text-xs tracking-widest text-primary uppercase">Profiles</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    { icon: Github, label: "GitHub", url: profile.github },
                    { icon: Linkedin, label: "LinkedIn", url: profile.linkedin },
                  ].map(({ icon: Icon, label, url }) => (
                    <a
                      key={label}
                      href={socialMissing(url) ? undefined : url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-disabled={socialMissing(url)}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/60 hover:text-primary aria-disabled:pointer-events-none aria-disabled:opacity-60"
                    >
                      <Icon className="h-4 w-4" /> {label}
                    </a>
                  ))}
                </div>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  Replace YOUR_GITHUB_URL / YOUR_LINKEDIN_URL in src/data/profile.ts
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
