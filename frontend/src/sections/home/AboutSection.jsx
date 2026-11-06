import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, Building2, Code2, Rocket } from 'lucide-react';
import Container from '../../components/ui/Container';
import { aboutContent } from '../../data/siteContent';

const MotionDiv = motion.div;

const iconMap = {
  Building2,
  Code2,
  Rocket,
};

function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const revealProps = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle Ambient Background Accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-[20%] h-72 w-72 rounded-full bg-blue-600/[0.07] blur-[120px]" />
        <div className="absolute right-[-6%] bottom-[10%] h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[130px]" />
      </div>

      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          {/* Left Column: Section Label, Headline, Description & Engineering Workflow */}
          <div className="min-w-0 lg:sticky lg:top-28">
            <MotionDiv {...revealProps(0)}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  aria-hidden="true"
                />
                <span>{aboutContent.eyebrow}</span>
              </div>
            </MotionDiv>

            <MotionDiv {...revealProps(0.08)}>
              <h2 className="mt-5 font-sans text-[1.85rem] font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:mt-6 sm:text-4xl lg:text-[2.65rem] xl:text-[3rem]">
                <span className="block">{aboutContent.headline.line1}</span>
                <span className="mt-1 block">
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {aboutContent.headline.highlight}
                  </span>
                  <span className="text-white">.</span>
                </span>
              </h2>
            </MotionDiv>

            <MotionDiv
              {...revealProps(0.14)}
              className="mt-5 space-y-4 text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-6 sm:space-y-5 sm:text-base sm:leading-8"
            >
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-xl">
                  {paragraph}
                </p>
              ))}
            </MotionDiv>

            {/* Minimal Engineering Lifecycle Visual */}
            <MotionDiv
              {...revealProps(0.2)}
              className="mt-7 sm:mt-8"
            >
              <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 shadow-[0_16px_40px_rgba(2,6,23,0.4)] backdrop-blur-xl sm:p-5">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Engineering Workflow
                </p>
                <div className="mt-3.5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
                  {aboutContent.workflowSteps.map((step, index) => {
                    const isLast = index === aboutContent.workflowSteps.length - 1;
                    return (
                      <div
                        key={step}
                        className="flex w-full flex-col items-start gap-2 sm:w-auto sm:flex-row sm:items-center"
                      >
                        <div className="flex w-full items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 sm:w-auto">
                          <span className="font-sans text-[11px] font-bold text-blue-300/90">
                            0{index + 1}
                          </span>
                          <span className="font-sans text-xs font-semibold text-slate-200">
                            {step}
                          </span>
                        </div>
                        {!isLast ? (
                          <>
                            <ArrowRight
                              className="hidden h-3.5 w-3.5 shrink-0 text-slate-500 sm:block"
                              aria-hidden="true"
                            />
                            <ArrowDown
                              className="mx-auto h-3.5 w-3.5 shrink-0 text-slate-600 sm:hidden"
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

          {/* Right Column: Three Professional Expertise Cards */}
          <div className="grid gap-4 sm:gap-5">
            {aboutContent.pillars.map((pillar, index) => {
              const IconComponent = iconMap[pillar.icon] || Building2;
              return (
                <MotionDiv
                  key={pillar.title}
                  {...revealProps(0.1 + index * 0.08)}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/30 hover:bg-slate-900/85 sm:rounded-3xl sm:p-6 lg:p-7"
                >
                  {/* Subtle top-right radial glow on hover */}
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start gap-4 sm:gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors group-hover:border-blue-400/35 group-hover:text-blue-200 sm:h-12 sm:w-12">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-sans text-lg font-bold tracking-tight text-white sm:text-xl">
                          {pillar.title}
                        </h3>
                        <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-sans text-xs font-bold tracking-[0.16em] text-slate-400 transition-colors group-hover:border-blue-400/25 group-hover:text-blue-300">
                          {pillar.number}
                        </span>
                      </div>

                      <p className="mt-2.5 text-sm leading-relaxed text-slate-300/90 sm:text-[15px] sm:leading-7">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
