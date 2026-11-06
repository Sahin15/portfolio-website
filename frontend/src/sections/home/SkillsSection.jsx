import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Database,
  Layers,
  Layout,
  Server,
  Sparkles,
  Terminal,
} from 'lucide-react';
import Container from '../../components/ui/Container';
import { skillGroups, skillsHeader } from '../../data/siteContent';

const MotionDiv = motion.div;

const iconMap = {
  Layout,
  Server,
  Database,
  Terminal,
  Layers,
};

function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  const revealProps = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle Ambient Background Accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-6%] top-[15%] h-72 w-72 rounded-full bg-blue-600/[0.07] blur-[120px]" />
        <div className="absolute left-[-6%] bottom-[12%] h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[130px]" />
      </div>

      <Container>
        {/* Top Header + Connected Stack Flow */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <MotionDiv {...revealProps(0)}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  aria-hidden="true"
                />
                <span>{skillsHeader.eyebrow}</span>
              </div>
            </MotionDiv>

            <MotionDiv {...revealProps(0.08)}>
              <h2 className="mt-5 font-sans text-[1.85rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:mt-6 sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem]">
                <span className="block">{skillsHeader.headline.line1}</span>
                <span className="mt-1 block">
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {skillsHeader.headline.highlight}
                  </span>
                  <span className="text-white">.</span>
                </span>
              </h2>
            </MotionDiv>

            <MotionDiv {...revealProps(0.14)}>
              <p className="mt-5 text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-6 sm:text-lg sm:leading-8">
                {skillsHeader.description}
              </p>
            </MotionDiv>
          </div>

          {/* Subtle Connected Technology Ecosystem Strip */}
          <MotionDiv
            {...revealProps(0.18)}
            className="w-full lg:w-auto lg:max-w-md xl:max-w-lg"
          >
            <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 shadow-[0_16px_40px_rgba(2,6,23,0.4)] backdrop-blur-xl">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Connected Architecture Stack
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-1.5">
                {skillsHeader.architectureLayers.map((layer, index) => {
                  const isLast = index === skillsHeader.architectureLayers.length - 1;
                  return (
                    <div
                      key={layer}
                      className="flex w-full flex-col items-start gap-1.5 sm:w-auto sm:flex-row sm:items-center"
                    >
                      <span className="inline-flex w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 font-sans text-xs font-semibold text-slate-200 sm:w-auto sm:px-2.5 sm:py-1.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/80" />
                        {layer}
                      </span>
                      {!isLast ? (
                        <>
                          <ArrowRight
                            className="hidden h-3.5 w-3.5 shrink-0 text-slate-500 sm:block"
                            aria-hidden="true"
                          />
                          <ArrowDown
                            className="mx-auto h-3 w-3 shrink-0 text-slate-600 sm:hidden"
                            aria-hidden="true"
                          />
                        </>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* 5-Category Engineering Toolkit Grid (2x2 + Featured Full-Width Domain Card) */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 lg:gap-6">
          {skillGroups.map((group, index) => {
            const IconComponent = iconMap[group.icon] || Layers;
            const isFeatured = group.featured;

            if (isFeatured) {
              return (
                <MotionDiv
                  key={group.title}
                  {...revealProps(0.1 + index * 0.06)}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className="group relative overflow-hidden rounded-2xl border border-blue-400/25 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-indigo-950/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_26px_65px_rgba(2,6,23,0.55)] backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/40 sm:rounded-3xl sm:p-7 md:col-span-2 lg:p-8"
                >
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-3xl"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.44fr_0.56fr] lg:items-center lg:gap-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:h-12 sm:w-12">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 font-sans text-xs font-bold tracking-[0.18em] text-blue-200">
                          {group.number}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 font-sans text-xs font-semibold text-blue-200">
                          <Sparkles className="h-3.5 w-3.5 text-blue-300" />
                          Core Specialization
                        </span>
                      </div>

                      <h3 className="mt-4 font-sans text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                        {group.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300/90 sm:text-[15px]">
                        {group.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-xl border border-blue-400/20 bg-blue-500/[0.09] px-3.5 py-2 font-sans text-xs font-semibold text-blue-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-blue-400/40 hover:bg-blue-500/20 hover:text-white sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </MotionDiv>
              );
            }

            return (
              <MotionDiv
                key={group.title}
                {...revealProps(0.08 + index * 0.06)}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/30 hover:bg-slate-900/85 sm:rounded-3xl sm:p-7"
              >
                {/* Subtle radial hover highlight */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors group-hover:border-blue-400/35 group-hover:text-blue-200 sm:h-12 sm:w-12">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-sans text-xs font-bold tracking-[0.18em] text-slate-400 transition-colors group-hover:border-blue-400/25 group-hover:text-blue-300">
                      {group.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/90 sm:text-[15px]">
                    {group.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 font-sans text-xs font-semibold text-slate-200 sm:px-3.5 sm:py-2 sm:text-[13px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;
