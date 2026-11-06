import { Github, Linkedin, Mail } from 'lucide-react';
import Container from '../ui/Container';
import { siteIdentity } from '../../data/siteContent';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-10 backdrop-blur-xl sm:py-12">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          {/* Brand & Tagline */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-sans text-base font-bold tracking-tight text-white sm:text-lg">
                {siteIdentity.name}
              </span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-blue-300/90">
                {siteIdentity.role}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              {siteIdentity.footerNote}
            </p>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col gap-3 sm:items-end">
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300 sm:gap-5">
              <a
                href={siteIdentity.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-2 py-2 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
              >
                <Linkedin className="h-4 w-4 text-blue-300" />
                <span>LinkedIn</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a
                href={siteIdentity.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-2 py-2 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
              >
                <Github className="h-4 w-4 text-slate-300" />
                <span>GitHub</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a
                href={`mailto:${siteIdentity.email}`}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-2 py-2 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
              >
                <Mail className="h-4 w-4 text-purple-300" />
                <span>Email</span>
              </a>
            </div>
            <p className="text-xs text-slate-400">
              © {currentYear} {siteIdentity.name}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
