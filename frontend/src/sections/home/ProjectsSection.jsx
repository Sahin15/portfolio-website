import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Briefcase,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Compass,
  CreditCard,
  Database,
  FileSpreadsheet,
  FolderKanban,
  Globe,
  HardHat,
  Layers,
  LayoutDashboard,
  PackageCheck,
  Receipt,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';
import { projects, projectsHeader } from '../../data/siteContent';

const MotionDiv = motion.div;
const MotionArticle = motion.article;

function ErpDashboardVisual({ shouldReduceMotion }) {
  const sidebarItems = [
    { label: 'Overview', icon: LayoutDashboard, active: true },
    { label: 'Employees', icon: Users, active: false },
    { label: 'Attendance', icon: CalendarCheck, active: false },
    { label: 'Payroll', icon: CreditCard, active: false },
    { label: 'CRM & Leads', icon: Briefcase, active: false },
    { label: 'Projects', icon: FolderKanban, active: false },
    { label: 'Assets', icon: Boxes, active: false },
    { label: 'Role Access', icon: ShieldCheck, active: false },
  ];

  const activeWorkspaces = [
    {
      title: 'HR & Attendance',
      badge: 'Implemented',
      detail: 'Employee records, attendance tracking & leave requests',
      icon: Users,
      accent: 'from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-400/25',
    },
    {
      title: 'CRM & Operations',
      badge: 'Implemented',
      detail: 'Lead management, task tracking & company asset records',
      icon: Briefcase,
      accent: 'from-purple-500/20 to-blue-500/20 text-purple-300 border-purple-400/25',
    },
    {
      title: 'Payroll Module',
      badge: 'In Progress',
      detail: 'Supporting salary records & payroll processing workflows',
      icon: CreditCard,
      accent: 'from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-400/25',
    },
  ];

  const workflowRows = [
    {
      module: 'Employee, Attendance & Leave Workflows',
      scope: 'HRMS Module',
      access: 'HR & Admin',
      state: 'Implemented',
    },
    {
      module: 'Lead Tracking, Tasks & Asset Records',
      scope: 'CRM & Operations',
      access: 'Role-Based',
      state: 'Implemented',
    },
    {
      module: 'Salary & Payroll Processing Workflows',
      scope: 'Payroll Module',
      access: 'Finance & Admin',
      state: 'In Progress',
    },
  ];

  return (
    <MotionDiv
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-2xl border border-white/12 bg-slate-950/90 shadow-[0_24px_60px_rgba(2,6,23,0.75)] sm:rounded-[1.5rem]"
    >
      {/* Top Window Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-slate-900/90 px-3.5 py-2.5 sm:px-5 sm:py-3">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400/70" />
          <span className="ml-1.5 truncate font-sans text-[11px] font-semibold text-slate-300 sm:ml-2 sm:text-xs">
            Business Management Platform · ERP / HRMS / CRM
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
            <ShieldCheck className="h-3 w-3" />
            Role-Based Access
          </span>
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] xl:grid-cols-[170px_1fr]">
        {/* Sidebar (visible on md+) */}
        <div className="hidden border-r border-white/[0.08] bg-slate-950/70 p-3 md:block">
          <p className="px-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Core Modules
          </p>
          <div className="mt-2.5 space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-medium ${
                    item.active
                      ? 'border border-blue-400/25 bg-gradient-to-r from-blue-500/20 to-purple-500/15 text-white'
                      : 'text-slate-400'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 shrink-0 ${item.active ? 'text-blue-300' : 'text-slate-500'}`} />
                  <span className="truncate">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Workspace Panel */}
        <div className="p-3.5 sm:p-4 lg:p-5">
          {/* Top Summary Cards */}
          <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3">
            {activeWorkspaces.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-xl border border-white/10 bg-slate-900/75 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-gradient-to-br ${card.accent}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                      {card.badge}
                    </span>
                  </div>
                  <p className="mt-2.5 font-sans text-xs font-bold text-white">{card.title}</p>
                  <p className="mt-1 text-[11px] leading-snug text-slate-400">{card.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Operational Workflow & Role Matrix */}
          <div className="mt-3.5 rounded-xl border border-white/10 bg-slate-900/60 p-3 sm:p-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.07] pb-2.5">
              <div>
                <p className="font-sans text-xs font-bold text-white">
                  Connected Application Modules
                </p>
                <p className="text-[11px] text-slate-400">
                  Role-scoped workflows across HR, attendance, CRM, assets & payroll
                </p>
              </div>
              <span className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold text-blue-200">
                JWT + Role-Based Access
              </span>
            </div>

            <div className="mt-2.5 divide-y divide-white/[0.06]">
              {workflowRows.map((row) => (
                <div
                  key={row.module}
                  className="flex flex-wrap items-center justify-between gap-2 py-2 text-xs"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-sans font-semibold leading-snug text-slate-200">{row.module}</p>
                    <p className="text-[11px] text-slate-400">{row.scope}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-slate-300 sm:inline-block">
                      {row.access}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-blue-400/20 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      {row.state}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

function TravelPlatformVisual({ shouldReduceMotion }) {
  const packages = [
    {
      name: 'Himalayan Circuit Tour',
      meta: '6 Days · Custom & Group Itinerary',
      status: 'Published',
    },
    {
      name: 'Coastal Heritage Package',
      meta: '5 Days · Multi-City Itinerary',
      status: 'Published',
    },
    {
      name: 'Custom Group Travel Enquiry',
      meta: 'Connected to Internal Lead CRM',
      status: 'Active Flow',
    },
  ];

  const bookingStages = [
    'Package Discovery',
    'Enquiry Captured',
    'CRM Follow-up',
    'Booking Workflow',
  ];

  return (
    <MotionDiv
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-2xl border border-white/12 bg-slate-950/90 shadow-[0_24px_60px_rgba(2,6,23,0.75)] sm:rounded-[1.5rem]"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-slate-900/90 px-3.5 py-2.5 sm:px-5 sm:py-3">
        <div className="flex items-center gap-2 min-w-0">
          <Compass className="h-4 w-4 shrink-0 text-blue-400" />
          <span className="truncate font-sans text-[11px] font-semibold text-slate-200 sm:text-xs">
            Indian Tours & Travels · Customer Portal + Internal CRM
          </span>
        </div>
        <span className="shrink-0 rounded-full border border-purple-400/25 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-purple-200">
          MERN Platform
        </span>
      </div>

      <div className="p-3.5 sm:p-5">
        {/* Booking Lifecycle Strip */}
        <div className="rounded-xl border border-white/10 bg-slate-900/75 p-3">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Customer Enquiry & Internal CRM Flow
          </p>
          <div className="mt-2.5 grid grid-cols-1 min-[390px]:grid-cols-2 gap-2 sm:grid-cols-4">
            {bookingStages.map((stage, idx) => (
              <div
                key={stage}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/80 px-2.5 py-2"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 font-sans text-[10px] font-bold text-blue-300">
                  {idx + 1}
                </span>
                <span className="font-sans text-[11px] font-semibold leading-tight text-slate-200">
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Product Workspace: Package/CRM Queue + Module Status */}
        <div className="mt-3.5 grid grid-cols-1 gap-3.5 md:grid-cols-[1.15fr_0.85fr]">
          {/* Tour Packages & CRM Panel */}
          <div className="rounded-xl border border-white/10 bg-slate-900/65 p-3.5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-300" />
                <p className="font-sans text-xs font-bold text-white">
                  Tour Packages & Lead CRM
                </p>
              </div>
              <span className="text-[10px] font-semibold text-emerald-300">Implemented</span>
            </div>

            <div className="mt-3 space-y-2">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="flex items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-slate-950/75 px-3 py-2.5"
                >
                  <div className="min-w-0">
                    <p className="truncate font-sans text-xs font-semibold text-slate-100">
                      {pkg.name}
                    </p>
                    <p className="truncate text-[11px] text-slate-400">{pkg.meta}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-blue-400/20 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-200">
                    {pkg.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Operations & Billing Status Module */}
          <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-b from-slate-900/85 to-slate-950/90 p-3.5">
            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-400/25 bg-purple-500/15 text-purple-300">
                  <Receipt className="h-4 w-4" />
                </div>
                <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-200">
                  Module Status
                </span>
              </div>

              <p className="mt-3 font-sans text-xs font-bold text-white">
                Internal Admin & Billing Scope
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                Public tour discovery, enquiry capture, CRM follow-ups and admin dashboards are implemented, with GST invoice workflows in progress.
              </p>
            </div>

            <div className="mt-3.5 space-y-1.5 border-t border-white/[0.08] pt-2.5 text-[11px]">
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                  Admin & Employee Dashboards
                </span>
                <span className="font-semibold text-emerald-300">Implemented</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5">
                  <FileSpreadsheet className="h-3.5 w-3.5 text-amber-300" />
                  GST Billing & Invoices
                </span>
                <span className="font-semibold text-amber-300">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

function ApexBuildEcosystemVisual({ shouldReduceMotion }) {
  const topVerticals = [
    {
      name: 'Contractor OS',
      status: 'Completed',
      detail: 'Specialized operational workflows designed for contractor businesses',
      icon: HardHat,
    },
    {
      name: 'Supplier OS',
      status: '~90% Complete',
      detail: 'Specialized operational workflows designed for supplier businesses',
      icon: PackageCheck,
    },
    {
      name: 'Diagnostics OS',
      status: '~85% Complete',
      detail: 'Specialized operational workflows designed for diagnostics businesses',
      icon: Stethoscope,
    },
  ];

  return (
    <MotionDiv
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-2xl border border-white/12 bg-slate-950/90 p-4 shadow-[0_24px_60px_rgba(2,6,23,0.75)] sm:rounded-[1.5rem] sm:p-6"
    >
      {/* Subtle Background Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(79,70,229,0.18),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-blue-400" />
            <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
              Multi-Vertical SaaS Ecosystem Architecture
            </span>
          </div>
          <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-blue-200">
            Shared Control + Vertical Operating Systems
          </span>
        </div>

        {/* Tree Hierarchy Diagram */}
        <div className="mt-5 flex flex-col items-center">
          {/* Root Node: Superadmin Control Tower */}
          <div className="w-full max-w-md rounded-2xl border border-blue-400/35 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 p-3.5 text-center shadow-[0_12px_30px_rgba(59,130,246,0.18)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-blue-200 sm:tracking-[0.16em]">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-blue-400" />
              Superadmin Control Tower
            </div>
            <p className="mt-2 text-xs text-slate-300">
              Business Accounts · Platform Access · Subscriptions & Pricing
            </p>
          </div>

          {/* Branching Connector Lines */}
          <div className="flex flex-col items-center w-full" aria-hidden="true">
            <div className="h-5 w-px bg-gradient-to-b from-blue-400/60 to-indigo-400/50" />
            {/* Horizontal branch bar on md+ */}
            <div className="hidden md:grid md:w-[76%] md:grid-cols-2">
              <div className="h-3 border-t border-l border-indigo-400/40 rounded-tl-lg" />
              <div className="h-3 border-t border-r border-indigo-400/40 rounded-tr-lg" />
            </div>
            <ArrowDown className="h-3.5 w-3.5 text-indigo-300/80 md:hidden" />
          </div>

          {/* Primary 3 Vertical OS Nodes */}
          <div className="mt-1 grid w-full grid-cols-1 gap-3 md:grid-cols-3">
            {topVerticals.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.name}
                  className="flex flex-col justify-between rounded-2xl border border-white/12 bg-slate-900/85 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-blue-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-bold text-white sm:text-sm">
                        {node.name}
                      </p>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-300/80">
                        {node.status}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2.5 text-[11px] leading-relaxed text-slate-300/85">
                    {node.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Connector to Distributor OS */}
          <div className="flex flex-col items-center" aria-hidden="true">
            <div className="h-4 w-px bg-gradient-to-b from-indigo-400/50 to-purple-400/50" />
            <ArrowDown className="h-3.5 w-3.5 text-purple-300/80" />
          </div>

          {/* 4th Vertical Node: Distributor OS */}
          <div className="mt-1 w-full max-w-md rounded-2xl border border-purple-400/25 bg-slate-900/85 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-400/25 bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300">
                <Truck className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-sans text-xs font-bold text-white sm:text-sm">
                    Distributor OS
                  </p>
                  <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-2 py-0.5 text-[10px] font-semibold text-purple-200">
                    ~75% Complete
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-snug text-slate-300/85">
                  Specialized operational workflows designed for distributor businesses
                </p>
              </div>
            </div>
          </div>

          {/* Shared Core Infrastructure Footer Bar */}
          <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-slate-900/60 px-3.5 py-2.5 text-[11px] text-slate-300">
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <Database className="h-3.5 w-3.5 text-blue-400" />
              Shared Platform Layer
            </span>
            <span className="text-slate-400">
              React.js · Node.js · Express.js · MongoDB
            </span>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

function ProjectVisual({ visualType, shouldReduceMotion }) {
  if (visualType === 'erp-dashboard') {
    return <ErpDashboardVisual shouldReduceMotion={shouldReduceMotion} />;
  }
  if (visualType === 'travel-platform') {
    return <TravelPlatformVisual shouldReduceMotion={shouldReduceMotion} />;
  }
  return <ApexBuildEcosystemVisual shouldReduceMotion={shouldReduceMotion} />;
}

function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();

  const revealProps = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-8%] top-[12%] h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[130px]" />
        <div className="absolute left-[-8%] top-[48%] h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[130px]" />
        <div className="absolute right-[10%] bottom-[8%] h-72 w-72 rounded-full bg-indigo-600/[0.07] blur-[120px]" />
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
              <span>{projectsHeader.eyebrow}</span>
            </div>
          </MotionDiv>

          <MotionDiv {...revealProps(0.08)}>
            <h2 className="mt-5 font-sans text-[1.85rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:mt-6 sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem]">
              <span className="block">{projectsHeader.headline.line1}</span>
              <span className="mt-1 block">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {projectsHeader.headline.highlight}
                </span>
                <span className="text-white">.</span>
              </span>
            </h2>
          </MotionDiv>

          <MotionDiv {...revealProps(0.14)}>
            <p className="mt-5 max-w-2xl text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-6 sm:text-lg sm:leading-8">
              {projectsHeader.description}
            </p>
          </MotionDiv>
        </div>

        {/* Editorial Project Showcases */}
        <div className="mt-12 space-y-12 sm:mt-16 sm:space-y-16 lg:space-y-20">
          {projects.map((project, index) => {
            const isProjectOne = index === 0;
            const isProjectTwo = index === 1;
            const isProjectThree = index === 2;

            if (isProjectThree) {
              // PROJECT 03: Information + Full Ecosystem / Architecture Showcase
              return (
                <MotionArticle
                  key={project.slug}
                  {...revealProps(0.08)}
                  className="relative overflow-hidden rounded-3xl border border-white/12 bg-slate-900/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_70px_rgba(2,6,23,0.5)] backdrop-blur-xl sm:p-8 lg:p-10 xl:p-12"
                >
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
                    {/* Block 1: Title & Description (First on Mobile, Top-Left on Desktop) */}
                    <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-end">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-0.5 font-sans text-xs font-bold tracking-[0.16em] text-slate-300">
                          {project.number}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-blue-200">
                          <Building2 className="h-3.5 w-3.5 text-blue-300" />
                          {project.category}
                        </span>
                      </div>

                      <h3 className="mt-4 font-sans text-2xl font-extrabold tracking-[-0.025em] text-white sm:text-3xl lg:text-[2.15rem]">
                        {project.title}
                      </h3>

                      <p className="mt-3.5 text-[0.95rem] leading-relaxed text-slate-300/90 sm:text-base sm:leading-7">
                        {project.description}
                      </p>
                    </div>

                    {/* Block 2: Ecosystem Visual (Second on Mobile, Right Column on Desktop) */}
                    <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
                      <ProjectVisual
                        visualType={project.visualType}
                        shouldReduceMotion={shouldReduceMotion}
                      />
                    </div>

                    {/* Block 3: Technical Focus, Key Products, Tech Stack & Case Study CTA (Third on Mobile, Bottom-Left on Desktop) */}
                    <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-start">
                      {project.technicalFocus ? (
                        <div className="mb-5 rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3">
                          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                            My Technical Focus
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-200/95 sm:text-[13px]">
                            {project.technicalFocus}
                          </p>
                        </div>
                      ) : null}

                      <div>
                        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          {project.capabilityLabel}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-2">
                          {project.capabilities.map((item) => (
                            <span
                              key={item}
                              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 font-sans text-xs font-semibold text-slate-200"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 border-t border-white/[0.08] pt-4">
                        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          Core Technology
                        </p>
                        <p className="mt-1.5 font-sans text-xs font-semibold tracking-wide text-blue-200/90 sm:text-sm">
                          {project.stack.join(' · ')}
                        </p>
                      </div>

                      <div className="mt-5">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="group inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all hover:border-blue-400/40 hover:bg-white/[0.1] sm:w-auto"
                        >
                          <span>View Case Study</span>
                          <span className="sr-only">: {project.title}</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </MotionArticle>
              );
            }

            // PROJECT 01 (Info Left, Visual Right) & PROJECT 02 (Visual Left, Info Right)
            return (
              <MotionArticle
                key={project.slug}
                {...revealProps(0.08)}
                className={`relative overflow-hidden rounded-3xl border backdrop-blur-xl p-5 sm:p-8 lg:p-10 xl:p-12 ${
                  isProjectOne
                    ? 'border-blue-400/20 bg-gradient-to-br from-slate-900/85 via-slate-900/75 to-indigo-950/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_32px_80px_rgba(2,6,23,0.65)]'
                    : 'border-white/12 bg-slate-900/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_70px_rgba(2,6,23,0.5)]'
                }`}
              >
                {isProjectOne ? (
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
                    aria-hidden="true"
                  />
                ) : null}

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-12">
                  {/* Block 1: Category, Title & Description (1st on Mobile) */}
                  <div
                    className={
                      isProjectTwo
                        ? 'lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:self-end'
                        : 'lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-end'
                    }
                  >
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-0.5 font-sans text-xs font-bold tracking-[0.16em] text-slate-300">
                        {project.number}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-blue-200">
                        {isProjectOne ? (
                          <Sparkles className="h-3.5 w-3.5 text-blue-300" />
                        ) : null}
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-4 font-sans text-2xl font-extrabold tracking-[-0.025em] text-white sm:text-3xl lg:text-[2.15rem] lg:leading-[1.15]">
                      {project.title}
                    </h3>

                    <p className="mt-3.5 text-[0.95rem] leading-relaxed text-slate-300/90 sm:text-base sm:leading-7">
                      {project.description}
                    </p>
                  </div>

                  {/* Block 2: Large Product Visual (2nd on Mobile, Opposite Column on Desktop) */}
                  <div
                    className={
                      isProjectTwo
                        ? 'lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1'
                        : 'lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1'
                    }
                  >
                    <ProjectVisual
                      visualType={project.visualType}
                      shouldReduceMotion={shouldReduceMotion}
                    />
                  </div>

                  {/* Block 3: Technical Focus, Capabilities, Technology & Case Study CTA (3rd on Mobile) */}
                  <div
                    className={
                      isProjectTwo
                        ? 'lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:self-start'
                        : 'lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-start'
                    }
                  >
                    {project.technicalFocus ? (
                      <div className="mb-5 rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3">
                        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                          My Technical Focus
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-200/95 sm:text-[13px]">
                          {project.technicalFocus}
                        </p>
                      </div>
                    ) : null}

                    <div>
                      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        {project.capabilityLabel}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {project.capabilities.map((capability) => (
                          <span
                            key={capability}
                            className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 font-sans text-xs font-medium text-slate-200"
                          >
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 border-t border-white/[0.08] pt-4">
                      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        Core Technology
                      </p>
                      <p className="mt-1.5 font-sans text-xs font-semibold tracking-wide text-blue-200/90 sm:text-sm">
                        {project.stack.join(' · ')}
                      </p>
                    </div>

                    <div className="mt-5">
                      <Link
                        to={`/projects/${project.slug}`}
                        className={`group inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all sm:w-auto ${
                          isProjectOne
                            ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white shadow-[0_12px_30px_-6px_rgba(79,70,229,0.5)] hover:from-blue-400 hover:via-indigo-500 hover:to-purple-500'
                            : 'border border-white/14 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-blue-400/40 hover:bg-white/[0.1]'
                        }`}
                      >
                        <span>View Case Study</span>
                        <span className="sr-only">: {project.title}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionArticle>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
