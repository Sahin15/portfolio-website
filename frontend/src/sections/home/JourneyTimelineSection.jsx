import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Compass,
  GitBranch,
  HardHat,
  Layers,
  Sparkles,
} from 'lucide-react';
import Container from '../../components/ui/Container';
import { journeyHeader, journeyTimeline } from '../../data/siteContent';

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const iconMap = {
  Compass,
  HardHat,
  GitBranch,
  Code2,
  Layers,
};

function JourneyTimelineSection() {
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
      id="journey"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-6%] top-[16%] h-72 w-72 rounded-full bg-blue-600/[0.06] blur-[120px]" />
        <div className="absolute right-[-6%] top-[48%] h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[130px]" />
        <div className="absolute left-[15%] bottom-[8%] h-72 w-72 rounded-full bg-indigo-600/[0.07] blur-[120px]" />
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
              <span>{journeyHeader.eyebrow}</span>
            </div>
          </MotionDiv>

          <MotionDiv {...revealProps(0.08)}>
            <h2 className="mt-5 font-sans text-[1.85rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:mt-6 sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem]">
              <span className="block">{journeyHeader.headline.line1}</span>
              <span className="mt-1 block">{journeyHeader.headline.line2}</span>
              <span className="mt-1 block">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {journeyHeader.headline.highlight}
                </span>
                <span className="text-white">.</span>
              </span>
            </h2>
          </MotionDiv>

          <MotionDiv {...revealProps(0.14)}>
            <p className="mt-5 max-w-2xl text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-6 sm:text-lg sm:leading-8">
              {journeyHeader.description}
            </p>
          </MotionDiv>

          {/* Subtle Career Progression Arc Bar */}
          <MotionDiv {...revealProps(0.18)} className="mt-7 sm:mt-8">
            <div className="flex w-full flex-col gap-1.5 rounded-2xl border border-white/10 bg-slate-900/55 p-3 shadow-[0_14px_34px_rgba(2,6,23,0.4)] backdrop-blur-xl sm:inline-flex sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 sm:px-4 sm:py-3">
              {journeyHeader.progressionArc.map((step, idx) => {
                const isLast = idx === journeyHeader.progressionArc.length - 1;
                const isTransitionStep = idx === 2;
                return (
                  <div
                    key={step}
                    className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-2"
                  >
                    <span
                      className={`w-full rounded-lg px-2.5 py-1.5 font-sans text-[11px] font-semibold sm:w-auto sm:py-1 sm:text-xs ${
                        isLast
                          ? 'border border-blue-400/30 bg-blue-500/15 text-blue-200'
                          : isTransitionStep
                            ? 'border border-purple-400/25 bg-purple-500/10 text-purple-200'
                            : 'border border-white/[0.06] bg-white/[0.02] text-slate-300 sm:border-0 sm:bg-transparent sm:text-slate-400'
                      }`}
                    >
                      {step}
                    </span>
                    {!isLast ? (
                      <>
                        <ArrowRight
                          className="hidden h-3 w-3 shrink-0 text-slate-600 sm:block"
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
          </MotionDiv>
        </div>

        {/* 5-Stage Vertical Career Timeline */}
        <div className="relative mt-12 sm:mt-16">
          {/* Continuous Vertical Timeline Line (Progressive gradient from foundation slate to active blue/purple) */}
          <div
            className="pointer-events-none absolute bottom-6 left-3 top-3 w-px bg-gradient-to-b from-slate-600/50 via-purple-400/60 to-blue-400/80 sm:left-4 lg:left-[210px] xl:left-[240px]"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10 lg:space-y-11">
            {journeyTimeline.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Layers;
              const isFoundation = item.variant === 'foundation';
              const isTransition = item.variant === 'transition';
              const isCurrent = item.variant === 'current';

              return (
                <MotionArticle
                  key={item.stage}
                  {...revealProps(0.08 + index * 0.07)}
                  className="relative pl-9 sm:pl-12 lg:grid lg:grid-cols-[210px_1fr] lg:items-start lg:gap-10 lg:pl-0 xl:grid-cols-[240px_1fr] xl:gap-12"
                >
                  {/* Timeline Node Marker & Desktop Horizontal Connector Bridge */}
                  <div
                    className="absolute left-0 top-2 z-10 flex h-6 w-6 items-center justify-center sm:left-1 lg:left-[198px] lg:top-6 xl:left-[228px]"
                    aria-hidden="true"
                  >
                    {isCurrent ? (
                      <span className="relative flex h-4 w-4 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400/40 blur-[5px]" />
                        <span className="relative h-3.5 w-3.5 rounded-full border-2 border-blue-200 bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_16px_rgba(96,165,250,0.95)]" />
                      </span>
                    ) : isTransition ? (
                      <span className="relative flex h-4 w-4 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400/35 blur-[4px]" />
                        <span className="relative h-3.5 w-3.5 rounded-full border-2 border-purple-300 bg-gradient-to-r from-purple-400 to-blue-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                      </span>
                    ) : isFoundation ? (
                      <span className="h-2.5 w-2.5 rounded-full border border-slate-400/60 bg-slate-900 shadow-[0_0_0_4px_rgba(3,7,18,0.95)]" />
                    ) : (
                      <span className="h-3 w-3 rounded-full border-2 border-indigo-400/60 bg-slate-950 shadow-[0_0_0_4px_rgba(3,7,18,0.95)]" />
                    )}

                    {/* Horizontal Connector Line on Desktop (●──── or ●════ for Transition & Current) */}
                    <span
                      className={`hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 w-7 xl:w-9 ${
                        isCurrent
                          ? 'h-[3px] rounded-full bg-gradient-to-r from-blue-400 to-purple-400/80 shadow-[0_0_10px_rgba(96,165,250,0.5)]'
                          : isTransition
                            ? 'h-[3px] rounded-full bg-gradient-to-r from-purple-400/90 to-blue-400/70'
                            : 'h-px bg-white/15'
                      }`}
                    />
                  </div>

                  {/* Left Column (Desktop): Year Marker & Stage Phase */}
                  <div className="mb-3 lg:mb-0 lg:pr-8 lg:pt-4 lg:text-right">
                    <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                      <span
                        className={`font-sans font-extrabold tracking-tight ${
                          isCurrent
                            ? 'text-lg sm:text-xl text-white'
                            : isTransition
                              ? 'text-base sm:text-lg text-purple-200'
                              : isFoundation
                                ? 'text-sm sm:text-base text-slate-400'
                                : 'text-base sm:text-lg text-slate-200'
                        }`}
                      >
                        {item.year}
                      </span>

                      {isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/35 bg-blue-500/15 px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-blue-200 shadow-[0_0_14px_rgba(59,130,246,0.25)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          Now
                        </span>
                      ) : null}

                      {isTransition ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-purple-400/30 bg-purple-500/15 px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-purple-200">
                          Pivot
                        </span>
                      ) : null}
                    </div>

                    <p
                      className={`mt-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] ${
                        isCurrent
                          ? 'text-blue-300/90'
                          : isTransition
                            ? 'text-purple-300/85'
                            : 'text-slate-400'
                      }`}
                    >
                      Stage {item.stage} · {item.phase}
                    </p>
                  </div>

                  {/* Right Column: Milestone Content Card */}
                  <div
                    className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-colors duration-300 sm:rounded-3xl ${
                      isCurrent
                        ? 'border-blue-400/30 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-indigo-950/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_28px_70px_rgba(2,6,23,0.65)] sm:p-7 lg:p-8'
                        : isTransition
                          ? 'border-purple-400/25 bg-gradient-to-r from-purple-950/30 via-slate-900/80 to-blue-950/25 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_22px_55px_rgba(2,6,23,0.5)] sm:p-6 lg:p-7'
                          : isFoundation
                            ? 'border-white/[0.08] bg-slate-900/50 p-4 shadow-[0_14px_34px_rgba(2,6,23,0.35)] sm:p-5 lg:px-6 lg:py-5'
                            : 'border-white/12 bg-slate-900/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_20px_50px_rgba(2,6,23,0.45)] sm:p-6 lg:p-7'
                    }`}
                  >
                    {isCurrent ? (
                      <div
                        className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-3xl"
                        aria-hidden="true"
                      />
                    ) : null}

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="flex min-w-0 flex-1 items-center gap-3 sm:items-start sm:gap-3.5">
                          <div
                            className={`flex shrink-0 items-center justify-center rounded-xl border ${
                              isCurrent
                                ? 'h-10 w-10 sm:h-11 sm:w-11 border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
                                : isTransition
                                  ? 'h-10 w-10 border-purple-400/25 bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300'
                                  : isFoundation
                                    ? 'h-9 w-9 border-white/10 bg-white/[0.03] text-slate-400'
                                    : 'h-10 w-10 border-blue-400/20 bg-blue-500/10 text-blue-300'
                            }`}
                          >
                            <IconComponent className={isFoundation ? 'h-4 w-4' : 'h-5 w-5'} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <h3
                                className={`font-sans font-extrabold tracking-tight text-white ${
                                  isCurrent
                                    ? 'text-lg sm:text-2xl'
                                    : isFoundation
                                      ? 'text-base sm:text-lg text-slate-100'
                                      : 'text-base sm:text-xl'
                                }`}
                              >
                                {item.title}
                              </h3>
                              <span className="hidden text-slate-600 sm:inline">·</span>
                              <span
                                className={`block w-full font-sans text-xs font-semibold sm:inline sm:w-auto sm:text-sm ${
                                  isCurrent
                                    ? 'text-blue-300'
                                    : isTransition
                                      ? 'text-purple-300'
                                      : 'text-slate-400'
                                }`}
                              >
                                {item.organization}
                              </span>
                            </div>
                          </div>
                        </div>

                        {isTransition ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-1 font-sans text-[11px] font-semibold text-purple-200">
                            <Sparkles className="h-3 w-3 text-purple-300" />
                            Transition Milestone
                          </span>
                        ) : null}

                        {isCurrent ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 font-sans text-[11px] font-semibold text-blue-200">
                            <Sparkles className="h-3 w-3 text-blue-300" />
                            Current Role
                          </span>
                        ) : null}
                      </div>

                      <p
                        className={`mt-3 max-w-2xl leading-relaxed sm:mt-2.5 sm:pl-[54px] ${
                          isFoundation
                            ? 'text-xs sm:text-sm text-slate-400'
                            : 'text-sm sm:text-[15px] text-slate-300/90'
                        }`}
                      >
                        {item.description}
                      </p>

                      {item.focus && item.focus.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2 border-t border-white/[0.07] pt-3.5 sm:mt-5 sm:pt-4">
                          {item.focus.map((tag) => (
                            <span
                              key={tag}
                              className={`rounded-xl border px-2.5 py-1 font-sans text-[11px] font-semibold sm:px-3 sm:py-1.5 sm:text-xs ${
                                isCurrent
                                  ? 'border-blue-400/20 bg-blue-500/[0.09] text-blue-100'
                                  : isTransition
                                    ? 'border-purple-400/20 bg-purple-500/[0.08] text-purple-200'
                                    : isFoundation
                                      ? 'border-white/[0.08] bg-white/[0.02] text-slate-400'
                                      : 'border-white/10 bg-white/[0.04] text-slate-300'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
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

export default JourneyTimelineSection;
