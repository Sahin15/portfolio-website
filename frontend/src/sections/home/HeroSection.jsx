import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Github,
  Layers,
  Linkedin,
  MapPin,
  Monitor,
  Users,
} from 'lucide-react';
import Container from '../../components/ui/Container';
import { heroContent, siteIdentity } from '../../data/siteContent';

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionA = motion.a;

const iconMap = {
  Users,
  BarChart3,
  Layers,
  MapPin,
  Briefcase,
  Monitor,
};

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUpProps = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        };

  const handleScrollToProjects = (event) => {
    const target = document.querySelector('#projects');
    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-16"
    >
      {/* Subtle Hero Ambient Accent Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[5%] h-72 w-72 rounded-full bg-blue-600/10 blur-[110px] sm:h-96 sm:w-96" />
        <div className="absolute right-[-5%] top-[12%] h-80 w-80 rounded-full bg-purple-600/12 blur-[120px] sm:h-[26rem] sm:w-[26rem]" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-12">
          {/* Left Column: Hero Copy & Actions */}
          <div className="min-w-0">
            <MotionDiv {...fadeUpProps(0)}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md sm:text-sm">
                <span
                  className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_8px_rgba(96,165,250,0.85)]"
                  aria-hidden="true"
                />
                <span>{heroContent.badge}</span>
              </div>
            </MotionDiv>

            <MotionP
              {...fadeUpProps(0.04)}
              className="mt-5 font-sans text-lg font-semibold tracking-tight text-slate-300 sm:mt-6 sm:text-xl"
            >
              {heroContent.greeting} <span className="text-white">{siteIdentity.name}</span>
            </MotionP>

            <MotionDiv {...fadeUpProps(0.08)}>
              <h1 className="mt-2 font-sans text-[1.9rem] min-[375px]:text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.035em] text-white sm:mt-3 sm:text-5xl lg:text-[2.9rem] xl:text-[3.75rem]">
                <span className="block">{heroContent.headline.line1}</span>
                <span className="mt-1 block">
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    business software
                  </span>
                  <span className="text-white">.</span>
                </span>
              </h1>
            </MotionDiv>

            <MotionP
              {...fadeUpProps(0.15)}
              className="mt-5 max-w-xl text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-6 sm:text-lg sm:leading-8"
            >
              {heroContent.description}
            </MotionP>

            <MotionDiv
              {...fadeUpProps(0.22)}
              className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5"
            >
              <MotionA
                href={heroContent.ctas.primary.href}
                onClick={handleScrollToProjects}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_-6px_rgba(79,70,229,0.5)] transition-all hover:from-blue-400 hover:via-indigo-500 hover:to-purple-500 hover:shadow-[0_18px_42px_-6px_rgba(99,102,241,0.65)] sm:w-auto"
              >
                <span>{heroContent.ctas.primary.label}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MotionA>

              <MotionA
                href={heroContent.ctas.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full border border-white/14 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.1] hover:text-white sm:w-auto"
              >
                <Github className="h-4 w-4 text-slate-200" />
                <span>{heroContent.ctas.secondary.label}</span>
                <span className="sr-only">(opens in a new tab)</span>
              </MotionA>

              <MotionA
                href={heroContent.ctas.tertiary.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full border border-white/14 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all hover:border-blue-400/35 hover:bg-white/[0.1] hover:text-white sm:w-auto"
              >
                <Linkedin className="h-4 w-4 text-blue-300" />
                <span>{heroContent.ctas.tertiary.label}</span>
                <span className="sr-only">(opens in a new tab)</span>
              </MotionA>
            </MotionDiv>
          </div>

          {/* Right Column: Profile Image | Supporting Cards Composition */}
          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none">
            {/* Subtle Shared Background Shape & Ambient Glow Connecting Portrait and Cards */}
            <div
              className="pointer-events-none absolute -inset-y-3 inset-x-2 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/20 blur-2xl lg:inset-x-0"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none hidden lg:block absolute right-0 top-1/2 -z-10 h-[86%] w-[78%] -translate-y-1/2 rounded-[2.25rem] border border-white/[0.06] bg-gradient-to-r from-blue-500/[0.04] via-indigo-500/[0.06] to-purple-500/[0.08] backdrop-blur-sm"
              aria-hidden="true"
            />

            <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-end lg:gap-3.5 xl:gap-5">
              {/* Primary Visual: Profile Image Frame (100% Unobstructed) */}
              <MotionDiv
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[300px] min-[375px]:max-w-[320px] shrink-0 sm:max-w-[340px] lg:w-[235px] lg:max-w-none xl:w-[300px]"
              >
                {/* Organic / Rounded Gradient Backdrop Shape Behind Portrait */}
                <div
                  className="pointer-events-none absolute -inset-2.5 -z-10 rounded-[2.25rem] bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-purple-500/25 opacity-90 blur-md"
                  aria-hidden="true"
                />

                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-blue-400/35 via-purple-500/25 to-white/10 p-[1.5px] shadow-[0_28px_70px_rgba(2,6,23,0.75)] sm:rounded-[2.25rem]">
                  <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[calc(2rem-1.5px)] bg-slate-950 sm:rounded-[calc(2.25rem-1.5px)]">
                    {/* Ambient interior lighting behind portrait */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_25%_80%,rgba(147,51,234,0.22),transparent_55%)]" />

                    <img
                      src="/profile.jpg"
                      srcSet="/profile-420.jpg 420w, /profile.jpg 548w"
                      sizes="(min-width: 1280px) 300px, (min-width: 1024px) 235px, 340px"
                      width="548"
                      height="630"
                      alt={`${siteIdentity.name}, ${siteIdentity.role}`}
                      className="h-full w-full object-cover object-[50%_22%]"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />

                    {/* Subtle dark bottom vignette and inner border for cohesion */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 rounded-[calc(2rem-1.5px)] ring-1 ring-inset ring-white/10 sm:rounded-[calc(2.25rem-1.5px)]" />
                  </div>
                </div>
              </MotionDiv>

              {/* Secondary Supporting Elements: Vertical Stack of 3 Cards (Right of Portrait on Desktop, Stacked Below on Mobile/Tablet) */}
              <div className="flex w-full max-w-[340px] flex-col gap-3 sm:max-w-[360px] lg:w-[215px] lg:max-w-none lg:shrink-0 xl:w-[248px] xl:gap-3.5">
                {heroContent.floatingCards.map((card, index) => {
                  const IconComponent = iconMap[card.icon] || Layers;
                  return (
                    <MotionDiv
                      key={card.id}
                      initial={shouldReduceMotion ? false : { opacity: 0, x: 14, y: 8 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.26 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex w-full items-center gap-3 rounded-2xl border border-white/12 bg-slate-900/90 px-3.5 py-3 shadow-[0_16px_40px_rgba(2,6,23,0.65)] backdrop-blur-xl transition-colors hover:border-blue-400/30"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-sans text-xs font-bold leading-snug text-white sm:text-[13px]">
                          {card.title}
                        </p>
                        <p className="mt-0.5 text-[11px] leading-snug text-slate-300/85">
                          {card.subtitle}
                        </p>
                      </div>
                    </MotionDiv>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Professional Snapshot Bar */}
        <MotionDiv
          {...fadeUpProps(0.38)}
          className="mt-12 sm:mt-14 lg:mt-16"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/65 shadow-[0_24px_60px_rgba(2,6,23,0.5)] backdrop-blur-xl sm:rounded-3xl">
            <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-white/[0.08]">
              {heroContent.snapshotItems.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Layers;
                // Add subtle tablet borders for the 2x2 layout
                const tabletBorderClasses =
                  index === 0
                    ? 'sm:border-b sm:border-r sm:border-white/[0.08] lg:border-b-0 lg:border-r-0'
                    : index === 1
                      ? 'sm:border-b sm:border-white/[0.08] lg:border-b-0'
                      : index === 2
                        ? 'sm:border-r sm:border-white/[0.08] lg:border-r-0'
                        : '';

                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3.5 px-5 py-4 sm:px-6 sm:py-5 ${tabletBorderClasses}`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/12 to-purple-500/12 text-blue-300">
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-sans text-sm font-semibold leading-snug text-white">
                        {item.title}
                      </p>
                      {item.subtitle ? (
                        <p className="mt-0.5 text-xs leading-snug text-slate-400">
                          {item.subtitle}
                        </p>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionDiv>
      </Container>
    </section>
  );
}

export default HeroSection;
