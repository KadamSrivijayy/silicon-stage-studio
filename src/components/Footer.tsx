import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { navLinks, profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-semibold">{profile.name}</h3>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{profile.role}</p>
        </div>

        <nav aria-label="Footer navigation">
          <h4 className="font-mono text-xs tracking-widest text-primary uppercase">Navigate</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="font-mono text-xs tracking-widest text-primary uppercase">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" /> {profile.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="mx-auto w-full max-w-6xl px-5 py-6 text-center text-xs text-muted-foreground">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
