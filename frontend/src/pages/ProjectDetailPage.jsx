import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Briefcase,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Code2,
  Compass,
  CreditCard,
  Database,
  FolderKanban,
  Github,
  Globe,
  HardHat,
  Layers,
  LayoutDashboard,
  Lock,
  MapPin,
  PackageCheck,
  Receipt,
  Send,
  Server,
  ShieldCheck,
  Stethoscope,
  Terminal,
  Truck,
  Users,
  Workflow,
} from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import ProjectGallery from '../components/projects/ProjectGallery';
import SEO from '../components/seo/SEO';
import { projectSeoBySlug } from '../data/seoConfig';
import { projects } from '../data/siteContent';

const MotionDiv = motion.div;

const iconMap = {
  Users,
  CalendarCheck,
  CreditCard,
  Briefcase,
  FolderKanban,
  Boxes,
  ShieldCheck,
  Lock,
  Workflow,
  Terminal,
  Code2,
  Server,
  Database,
  Layers,
  Globe,
  Compass,
  LayoutDashboard,
  Receipt,
  HardHat,
  PackageCheck,
  Stethoscope,
  Truck,
};

function PlatformHeroVisual({ shouldReduceMotion }) {
  const sidebarModules = [
    { label: 'Operations Overview', icon: LayoutDashboard, active: true },
    { label: 'HR & Employees', icon: Users, active: false },
    { label: 'Attendance & Leave', icon: CalendarCheck, active: false },
    { label: 'Payroll Processing', icon: CreditCard, active: false },
    { label: 'CRM & Lead Pipeline', icon: Briefcase, active: false },
    { label: 'Projects & Tasks', icon: FolderKanban, active: false },
    { label: 'Asset Register', icon: Boxes, active: false },
    { label: 'Role Access (RBAC)', icon: ShieldCheck, active: false },
  ];

  const workspaceCards = [
    {
      title: 'HR & Workforce Directory',
      tag: 'Module 01 · Implemented',
      summary: 'Employee profiles, department records, designations & onboarding workflows',
      icon: Users,
      accent: 'border-blue-400/25 bg-blue-500/15 text-blue-300',
    },
    {
      title: 'Attendance & Leave',
      tag: 'Module 02 · Implemented',
      summary: 'Daily attendance logs, shift schedules & leave request approval workflows',
      icon: CalendarCheck,
      accent: 'border-indigo-400/25 bg-indigo-500/15 text-indigo-300',
    },
    {
      title: 'Payroll Workflows',
      tag: 'Module 03 · In Progress',
      summary: 'Supporting salary structure configuration and attendance-linked payroll workflows',
      icon: CreditCard,
      accent: 'border-purple-400/25 bg-purple-500/15 text-purple-300',
    },
    {
      title: 'CRM, Projects & Assets',
      tag: 'Modules 04–06 · Implemented',
      summary: 'Lead management, customer follow-ups, task assignments & company asset tracking',
      icon: Briefcase,
      accent: 'border-blue-400/25 bg-blue-500/15 text-blue-300',
    },
  ];

  const sanitizedRecords = [
    {
      workflow: 'Employee Onboarding & Profile Records',
      module: 'HRMS Module',
      roleScope: 'HR / Admin Role',
      state: 'Implemented',
    },
    {
      workflow: 'Attendance Tracking & Leave Approvals',
      module: 'Attendance & Leave',
      roleScope: 'Manager / HR Role',
      state: 'Implemented',
    },
    {
      workflow: 'Lead Tracking, Tasks & Asset Records',
      module: 'CRM & Operations',
      roleScope: 'Role-Based Scope',
      state: 'Implemented',
    },
    {
      workflow: 'Salary & Payroll Processing Workflows',
      module: 'Payroll Module',
      roleScope: 'Finance / Admin',
      state: 'In Progress',
    },
  ];

  return (
    <MotionDiv
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="overflow-hidden rounded-2xl border border-white/12 bg-slate-950/90 shadow-[0_28px_75px_rgba(2,6,23,0.75)] sm:rounded-3xl"
    >
      {/* Window Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-900/90 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 truncate font-sans text-xs font-semibold text-slate-200 sm:text-sm">
            Business Management Platform · Unified Operations Workspace
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-blue-200">
            <Lock className="h-3 w-3 text-blue-300" />
            JWT Authenticated
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
            <ShieldCheck className="h-3 w-3" />
            RBAC Enforced
          </span>
        </div>
      </div>

      {/* Main Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr]">
        {/* Sidebar Navigation */}
        <div className="hidden border-r border-white/[0.08] bg-slate-950/75 p-4 lg:block">
          <p className="px-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Platform Modules
          </p>
          <div className="mt-3 space-y-1.5">
            {sidebarModules.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold ${
                    item.active
                      ? 'border border-blue-400/25 bg-gradient-to-r from-blue-500/20 to-purple-500/15 text-white'
                      : 'text-slate-400'
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      item.active ? 'text-blue-300' : 'text-slate-500'
                    }`}
                  />
                  <span className="truncate">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Workspace Content */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {workspaceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/75 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${card.accent}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-slate-300">
                      {card.tag}
                    </span>
                  </div>
                  <p className="mt-3 font-sans text-sm font-bold text-white">
                    {card.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {card.summary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Connected Workflow & Access Matrix (Sanitized Architecture View) */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
              <div>
                <p className="font-sans text-xs font-bold text-white sm:text-sm">
                  Connected Operational Workflows (Sanitized View)
                </p>
                <p className="text-[11px] text-slate-400">
                  Role-isolated module interactions backed by Express REST APIs & MongoDB
                </p>
              </div>
              <span className="rounded-lg border border-purple-400/25 bg-purple-500/10 px-2.5 py-1 font-sans text-[10px] font-semibold text-purple-200">
                React.js · Node.js · Express.js · MongoDB
              </span>
            </div>

            <div className="mt-2.5 divide-y divide-white/[0.06]">
              {sanitizedRecords.map((row) => (
                <div
                  key={row.workflow}
                  className="flex flex-wrap items-center justify-between gap-2 py-2.5 text-xs"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-sans font-semibold leading-snug text-slate-200">
                      {row.workflow}
                    </p>
                    <p className="text-[11px] text-slate-400">{row.module}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold text-slate-300 sm:inline-block">
                      {row.roleScope}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-blue-200">
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

function TravelHeroVisual({ shouldReduceMotion }) {
  const catalogPackages = [
    {
      code: 'PKG-HIM-01',
      name: 'Himalayan Scenic Circuit',
      duration: '6 Days · Custom / Group Itinerary',
      route: 'Shimla → Manali → Solang',
      status: 'Published',
    },
    {
      code: 'PKG-KER-04',
      name: 'Backwaters & Coastal Trail',
      duration: '5 Days · Guided Package',
      route: 'Kochi → Munnar → Alleppey',
      status: 'Enquiry Active',
    },
    {
      code: 'PKG-RAJ-02',
      name: 'Royal Heritage Expedition',
      duration: '7 Days · Multi-City Route',
      route: 'Jaipur → Jodhpur → Udaipur',
      status: 'Published',
    },
  ];

  const sanitizedLeads = [
    {
      refId: 'ENQ-2041',
      packageInterest: 'Himalayan Scenic Circuit (6D)',
      source: 'Website Enquiry Form',
      stage: 'CRM Follow-up',
      assignedScope: 'Travel Consultant',
    },
    {
      refId: 'ENQ-2042',
      packageInterest: 'Backwaters & Coastal Trail (5D)',
      source: 'Package Detail Page',
      stage: 'Booking Workflow',
      assignedScope: 'Operations Desk',
    },
    {
      refId: 'ENQ-2043',
      packageInterest: 'Custom Group Tour Request',
      source: 'Direct Portal Enquiry',
      stage: 'Lead Created',
      assignedScope: 'Admin Queue',
    },
  ];

  const adminModules = [
    { label: 'Package & Destination Catalog', state: 'Implemented' },
    { label: 'Lead Capture & CRM Workflows', state: 'Implemented' },
    { label: 'Booking & Staff Workspace', state: 'Implemented' },
    { label: 'GST Billing & Invoices', state: 'Planned / In Progress' },
  ];

  return (
    <MotionDiv
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="overflow-hidden rounded-2xl border border-white/12 bg-slate-950/90 shadow-[0_28px_75px_rgba(2,6,23,0.75)] sm:rounded-3xl"
    >
      {/* Top Window Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-900/90 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 min-w-0">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 truncate font-sans text-xs font-semibold text-slate-200 sm:text-sm">
            Indian Tours & Travels · Customer Portal + Internal CRM & Admin System
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-blue-200">
            <Globe className="h-3 w-3 text-blue-300" />
            Customer Portal
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/25 bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-purple-200">
            <LayoutDashboard className="h-3 w-3 text-purple-300" />
            Admin & CRM
          </span>
        </div>
      </div>

      {/* Dual-Surface Workspace: Customer Website (Left) + Admin & CRM Console (Right) */}
      <div className="grid grid-cols-1 divide-y divide-white/10 lg:grid-cols-[0.95fr_1.05fr] lg:divide-x lg:divide-y-0">
        {/* Surface 1: Customer-Facing Travel Website */}
        <div className="p-4 sm:p-6 bg-slate-950/60">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/15 text-blue-300">
                <Compass className="h-4 w-4" />
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                  Public Surface · React UI
                </p>
                <p className="font-sans text-sm font-bold text-white sm:text-base">
                  Customer Travel Website & Enquiry Flow
                </p>
              </div>
            </div>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              Implemented
            </span>
          </div>

          {/* Package Discovery Cards */}
          <div className="mt-4 space-y-2.5">
            {catalogPackages.map((pkg) => (
              <div
                key={pkg.code}
                className="rounded-xl border border-white/10 bg-slate-900/80 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md border border-blue-400/20 bg-blue-500/10 px-2 py-0.5 font-sans text-[10px] font-bold text-blue-200">
                      {pkg.code}
                    </span>
                    <p className="font-sans text-xs font-bold text-white sm:text-sm">
                      {pkg.name}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                    {pkg.status}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                  <span className="inline-flex items-center gap-1 text-slate-300">
                    <MapPin className="h-3 w-3 text-blue-400" />
                    {pkg.route}
                  </span>
                  <span>{pkg.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sanitized Enquiry Capture Strip */}
          <div className="mt-4 rounded-xl border border-blue-400/25 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 p-3.5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Send className="h-3.5 w-3.5 text-blue-300" />
                <p className="font-sans text-xs font-bold text-white">
                  Structured Enquiry Capture → Express REST API
                </p>
              </div>
              <span className="rounded-md border border-blue-400/25 bg-slate-950/70 px-2 py-0.5 font-sans text-[10px] font-semibold text-blue-200">
                POST /api/enquiries
              </span>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-300">
              Validates selected tour package, travel preferences, and group requirements, creating an immediate lead record in MongoDB.
            </p>
          </div>
        </div>

        {/* Surface 2: Internal Admin, Lead CRM & Booking Workspace */}
        <div className="p-4 sm:p-6 bg-slate-950/85">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-500/15 text-purple-300">
                <LayoutDashboard className="h-4 w-4" />
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-purple-300">
                  Internal Surface · JWT + RBAC
                </p>
                <p className="font-sans text-sm font-bold text-white sm:text-base">
                  Lead CRM, Booking & Admin Workspace
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-2.5 py-0.5 font-sans text-[10px] font-bold text-indigo-200">
              <ShieldCheck className="h-3 w-3" />
              Role-Protected
            </span>
          </div>

          {/* Sanitized Lead & Booking Pipeline */}
          <div className="mt-4 rounded-xl border border-white/10 bg-slate-900/75 p-3.5">
            <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-2.5">
              <p className="font-sans text-xs font-bold text-white">
                Incoming Enquiries & Booking Pipeline (Sanitized)
              </p>
              <span className="text-[10px] font-semibold text-slate-400">
                MongoDB Lead Collection
              </span>
            </div>

            <div className="mt-2 divide-y divide-white/[0.06]">
              {sanitizedLeads.map((lead) => (
                <div
                  key={lead.refId}
                  className="flex flex-wrap items-center justify-between gap-2 py-2.5 text-xs"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="font-sans text-[10px] font-bold text-blue-300">
                        {lead.refId}
                      </span>
                      <p className="font-sans font-semibold leading-snug text-slate-200">
                        {lead.packageInterest}
                      </p>
                    </div>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      {lead.source} · {lead.assignedScope}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-blue-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {lead.stage}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Module Implementation Status Strip */}
          <div className="mt-3.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {adminModules.map((mod) => {
              const isPlanned = mod.state !== 'Implemented';
              return (
                <div
                  key={mod.label}
                  className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-slate-900/65 px-3 py-2.5"
                >
                  <span className="truncate font-sans text-xs font-semibold text-slate-200">
                    {mod.label}
                  </span>
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider ${
                      isPlanned
                        ? 'border-amber-400/25 bg-amber-500/10 text-amber-300'
                        : 'border-emerald-400/25 bg-emerald-500/10 text-emerald-300'
                    }`}
                  >
                    {mod.state}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

function DualSurfaceArchitectureDiagram({ architecture }) {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Layer 1: Dual Entry Surfaces (Visitors + Internal Users) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {architecture.actors.map((actor, idx) => (
          <div
            key={actor.role}
            className={`rounded-2xl border p-4 sm:p-5 ${
              idx === 0
                ? 'border-blue-400/30 bg-gradient-to-br from-blue-500/15 via-slate-950/85 to-slate-950/90'
                : 'border-purple-400/30 bg-gradient-to-br from-purple-500/15 via-slate-950/85 to-slate-950/90'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className={`rounded-full border px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.18em] ${
                  idx === 0
                    ? 'border-blue-400/25 bg-blue-500/15 text-blue-200'
                    : 'border-purple-400/25 bg-purple-500/15 text-purple-200'
                }`}
              >
                {actor.role}
              </span>
              <span className="font-sans text-[11px] font-bold text-slate-400">
                0{idx + 1}
              </span>
            </div>
            <h3 className="mt-3 font-sans text-base font-bold text-white sm:text-lg">
              {actor.surface}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
              {actor.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Connector Arrows Down */}
      <div className="my-2 flex flex-col items-center" aria-hidden="true">
        <div className="h-4 w-px bg-gradient-to-b from-blue-400/60 to-purple-400/60" />
        <ArrowDown className="h-4 w-4 text-blue-300/80" />
      </div>

      {/* Layer 2: REST API Layer */}
      <div className="rounded-2xl border border-white/12 bg-slate-950/85 p-4 sm:p-5">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/15 font-sans text-xs font-bold text-blue-200">
              03
            </span>
            <div>
              <h3 className="font-sans text-base font-bold text-white sm:text-lg">
                {architecture.apiLayer.title}
              </h3>
              <p className="font-sans text-xs font-semibold text-blue-300/90">
                {architecture.apiLayer.subtitle}
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-400 sm:max-w-sm sm:text-right">
            {architecture.apiLayer.detail}
          </p>
        </div>
      </div>

      {/* Connector Arrow Down */}
      <div className="my-2 flex flex-col items-center" aria-hidden="true">
        <div className="h-4 w-px bg-gradient-to-b from-blue-400/60 to-purple-400/60" />
        <ArrowDown className="h-4 w-4 text-blue-300/80" />
      </div>

      {/* Layer 3: Business Logic Layer with Dual Domain Branches (CRM / Leads & Admin System) */}
      <div className="rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 p-4 shadow-[0_14px_35px_rgba(59,130,246,0.15)] sm:p-5">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/15 font-sans text-xs font-bold text-blue-200">
              04
            </span>
            <div>
              <h3 className="font-sans text-base font-bold text-white sm:text-lg">
                {architecture.businessLayer.title}
              </h3>
              <p className="font-sans text-xs font-semibold text-blue-300/90">
                {architecture.businessLayer.subtitle}
              </p>
            </div>
          </div>
          <span className="rounded-full border border-white/12 bg-slate-950/70 px-3 py-1 font-sans text-[11px] font-semibold text-slate-200">
            Public Enquiry ↔ Internal Operations
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3.5 border-t border-white/10 pt-4 md:grid-cols-2">
          {architecture.businessLayer.branches.map((branch) => (
            <div
              key={branch.title}
              className="rounded-xl border border-white/12 bg-slate-950/85 p-3.5"
            >
              <p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                {branch.title}
              </p>
              <div className="mt-2.5 grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
                {branch.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-slate-900/80 px-2.5 py-1.5 text-center font-sans text-xs font-semibold text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connector Arrow Down */}
      <div className="my-2 flex flex-col items-center" aria-hidden="true">
        <div className="h-4 w-px bg-gradient-to-b from-blue-400/60 to-purple-400/60" />
        <ArrowDown className="h-4 w-4 text-blue-300/80" />
      </div>

      {/* Layer 4: MongoDB Data Layer */}
      <div className="rounded-2xl border border-white/12 bg-slate-950/85 p-4 sm:p-5">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/15 font-sans text-xs font-bold text-blue-200">
              05
            </span>
            <div>
              <h3 className="font-sans text-base font-bold text-white sm:text-lg">
                {architecture.databaseLayer.title}
              </h3>
              <p className="font-sans text-xs font-semibold text-blue-300/90">
                {architecture.databaseLayer.subtitle}
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-400 sm:max-w-sm sm:text-right">
            {architecture.databaseLayer.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

function ApexBuildHeroVisual({ shouldReduceMotion }) {
  const verticalOperatingSystems = [
    {
      id: 'contractor-os',
      name: 'Contractor OS',
      status: 'Completed',
      completed: true,
      focus: 'Specialized operational workflows designed for contractor businesses',
      icon: HardHat,
      accent: 'border-blue-400/25 bg-blue-500/15 text-blue-300',
    },
    {
      id: 'supplier-os',
      name: 'Supplier OS',
      status: '~90% Complete',
      completed: false,
      focus: 'Specialized operational workflows designed for supplier businesses',
      icon: PackageCheck,
      accent: 'border-indigo-400/25 bg-indigo-500/15 text-indigo-300',
    },
    {
      id: 'diagnostics-os',
      name: 'Diagnostics OS',
      status: '~85% Complete',
      completed: false,
      focus: 'Specialized operational workflows designed for diagnostics businesses',
      icon: Stethoscope,
      accent: 'border-purple-400/25 bg-purple-500/15 text-purple-300',
    },
    {
      id: 'distributor-os',
      name: 'Distributor OS',
      status: '~75% Complete',
      completed: false,
      focus: 'Specialized operational workflows designed for distributor businesses',
      icon: Truck,
      accent: 'border-blue-400/25 bg-blue-500/15 text-blue-300',
    },
  ];

  return (
    <MotionDiv
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="overflow-hidden rounded-2xl border border-white/12 bg-slate-950/90 shadow-[0_28px_75px_rgba(2,6,23,0.75)] sm:rounded-3xl"
    >
      {/* Window Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-900/90 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 min-w-0">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 truncate font-sans text-xs font-semibold text-slate-200 sm:text-sm">
            ApexBuild · One Ecosystem · Multiple Specialized Products · Shared Management
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-blue-200">
            <Layers className="h-3 w-3 text-blue-300" />
            Multi-Vertical SaaS
          </span>
        </div>
      </div>

      {/* Ecosystem Hierarchy Visualization */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          {/* Node 1: APEXBUILD */}
          <div className="w-full max-w-md rounded-2xl border border-blue-400/35 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 px-5 py-4 text-center shadow-[0_14px_35px_rgba(59,130,246,0.16)]">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-blue-200">
              Shared Software Ecosystem
            </p>
            <p className="mt-1 font-sans text-lg font-extrabold tracking-tight text-white sm:text-xl">
              APEXBUILD
            </p>
          </div>

          {/* Connector Down */}
          <div className="my-2 flex flex-col items-center" aria-hidden="true">
            <div className="h-4 w-px bg-gradient-to-b from-blue-400/70 to-indigo-400/70" />
            <ArrowDown className="h-4 w-4 text-blue-300" />
          </div>

          {/* Node 2: SUPERADMIN CONTROL TOWER */}
          <div className="w-full max-w-xl rounded-2xl border border-indigo-400/30 bg-slate-900/90 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-blue-200 sm:tracking-[0.18em]">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-blue-300" />
              SUPERADMIN CONTROL TOWER
            </div>
            <p className="mt-2 text-xs text-slate-300 sm:text-sm">
              Shared Administrative Foundation · Business Accounts · Platform Access · Subscriptions
            </p>
          </div>

          {/* Branching Connector into 4 Operating Systems */}
          <div className="my-2 flex w-full flex-col items-center" aria-hidden="true">
            <div className="h-4 w-px bg-gradient-to-b from-indigo-400/70 to-purple-400/70" />
            <div className="hidden w-[78%] border-t border-indigo-400/35 lg:block" />
            <ArrowDown className="h-4 w-4 text-purple-300" />
          </div>

          {/* 4 Specialized Operating Systems */}
          <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {verticalOperatingSystems.map((vertical) => {
              const Icon = vertical.icon;
              return (
                <div
                  key={vertical.id}
                  className="flex flex-col justify-between rounded-2xl border border-white/12 bg-slate-900/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${vertical.accent}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span
                        className={`rounded-full border px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider ${
                          vertical.completed
                            ? 'border-emerald-400/25 bg-emerald-500/10 text-emerald-300'
                            : 'border-blue-400/25 bg-blue-500/10 text-blue-200'
                        }`}
                      >
                        {vertical.status}
                      </span>
                    </div>
                    <p className="mt-3.5 font-sans text-sm font-bold text-white sm:text-base">
                      {vertical.name}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                      {vertical.focus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

function MultiVerticalArchitectureDiagram({ architecture }) {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Top Chain: SUPERADMIN → PLATFORM CONTROL → BUSINESS ACCOUNTS */}
      {architecture.topChain.map((node) => (
        <div key={node.step} className="flex flex-col items-center">
          <div className="w-full max-w-2xl rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 p-4 shadow-[0_12px_30px_rgba(59,130,246,0.12)] sm:p-5">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/15 font-sans text-xs font-bold text-blue-200">
                  {node.step}
                </span>
                <div>
                  <h3 className="font-sans text-base font-bold tracking-tight text-white sm:text-lg">
                    {node.title}
                  </h3>
                  <p className="font-sans text-xs font-semibold text-blue-300/90">
                    {node.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-2 flex flex-col items-center" aria-hidden="true">
            <div className="h-4 w-px bg-gradient-to-b from-blue-400/60 to-purple-400/60" />
            <ArrowDown className="h-4 w-4 text-blue-300/80" />
          </div>
        </div>
      ))}

      {/* Branch into 4 Specialized Operating Systems */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {architecture.verticals.map((vert) => {
          const IconComponent = iconMap[vert.icon] || Layers;
          return (
            <div key={vert.name} className="flex flex-col items-center">
              <div className="w-full rounded-2xl border border-white/14 bg-slate-950/90 p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/15 text-blue-300">
                  <IconComponent className="h-4 w-4" />
                </div>
                <h4 className="mt-3 font-sans text-xs font-bold tracking-wider text-white sm:text-sm">
                  {vert.name}
                </h4>
              </div>
              <div className="my-1.5 flex flex-col items-center" aria-hidden="true">
                <div className="h-3 w-px bg-gradient-to-b from-blue-400/60 to-purple-400/60" />
                <ArrowDown className="h-3.5 w-3.5 text-blue-300/80" />
              </div>
              <div className="w-full rounded-xl border border-white/10 bg-slate-900/75 px-3 py-2.5 text-center font-sans text-xs font-medium text-slate-300">
                {vert.scope}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const shouldReduceMotion = useReducedMotion();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const revealProps = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.12 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        };

  const cs = project.caseStudy;
  const projectSeo = projectSeoBySlug[project.slug] || {
    title: `${project.title} | Sahin Mondal`,
    description: project.description,
    ogTitle: `${project.title} | Sahin Mondal`,
    ogDescription: project.description,
    ogType: 'website',
    canonicalPath: `/projects/${project.slug}`,
  };
  const fallbackNextProject = projects[(projectIndex + 1) % projects.length];
  const nextProject = project.nextProject || {
    title: fallbackNextProject.title,
    category: fallbackNextProject.category,
    slug: fallbackNextProject.slug,
  };
  const prevProject = project.prevProject || null;

  // Fallback layout for projects without a full caseStudy object
  if (!cs) {
    return (
      <section className="pb-24 pt-12 sm:pt-16">
        <SEO
          title={projectSeo.title}
          description={projectSeo.description}
          ogTitle={projectSeo.ogTitle}
          ogDescription={projectSeo.ogDescription}
          ogType={projectSeo.ogType}
          canonicalPath={projectSeo.canonicalPath}
          ogImage={projectSeo.ogImage}
        />
        <Container>
          <Link
            to="/#projects"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-blue-400/35 hover:bg-white/[0.08] hover:text-white sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4 text-blue-300" />
            <span>Back to Projects</span>
          </Link>

          <MotionDiv {...revealProps(0.05)} className="mt-8">
            <GlassCard className="overflow-hidden p-0">
              <div className="border-b border-white/10 bg-[linear-gradient(135deg,rgba(72,188,255,0.18),rgba(121,96,255,0.16))] p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                  {project.category || 'Case Study'}
                </p>
                <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <h1 className="font-sans text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                      {project.title}
                    </h1>
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
                      {project.description}
                    </p>
                  </div>
                  <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5 sm:p-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        My Role
                      </p>
                      <p className="mt-1.5 font-sans text-base font-semibold text-white">
                        {project.role}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Operational Value
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                        {project.businessImpact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
                <div className="space-y-8">
                  {project.sections.map((section) => (
                    <div key={section.heading}>
                      <h2 className="font-sans text-xl font-bold text-white sm:text-2xl">
                        {section.heading}
                      </h2>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-8">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>

                <aside className="space-y-6">
                  {project.capabilities ? (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                        {project.capabilityLabel || 'Key Capabilities'}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="rounded-xl border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-200"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                      Highlights
                    </p>
                    <ul className="mt-4 space-y-3">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-relaxed text-slate-300"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                      Technology Stack
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xl border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.links.live || project.links.github ? (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                        Links
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {project.links.live ? (
                          <Button href={project.links.live} variant="secondary" className="gap-2">
                            Live demo
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        ) : null}
                        {project.links.github ? (
                          <Button href={project.links.github} variant="secondary" className="gap-2">
                            <Github className="h-4 w-4" />
                            GitHub
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </aside>
              </div>
            </GlassCard>
          </MotionDiv>

          {/* Bottom Next Project Navigation */}
          <div className="mt-12 flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-6 sm:flex-row sm:items-center sm:p-8">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 text-blue-300" />
              <span>Back to Projects</span>
            </Link>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-blue-400 hover:to-purple-500"
            >
              <span>Next Project: {nextProject.title}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const isTravelPlatform = cs.variant === 'travel-platform';
  const isSaasEcosystem = cs.variant === 'saas-ecosystem';
  const hasImplementationStatuses = cs.solution.modules.some(
    (mod) => mod.status === 'IMPLEMENTED' || mod.status === 'PLANNED / IN PROGRESS'
  );

  return (
    <article className="relative overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-12 lg:pb-28">
      <SEO
        title={projectSeo.title}
        description={projectSeo.description}
        ogTitle={projectSeo.ogTitle}
        ogDescription={projectSeo.ogDescription}
        ogType={projectSeo.ogType}
        canonicalPath={projectSeo.canonicalPath}
        ogImage={projectSeo.ogImage}
      />
      {/* Subtle Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-[4%] h-80 w-80 rounded-full bg-blue-600/[0.09] blur-[130px]" />
        <div className="absolute right-[-6%] top-[22%] h-96 w-96 rounded-full bg-purple-600/[0.09] blur-[140px]" />
        <div className="absolute left-[10%] top-[58%] h-80 w-80 rounded-full bg-indigo-600/[0.07] blur-[130px]" />
      </div>

      <Container>
        {/* ==================================================
            SECTION 1: CASE STUDY HERO
           ================================================== */}
        <section aria-labelledby="case-study-hero-heading">
          <MotionDiv
            {...revealProps(0)}
            className="flex flex-wrap items-center justify-between gap-3"
          >
            <Link
              to="/#projects"
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md transition-all hover:border-blue-400/35 hover:bg-white/[0.08] hover:text-white sm:text-sm"
            >
              <ArrowLeft className="h-4 w-4 text-blue-300 transition-transform duration-300 group-hover:-translate-x-0.5" />
              <span>Back to Projects</span>
            </Link>

            {cs.secondaryHeroAction ? (
              <a
                href={cs.secondaryHeroAction.href}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/[0.08] px-4 py-2 text-xs font-semibold text-blue-200 backdrop-blur-md transition-all hover:border-blue-400/45 hover:bg-blue-500/[0.15] hover:text-white sm:text-sm"
              >
                <span>{cs.secondaryHeroAction.label}</span>
                <ArrowDown className="h-3.5 w-3.5 text-blue-300" />
              </a>
            ) : null}
          </MotionDiv>

          <div className="mt-7 grid items-end gap-8 lg:mt-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div>
              <MotionDiv {...revealProps(0.05)}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    aria-hidden="true"
                  />
                  <span>{cs.heroLabel}</span>
                </div>
              </MotionDiv>

              <MotionDiv {...revealProps(0.1)}>
                <h1
                  id="case-study-hero-heading"
                  className="mt-5 font-sans text-[1.85rem] min-[375px]:text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:mt-6 sm:text-5xl lg:text-[3.4rem] xl:text-[3.85rem]"
                >
                  <span className="block">{cs.headline.line1}</span>
                  <span className="mt-1 block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {cs.headline.highlight}
                  </span>
                </h1>
              </MotionDiv>

              <MotionDiv {...revealProps(0.15)}>
                <p className="mt-5 max-w-2xl text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-6 sm:text-lg sm:leading-8">
                  {cs.heroDescription}
                </p>
              </MotionDiv>
            </div>

            {/* Role & Core Stack Summary Card */}
            <MotionDiv {...revealProps(0.18)}>
              <div className="rounded-2xl border border-white/12 bg-slate-900/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:rounded-3xl sm:p-6">
                <div className="border-b border-white/[0.08] pb-4">
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    MY ROLE
                  </p>
                  <p className="mt-1.5 font-sans text-lg font-bold text-white sm:text-xl">
                    {cs.role}
                  </p>
                  {cs.roleNote ? (
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {cs.roleNote}
                    </p>
                  ) : null}
                </div>

                <div className="mt-4">
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Core Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cs.heroTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xl border border-blue-400/20 bg-blue-500/[0.09] px-3.5 py-1.5 font-sans text-xs font-semibold text-blue-100 sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Prominent Platform Visual */}
          <MotionDiv {...revealProps(0.22)} className="mt-10 sm:mt-12">
            {isTravelPlatform ? (
              <TravelHeroVisual shouldReduceMotion={shouldReduceMotion} />
            ) : isSaasEcosystem ? (
              <ApexBuildHeroVisual shouldReduceMotion={shouldReduceMotion} />
            ) : (
              <PlatformHeroVisual shouldReduceMotion={shouldReduceMotion} />
            )}
          </MotionDiv>
        </section>

        {/* ==================================================
            SECTION 1B: PRODUCT IN ACTION (VISUAL GALLERY)
           ================================================== */}
        {cs.gallery ? <ProjectGallery gallery={cs.gallery} /> : null}

        {/* ==================================================
            SECTION 2: THE CHALLENGE
           ================================================== */}
        <section
          aria-labelledby="challenge-heading"
          className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
            <div>
              <MotionDiv {...revealProps(0)}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    aria-hidden="true"
                  />
                  <span>{cs.challenge.label}</span>
                </div>
              </MotionDiv>

              <MotionDiv {...revealProps(0.08)}>
                <h2
                  id="challenge-heading"
                  className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.5rem]"
                >
                  <span className="block">{cs.challenge.headline.line1}</span>
                  <span className="mt-1 block">
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {cs.challenge.headline.highlight}
                    </span>
                    <span className="text-white">.</span>
                  </span>
                </h2>
              </MotionDiv>

              <MotionDiv
                {...revealProps(0.14)}
                className="mt-5 space-y-4 text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-6 sm:text-base sm:leading-8"
              >
                {cs.challenge.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </MotionDiv>

              {cs.challenge.channels ? (
                <MotionDiv {...revealProps(0.18)} className="mt-6">
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Previously Disconnected Operational Channels
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cs.challenge.channels.map((channel) => (
                      <span
                        key={channel}
                        className="rounded-xl border border-white/10 bg-slate-900/80 px-3 py-1.5 font-sans text-xs font-semibold text-slate-200"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </MotionDiv>
              ) : null}
            </div>

            <div className="grid gap-4">
              {cs.challenge.painPoints.map((point, index) => (
                <MotionDiv
                  key={point.title}
                  {...revealProps(0.1 + index * 0.07)}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_45px_rgba(2,6,23,0.4)] backdrop-blur-xl sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-sans text-base font-bold text-white sm:text-lg">
                      {point.title}
                    </h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-sans text-xs font-bold tracking-[0.16em] text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/90 sm:text-[15px]">
                    {point.detail}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 3: THE SOLUTION (MODULE OVERVIEW)
           ================================================== */}
        <section
          aria-labelledby="solution-heading"
          className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
        >
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <MotionDiv {...revealProps(0)}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    aria-hidden="true"
                  />
                  <span>{cs.solution.label}</span>
                </div>
              </MotionDiv>

              <MotionDiv {...revealProps(0.08)}>
                <h2
                  id="solution-heading"
                  className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.65rem]"
                >
                  <span className="block">{cs.solution.headline.line1}</span>
                  <span className="mt-1 block">
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {cs.solution.headline.highlight}
                    </span>
                    <span className="text-white">.</span>
                  </span>
                </h2>
              </MotionDiv>

              <MotionDiv {...revealProps(0.14)}>
                <p className="mt-4 text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-5 sm:text-lg sm:leading-8">
                  {cs.solution.intro}
                </p>
              </MotionDiv>
            </div>

            {hasImplementationStatuses ? (
              <MotionDiv
                {...revealProps(0.16)}
                className="flex flex-wrap items-center gap-2.5"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Implemented
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-500/10 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Planned / In Progress
                </span>
              </MotionDiv>
            ) : null}
          </div>

          {cs.solution.ecosystemDiagram ? (
            <MotionDiv
              {...revealProps(0.18)}
              className="mt-10 rounded-3xl border border-white/12 bg-slate-900/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_70px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:mt-12 sm:p-8 lg:p-10"
            >
              <div className="mx-auto flex max-w-4xl flex-col items-center">
                {/* Top: APEXBUILD PLATFORM */}
                <div className="w-full max-w-md rounded-2xl border border-blue-400/35 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 px-5 py-4 text-center shadow-[0_14px_35px_rgba(59,130,246,0.16)]">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-blue-200">
                    Shared Multi-Vertical Foundation
                  </p>
                  <h3 className="mt-1 font-sans text-lg font-extrabold tracking-tight text-white sm:text-xl">
                    {cs.solution.ecosystemDiagram.platformTitle}
                  </h3>
                </div>

                <div className="my-2 flex flex-col items-center" aria-hidden="true">
                  <div className="h-4 w-px bg-gradient-to-b from-blue-400/70 to-indigo-400/70" />
                  <ArrowDown className="h-4 w-4 text-blue-300" />
                </div>

                {/* Below: SUPERADMIN CONTROL TOWER */}
                <div className="w-full max-w-lg rounded-2xl border border-indigo-400/30 bg-slate-950/90 px-5 py-4 text-center">
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
                    {cs.solution.ecosystemDiagram.controlTowerTitle}
                  </p>
                </div>

                <div className="my-2 flex w-full flex-col items-center" aria-hidden="true">
                  <div className="h-4 w-px bg-gradient-to-b from-indigo-400/70 to-purple-400/70" />
                  <div className="hidden w-[76%] border-t border-indigo-400/35 lg:block" />
                  <ArrowDown className="h-4 w-4 text-purple-300" />
                </div>

                {/* 4 Specialized Operating Systems */}
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {cs.solution.ecosystemDiagram.systems.map((sys) => {
                    const IconComponent = iconMap[sys.icon] || Layers;
                    return (
                      <div
                        key={sys.title}
                        className="flex flex-col justify-between rounded-2xl border border-white/12 bg-slate-950/85 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-blue-300">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-sans text-xs font-bold tracking-[0.16em] text-slate-400">
                              {sys.number}
                            </span>
                          </div>
                          <h4 className="mt-4 font-sans text-base font-bold text-white sm:text-lg">
                            {sys.title}
                          </h4>
                          <p className="mt-2 text-xs leading-relaxed text-slate-300/90 sm:text-sm">
                            {sys.description}
                          </p>
                        </div>
                        <div className="mt-4 border-t border-white/[0.08] pt-3">
                          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                            Status
                          </p>
                          <span
                            className={`mt-1.5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-sans text-xs font-semibold ${
                              sys.completed
                                ? 'border-emerald-400/25 bg-emerald-500/10 text-emerald-300'
                                : 'border-blue-400/25 bg-blue-500/10 text-blue-200'
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                sys.completed ? 'bg-emerald-400' : 'bg-blue-400'
                              }`}
                            />
                            {sys.status}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </MotionDiv>
          ) : (
            <div
              className={`mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 ${
                cs.solution.modules.length === 6
                  ? 'lg:grid-cols-3'
                  : 'lg:grid-cols-3 xl:grid-cols-4'
              }`}
            >
              {cs.solution.modules.map((mod, index) => {
                const IconComponent = iconMap[mod.icon] || Layers;
                const isLastModule =
                  cs.solution.modules.length !== 6 &&
                  index === cs.solution.modules.length - 1;
                const isPlanned =
                  mod.status === 'PLANNED / IN PROGRESS' ||
                  mod.status === 'IN PROGRESS' ||
                  mod.status === 'PLANNED';
                const isArchitectureBadge =
                  mod.status === 'CORE ARCHITECTURE' || mod.status === 'VERTICAL MODULE';

                return (
                  <MotionDiv
                    key={mod.title}
                    {...revealProps(0.06 + index * 0.05)}
                    whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                    className={`group flex flex-col justify-between rounded-2xl border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_18px_45px_rgba(2,6,23,0.4)] backdrop-blur-xl transition-colors duration-300 sm:p-6 ${
                      isLastModule
                        ? 'border-blue-400/25 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-indigo-950/35 sm:col-span-2 lg:col-span-3 xl:col-span-2'
                        : 'border-white/10 bg-slate-900/70 hover:border-blue-400/30 hover:bg-slate-900/85'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-blue-300">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex items-center gap-2">
                          {mod.status ? (
                            <span
                              className={`rounded-full border px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider ${
                                isPlanned
                                  ? 'border-amber-400/25 bg-amber-500/10 text-amber-300'
                                  : isArchitectureBadge
                                    ? 'border-blue-400/25 bg-blue-500/10 text-blue-200'
                                    : 'border-emerald-400/25 bg-emerald-500/10 text-emerald-300'
                              }`}
                            >
                              {mod.status}
                            </span>
                          ) : null}
                          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-sans text-xs font-bold tracking-[0.16em] text-slate-400">
                            {mod.number}
                          </span>
                        </div>
                      </div>
                      <h3 className="mt-4 font-sans text-base font-bold text-white sm:text-lg">
                        {mod.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                        {mod.description}
                      </p>
                    </div>
                  </MotionDiv>
                );
              })}
            </div>
          )}
        </section>

        {/* ==================================================
            OPTIONAL SECTION 4: SUPERADMIN CONTROL TOWER (APEXBUILD)
           ================================================== */}
        {cs.controlTowerSection ? (
          <section
            aria-labelledby="control-tower-heading"
            className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
          >
            <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
              <div>
                <MotionDiv {...revealProps(0)}>
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                      aria-hidden="true"
                    />
                    <span>{cs.controlTowerSection.label}</span>
                  </div>
                </MotionDiv>

                <MotionDiv {...revealProps(0.08)}>
                  <h2
                    id="control-tower-heading"
                    className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.5rem]"
                  >
                    <span className="block">{cs.controlTowerSection.headline.line1}</span>
                    <span className="mt-1 block">
                      <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {cs.controlTowerSection.headline.highlight}
                      </span>
                      <span className="text-white">.</span>
                    </span>
                  </h2>
                </MotionDiv>

                <MotionDiv {...revealProps(0.14)}>
                  <p className="mt-4 text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-5 sm:text-base sm:leading-8">
                    {cs.controlTowerSection.intro}
                  </p>
                </MotionDiv>

                <MotionDiv {...revealProps(0.18)} className="mt-6">
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Control Layer Responsibilities
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cs.controlTowerSection.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-xl border border-blue-400/20 bg-blue-500/[0.09] px-3.5 py-1.5 font-sans text-xs font-semibold text-blue-100"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </MotionDiv>
              </div>

              {/* Sanitized Dashboard Visualization of /superadmin/business-accounts */}
              <MotionDiv
                {...revealProps(0.16)}
                className="overflow-hidden rounded-2xl border border-white/12 bg-slate-950/90 shadow-[0_24px_60px_rgba(2,6,23,0.65)] sm:rounded-3xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-slate-900/90 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                    <span className="ml-2 font-mono text-xs font-semibold text-blue-300">
                      {cs.controlTowerSection.routePath}
                    </span>
                  </div>
                  <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-blue-200">
                    Superadmin Control Tower
                  </span>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
                    <div>
                      <p className="font-sans text-sm font-bold text-white">
                        Business Accounts & Ecosystem Access (Sanitized View)
                      </p>
                      <p className="text-xs text-slate-400">
                        Centralized management of business accounts, subscriptions, pricing & vertical access
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 divide-y divide-white/[0.06]">
                    {cs.controlTowerSection.sanitizedAccounts.map((acc) => (
                      <div
                        key={acc.accountCode}
                        className="flex flex-wrap items-center justify-between gap-2 py-3 text-xs"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] font-bold text-blue-300">
                              {acc.accountCode}
                            </span>
                            <p className="truncate font-sans font-semibold text-slate-200">
                              {acc.businessType}
                            </p>
                          </div>
                          <p className="mt-0.5 text-[11px] text-slate-400">
                            {acc.planTier}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {acc.accessState}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            </div>
          </section>
        ) : null}

        {/* ==================================================
            OPTIONAL SECTION: PRODUCT / USER FLOW (TRAVEL PLATFORM)
           ================================================== */}
        {cs.userFlow ? (
          <section
            aria-labelledby="product-flow-heading"
            className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
          >
            <div className="max-w-3xl">
              <MotionDiv {...revealProps(0)}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    aria-hidden="true"
                  />
                  <span>{cs.userFlow.label}</span>
                </div>
              </MotionDiv>

              <MotionDiv {...revealProps(0.08)}>
                <h2
                  id="product-flow-heading"
                  className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.65rem]"
                >
                  <span className="block">{cs.userFlow.headline.line1}</span>
                  <span className="mt-1 block">
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {cs.userFlow.headline.highlight}
                    </span>
                    <span className="text-white">.</span>
                  </span>
                </h2>
              </MotionDiv>

              <MotionDiv {...revealProps(0.14)}>
                <p className="mt-4 text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-5 sm:text-lg sm:leading-8">
                  {cs.userFlow.intro}
                </p>
              </MotionDiv>
            </div>

            <div className="mt-10 rounded-3xl border border-white/12 bg-slate-900/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_70px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:mt-12 sm:p-8">
              <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-7">
                {cs.userFlow.steps.map((stepItem, index) => {
                  const isLastStep = index === cs.userFlow.steps.length - 1;
                  return (
                    <MotionDiv
                      key={stepItem.step}
                      {...revealProps(0.05 + index * 0.05)}
                      className="flex flex-col items-center lg:items-stretch"
                    >
                      <div className="flex h-full w-full flex-col justify-between rounded-2xl border border-white/12 bg-slate-950/85 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-500/15 font-sans text-xs font-bold text-blue-300">
                              {stepItem.step}
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-sans text-[10px] font-semibold text-slate-400">
                              {stepItem.surface}
                            </span>
                          </div>
                          <h3 className="mt-3 font-sans text-sm font-bold text-white">
                            {stepItem.title}
                          </h3>
                          <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                            {stepItem.detail}
                          </p>
                        </div>
                      </div>

                      {!isLastStep ? (
                        <div
                          className="my-1.5 flex flex-col items-center lg:hidden"
                          aria-hidden="true"
                        >
                          <ArrowDown className="h-4 w-4 text-blue-300/80" />
                        </div>
                      ) : null}
                    </MotionDiv>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        {/* ==================================================
            MY CONTRIBUTION (FOR ERP & TRAVEL CASE STUDIES)
           ================================================== */}
        {!isSaasEcosystem ? (
          <section
            aria-labelledby="contribution-heading"
            className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
          >
            <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-16">
              <div>
                <MotionDiv {...revealProps(0)}>
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                      aria-hidden="true"
                    />
                    <span>{cs.contributions.label}</span>
                  </div>
                </MotionDiv>

                <MotionDiv {...revealProps(0.08)}>
                  <h2
                    id="contribution-heading"
                    className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.5rem]"
                  >
                    <span className="block">{cs.contributions.headline.line1}</span>
                    <span className="mt-1 block">
                      <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {cs.contributions.headline.highlight}
                      </span>
                      <span className="text-white">.</span>
                    </span>
                  </h2>
                </MotionDiv>

                <MotionDiv {...revealProps(0.14)}>
                  <p className="mt-4 text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-5 sm:text-base sm:leading-8">
                    {cs.contributions.intro}
                  </p>
                </MotionDiv>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {cs.contributions.items.map((item, index) => (
                  <MotionDiv
                    key={item.text}
                    {...revealProps(0.06 + index * 0.05)}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/75 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_40px_rgba(2,6,23,0.4)] backdrop-blur-xl sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300/90">
                        {item.area}
                      </span>
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                    </div>
                    <p className="mt-2.5 font-sans text-sm font-semibold leading-relaxed text-slate-100 sm:text-[15px]">
                      {item.text}
                    </p>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ==================================================
            SECTION 5 / 6: SYSTEM / PRODUCT ARCHITECTURE
           ================================================== */}
        <section
          id="platform-architecture"
          aria-labelledby="architecture-heading"
          className="mt-20 scroll-mt-24 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
        >
          <div className="max-w-3xl">
            <MotionDiv {...revealProps(0)}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  aria-hidden="true"
                />
                <span>{cs.architecture.label}</span>
              </div>
            </MotionDiv>

            <MotionDiv {...revealProps(0.08)}>
              <h2
                id="architecture-heading"
                className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.65rem]"
              >
                <span className="block">{cs.architecture.headline.line1}</span>
                <span className="mt-1 block">
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {cs.architecture.headline.highlight}
                  </span>
                  <span className="text-white">.</span>
                </span>
              </h2>
            </MotionDiv>

            <MotionDiv {...revealProps(0.14)}>
              <p className="mt-4 text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-5 sm:text-lg sm:leading-8">
                {cs.architecture.intro}
              </p>
            </MotionDiv>
          </div>

          {/* Visual Architecture Diagram */}
          <MotionDiv
            {...revealProps(0.18)}
            className="mt-10 rounded-3xl border border-white/12 bg-slate-900/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_70px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:mt-12 sm:p-8 lg:p-10"
          >
            {cs.architecture.diagramType === 'dual-surface-mern' ? (
              <DualSurfaceArchitectureDiagram architecture={cs.architecture} />
            ) : cs.architecture.diagramType === 'multi-vertical-saas' ? (
              <MultiVerticalArchitectureDiagram architecture={cs.architecture} />
            ) : (
              <div className="mx-auto max-w-4xl">
                {cs.architecture.layers.map((layer, index) => {
                  const isLast = index === cs.architecture.layers.length - 1;
                  const hasDomainModules = Boolean(layer.modules);

                  return (
                    <div key={layer.step} className="flex flex-col items-center">
                      <div
                        className={`w-full rounded-2xl border p-4 transition-colors sm:p-5 ${
                          hasDomainModules
                            ? 'border-blue-400/30 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 shadow-[0_14px_35px_rgba(59,130,246,0.15)]'
                            : 'border-white/12 bg-slate-950/80'
                        }`}
                      >
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                          <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/15 font-sans text-xs font-bold text-blue-200">
                              {layer.step}
                            </span>
                            <div>
                              <h3 className="font-sans text-base font-bold text-white sm:text-lg">
                                {layer.title}
                              </h3>
                              <p className="font-sans text-xs font-semibold text-blue-300/90">
                                {layer.subtitle}
                              </p>
                            </div>
                          </div>
                          <p className="text-xs text-slate-400 sm:text-right">
                            {layer.detail}
                          </p>
                        </div>

                        {hasDomainModules ? (
                          <div className="mt-4 border-t border-white/10 pt-4">
                            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200/80">
                              Connected Application Modules
                            </p>
                            <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
                              {layer.modules.map((domain) => (
                                <div
                                  key={domain}
                                  className="rounded-xl border border-white/14 bg-slate-950/85 px-3 py-2 text-center font-sans text-xs font-bold text-white shadow-sm"
                                >
                                  {domain}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>

                      {!isLast ? (
                        <div className="my-1.5 flex flex-col items-center" aria-hidden="true">
                          <div className="h-3.5 w-px bg-gradient-to-b from-blue-400/60 to-purple-400/60" />
                          <ArrowDown className="h-4 w-4 text-blue-300/80" />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            )}
          </MotionDiv>
        </section>

        {/* ==================================================
            OPTIONAL SECTION 6: THE OPERATING SYSTEMS (APEXBUILD)
           ================================================== */}
        {cs.operatingSystemsSection ? (
          <section
            aria-labelledby="operating-systems-heading"
            className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
          >
            <div className="max-w-3xl">
              <MotionDiv {...revealProps(0)}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    aria-hidden="true"
                  />
                  <span>{cs.operatingSystemsSection.label}</span>
                </div>
              </MotionDiv>

              <MotionDiv {...revealProps(0.08)}>
                <h2
                  id="operating-systems-heading"
                  className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.65rem]"
                >
                  <span className="block">{cs.operatingSystemsSection.headline.line1}</span>
                  <span className="mt-1 block">
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {cs.operatingSystemsSection.headline.highlight}
                    </span>
                    <span className="text-white">.</span>
                  </span>
                </h2>
              </MotionDiv>

              <MotionDiv {...revealProps(0.14)}>
                <p className="mt-4 text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-5 sm:text-lg sm:leading-8">
                  {cs.operatingSystemsSection.intro}
                </p>
              </MotionDiv>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2">
              {cs.operatingSystemsSection.items.map((osItem, index) => {
                const IconComponent = iconMap[osItem.icon] || Layers;
                return (
                  <MotionDiv
                    key={osItem.name}
                    {...revealProps(0.06 + index * 0.06)}
                    whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-colors hover:border-blue-400/30 sm:rounded-3xl sm:p-7"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-blue-300">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span
                          className={`rounded-full border px-3 py-1 font-sans text-xs font-semibold ${
                            osItem.completed
                              ? 'border-emerald-400/25 bg-emerald-500/10 text-emerald-300'
                              : 'border-blue-400/25 bg-blue-500/10 text-blue-200'
                          }`}
                        >
                          {osItem.status}
                        </span>
                      </div>

                      <h3 className="mt-5 font-sans text-xl font-bold text-white sm:text-2xl">
                        {osItem.name}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-300/90 sm:text-base">
                        {osItem.focus}
                      </p>
                    </div>
                  </MotionDiv>
                );
              })}
            </div>
          </section>
        ) : null}

        {/* ==================================================
            SECTION 7: MY CONTRIBUTION (APEXBUILD)
           ================================================== */}
        {isSaasEcosystem ? (
          <section
            aria-labelledby="contribution-heading-saas"
            className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
          >
            <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-16">
              <div>
                <MotionDiv {...revealProps(0)}>
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                      aria-hidden="true"
                    />
                    <span>{cs.contributions.label}</span>
                  </div>
                </MotionDiv>

                <MotionDiv {...revealProps(0.08)}>
                  <h2
                    id="contribution-heading-saas"
                    className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.5rem]"
                  >
                    <span className="block">{cs.contributions.headline.line1}</span>
                    <span className="mt-1 block">
                      <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {cs.contributions.headline.highlight}
                      </span>
                      <span className="text-white">.</span>
                    </span>
                  </h2>
                </MotionDiv>

                <MotionDiv {...revealProps(0.14)}>
                  <p className="mt-4 text-[0.975rem] leading-relaxed text-slate-300/90 sm:mt-5 sm:text-base sm:leading-8">
                    {cs.contributions.intro}
                  </p>
                </MotionDiv>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {cs.contributions.items.map((item, index) => (
                  <MotionDiv
                    key={item.text}
                    {...revealProps(0.06 + index * 0.05)}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/75 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_40px_rgba(2,6,23,0.4)] backdrop-blur-xl sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300/90">
                        {item.area}
                      </span>
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                    </div>
                    <p className="mt-2.5 font-sans text-sm font-semibold leading-relaxed text-slate-100 sm:text-[15px]">
                      {item.text}
                    </p>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ==================================================
            SECTION 6 / 7: KEY ENGINEERING AREAS / CHALLENGES
           ================================================== */}
        <section
          aria-labelledby="engineering-focus-heading"
          className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
        >
          <div className="max-w-3xl">
            <MotionDiv {...revealProps(0)}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  aria-hidden="true"
                />
                <span>{cs.engineeringFocus.label}</span>
              </div>
            </MotionDiv>

            <MotionDiv {...revealProps(0.08)}>
              <h2
                id="engineering-focus-heading"
                className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.65rem]"
              >
                <span className="block">{cs.engineeringFocus.headline.line1}</span>
                <span className="mt-1 block">
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {cs.engineeringFocus.headline.highlight}
                  </span>
                  <span className="text-white">.</span>
                </span>
              </h2>
            </MotionDiv>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2">
            {cs.engineeringFocus.cards.map((card, index) => {
              const IconComponent = iconMap[card.icon] || ShieldCheck;
              return (
                <MotionDiv
                  key={card.title}
                  {...revealProps(0.08 + index * 0.06)}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className="rounded-2xl border border-white/10 bg-slate-900/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-colors hover:border-blue-400/30 sm:rounded-3xl sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-blue-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans text-lg font-bold text-white sm:text-xl">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300/90 sm:text-[15px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </section>

        {/* ==================================================
            SECTION 7 / 8: TECHNOLOGY STACK
           ================================================== */}
        <section
          aria-labelledby="tech-stack-heading"
          className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
        >
          <div className="max-w-3xl">
            <MotionDiv {...revealProps(0)}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  aria-hidden="true"
                />
                <span>{cs.techStackGroups.label}</span>
              </div>
            </MotionDiv>

            <MotionDiv {...revealProps(0.08)}>
              <h2
                id="tech-stack-heading"
                className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.65rem]"
              >
                <span className="block">{cs.techStackGroups.headline.line1}</span>
                <span className="mt-1 block">
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {cs.techStackGroups.headline.highlight}
                  </span>
                  <span className="text-white">.</span>
                </span>
              </h2>
            </MotionDiv>
          </div>

          <div
            className={`mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 ${
              cs.techStackGroups.groups.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-5'
            }`}
          >
            {cs.techStackGroups.groups.map((group, index) => (
              <MotionDiv
                key={group.category}
                {...revealProps(0.06 + index * 0.05)}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_40px_rgba(2,6,23,0.4)] backdrop-blur-xl"
              >
                <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 font-sans text-xs font-semibold text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>
        </section>

        {/* ==================================================
            SECTION 8 / 9 / 10: KEY LEARNINGS
           ================================================== */}
        <section
          aria-labelledby="learnings-heading"
          className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-16">
            <div>
              <MotionDiv {...revealProps(0)}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    aria-hidden="true"
                  />
                  <span>{cs.learnings.label}</span>
                </div>
              </MotionDiv>

              <MotionDiv {...revealProps(0.08)}>
                <h2
                  id="learnings-heading"
                  className="mt-5 font-sans text-2xl font-extrabold leading-[1.14] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.5rem]"
                >
                  <span className="block">{cs.learnings.headline.line1}</span>
                  <span className="mt-1 block">
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {cs.learnings.headline.highlight}
                    </span>
                    <span className="text-white">.</span>
                  </span>
                </h2>
              </MotionDiv>
            </div>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {cs.learnings.items.map((insight, index) => (
                <MotionDiv
                  key={insight}
                  {...revealProps(0.06 + index * 0.05)}
                  className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_40px_rgba(2,6,23,0.4)] backdrop-blur-xl sm:p-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-500/15 font-sans text-xs font-bold text-blue-300">
                    0{index + 1}
                  </span>
                  <p className="font-sans text-sm font-semibold leading-relaxed text-slate-200 sm:text-[15px]">
                    {insight}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            OPTIONAL SECTION 10 / 11: PROJECT STATUS
           ================================================== */}
        {cs.projectStatus ? (
          <section
            aria-labelledby="project-status-heading"
            className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20"
          >
            <MotionDiv
              {...revealProps(0.08)}
              className="rounded-3xl border border-white/12 bg-slate-900/75 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_60px_rgba(2,6,23,0.5)] backdrop-blur-xl sm:p-8 lg:p-10"
            >
              <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
                <div>
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                      aria-hidden="true"
                    />
                    <span>{cs.projectStatus.label}</span>
                  </div>

                  <h2
                    id="project-status-heading"
                    className="mt-5 font-sans text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl"
                  >
                    {cs.projectStatus.headline}
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300/90 sm:text-base sm:leading-7">
                    {cs.projectStatus.description}
                  </p>
                </div>

                {cs.projectStatus.verticalStatuses ? (
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {cs.projectStatus.verticalStatuses.map((vs) => (
                      <div
                        key={vs.name}
                        className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/80 p-4 sm:p-5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-sans text-base font-bold text-white">
                            {vs.name}
                          </p>
                          {vs.completed ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          ) : (
                            <Clock className="h-4 w-4 text-blue-300" />
                          )}
                        </div>
                        <span
                          className={`mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 font-sans text-xs font-semibold ${
                            vs.completed
                              ? 'border-emerald-400/25 bg-emerald-500/10 text-emerald-300'
                              : 'border-blue-400/25 bg-blue-500/10 text-blue-200'
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              vs.completed ? 'bg-emerald-400' : 'bg-blue-400'
                            }`}
                          />
                          {vs.status}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-emerald-400/20 bg-slate-950/75 p-5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                          Implemented
                        </p>
                      </div>
                      <ul className="mt-3.5 space-y-2.5">
                        {cs.projectStatus.implementedSummary.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-200 sm:text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-amber-400/20 bg-slate-950/75 p-5">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-amber-400" />
                        <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                          Planned / In Progress
                        </p>
                      </div>
                      <ul className="mt-3.5 space-y-2.5">
                        {cs.projectStatus.inProgressSummary.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-200 sm:text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </MotionDiv>
          </section>
        ) : null}

        {/* ==================================================
            FINAL SECTION: PROJECT NAVIGATION & FINAL CTA
           ================================================== */}
        <section
          aria-labelledby="next-project-heading"
          className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20"
        >
          <MotionDiv
            {...revealProps(0.08)}
            className="relative overflow-hidden rounded-3xl border border-blue-400/25 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-indigo-950/35 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_28px_70px_rgba(2,6,23,0.6)] backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                  Continue Exploring
                </p>
                <h2
                  id="next-project-heading"
                  className="mt-2 font-sans text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
                >
                  Explore more work.
                </h2>
                {project.finalContactCta ? (
                  <p className="mt-2 text-sm font-medium text-slate-300 sm:text-base">
                    {project.finalContactCta.prompt}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
                {prevProject ? (
                  <Link
                    to={`/projects/${prevProject.slug}`}
                    className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-slate-100 transition-all hover:border-blue-400/35 hover:bg-white/[0.1] hover:text-white sm:w-auto"
                  >
                    <ArrowLeft className="h-4 w-4 text-blue-300 transition-transform duration-300 group-hover:-translate-x-0.5" />
                    <span>Previous: {prevProject.title}</span>
                  </Link>
                ) : null}

                <Link
                  to="/#projects"
                  className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-slate-100 transition-all hover:border-white/25 hover:bg-white/[0.1] hover:text-white sm:w-auto"
                >
                  {!prevProject ? (
                    <ArrowLeft className="h-4 w-4 text-blue-300 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  ) : null}
                  <span>Back to Projects</span>
                </Link>

                {project.finalContactCta ? (
                  <Link
                    to={project.finalContactCta.href}
                    className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_-6px_rgba(79,70,229,0.5)] transition-all hover:from-blue-400 hover:via-indigo-500 hover:to-purple-500 sm:w-auto"
                  >
                    <span>{project.finalContactCta.buttonLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <Link
                    to={`/projects/${nextProject.slug}`}
                    className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_-6px_rgba(79,70,229,0.5)] transition-all hover:from-blue-400 hover:via-indigo-500 hover:to-purple-500 sm:w-auto"
                  >
                    <span>Next Project: {nextProject.title}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </div>
          </MotionDiv>
        </section>
      </Container>
    </article>
  );
}

export default ProjectDetailPage;
