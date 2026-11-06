import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import Container from '../../components/ui/Container';
import { experienceHeader, experienceItems } from '../../data/siteContent';

const MotionDiv = motion.div;
const MotionArticle = motion.article;

function ExperienceSection() {
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
      id="experience"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle Ambient Background Accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-6%] top-[18%] h-72 w-72 rounded-full bg-blue-600/[0.07] blur-[120px]" />
        <div className="absolute right-[-6%] bottom-[15%] h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[130px]" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl">
          <MotionDiv {...revealProps(0)}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
              <span
                className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                aria-hidden="true"
              />
              <span>{experienceHeader.eyebrow}</span>
            </div>
          </MotionDiv>

          <MotionDiv {...revealProps(0.08)}>
            <h2 className="mt-5 font-sans text-[1.85rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:mt-6 sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem]">
              <span className="block">{experienceHeader.headline.line1}</span>
              <span className="mt-1 block">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {experienceHeader.headline.highlight}
                </span>
                <span className="text-white">.</span>
              </span>
            </h2>
          </MotionDiv>

          <MotionDiv {...revealProps(0.14)}>
            <p className="mt-5 max-w-2xl text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-6 sm:text-lg sm:leading-8">
              {experienceHeader.description}
            </p>
          </MotionDiv>
        </div>

        {/* Vertical Career Progression Timeline */}
        <div className="relative mt-12 sm:mt-16">
          {/* Continuous Vertical Timeline Rail */}
          <div
            className="pointer-events-none absolute bottom-4 left-3 top-3 w-px bg-gradient-to-b from-blue-400/70 via-indigo-400/35 to-transparent sm:left-4 lg:left-[238px] xl:left-[268px]"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-12 lg:space-y-14">
            {experienceItems.map((item, index) => {
              const isFeatured = item.isCurrent;

              return (
                <MotionArticle
                  key={item.id}
                  {...revealProps(0.1 + index * 0.1)}
                  className="relative pl-9 sm:pl-12 lg:grid lg:grid-cols-[238px_1fr] lg:gap-10 lg:pl-0 xl:grid-cols-[268px_1fr] xl:gap-12"
                >
                  {/* Timeline Node Marker */}
                  <div
                    className="absolute left-0 top-1.5 z-10 flex h-6 w-6 items-center justify-center sm:left-1 lg:left-[226px] lg:top-2 xl:left-[256px]"
                    aria-hidden="true"
                  >
                    {isFeatured ? (
                      <span className="relative flex h-4 w-4 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400/35 blur-[4px]" />
                        <span className="relative h-3.5 w-3.5 rounded-full border-2 border-blue-300 bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />
                      </span>
                    ) : (
                      <span className="h-3 w-3 rounded-full border-2 border-indigo-400/50 bg-slate-950 shadow-[0_0_0_4px_rgba(3,7,18,0.9)]" />
                    )}
                  </div>

                  {/* Left Column (Desktop): Role, Company & Period Meta */}
                  <div className="mb-4 lg:mb-0 lg:pr-8 lg:pt-0.5">
                    {isFeatured ? (
                      <div className="mb-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/15 px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-blue-200 shadow-[0_0_16px_rgba(59,130,246,0.2)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          Current
                        </span>
                      </div>
                    ) : null}

                    <h3
                      className={`font-sans font-extrabold tracking-tight text-white ${
                        isFeatured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl text-slate-100'
                      }`}
                    >
                      {item.role}
                    </h3>

                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-blue-300/90 sm:text-sm">
                      <span>{item.company}</span>
                      <span className="text-slate-500">·</span>
                      <span className="inline-flex items-center gap-1 text-slate-300">
                        <Calendar className="h-3.5 w-3.5 text-blue-400" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Experience Panel */}
                  <div
                    className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-colors duration-300 sm:rounded-3xl ${
                      isFeatured
                        ? 'border-blue-400/25 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-indigo-950/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_28px_70px_rgba(2,6,23,0.6)] sm:p-7 lg:p-8'
                        : 'border-white/10 bg-slate-900/65 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_50px_rgba(2,6,23,0.45)] sm:p-6 lg:p-7'
                    }`}
                  >
                    {isFeatured ? (
                      <div
                        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-3xl"
                        aria-hidden="true"
                      />
                    ) : null}

                    <div className="relative z-10">
                      {/* Panel Summary Header */}
                      <div className="flex items-start gap-3.5 border-b border-white/[0.08] pb-4 sm:pb-5">
                        <div
                          className={`flex shrink-0 items-center justify-center rounded-xl border ${
                            isFeatured
                              ? 'h-11 w-11 border-blue-400/25 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
                              : 'h-10 w-10 border-white/10 bg-white/[0.04] text-slate-300'
                          }`}
                        >
                          {isFeatured ? (
                            <Briefcase className="h-5 w-5" />
                          ) : (
                            <Building2 className="h-4 w-4" />
                          )}
                        </div>
                        <p className="max-w-2xl text-sm leading-relaxed text-slate-200/95 sm:text-[15px]">
                          {item.description}
                        </p>
                      </div>

                      {/* Key Contributions */}
                      <div className="mt-4 sm:mt-5">
                        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          Key Contributions
                        </p>
                        <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:gap-3">
                          {item.achievements.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 text-sm leading-relaxed text-slate-200/95 sm:text-[15px]"
                            >
                              <CheckCircle2
                                className={`mt-1 h-4 w-4 shrink-0 ${
                                  isFeatured ? 'text-blue-400' : 'text-indigo-400/80'
                                }`}
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Core Technologies */}
                      <div className="mt-5 border-t border-white/[0.08] pt-4 sm:mt-6 sm:pt-5">
                        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          Core Technologies
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`rounded-xl border px-3 py-1.5 font-sans text-xs font-semibold ${
                                isFeatured
                                  ? 'border-blue-400/20 bg-blue-500/[0.08] text-blue-100'
                                  : 'border-white/10 bg-white/[0.04] text-slate-300'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionArticle>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExperienceSection;
