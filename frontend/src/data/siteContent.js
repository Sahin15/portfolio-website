export const siteIdentity = {
  name: 'Sahin Mondal',
  role: 'Senior Software Engineer',
  specialization: 'Full Stack Developer',
  label: 'Senior Software Engineer Portfolio',
  monogram: 'SM',
  email: 'sahinmondal7@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/sahinmondal7',
  githubUrl: 'https://github.com/Sahin15',
  resumeUrl: '/resume.pdf',
  resumeDownloadName: 'Sahin_Mondal_Senior_Software_Engineer_Resume.pdf',
  footerNote: 'Building production business applications with React.js, Node.js, Express.js and MongoDB.',
};

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  badge: 'Senior Software Engineer',
  greeting: 'Hi, I’m',
  headline: {
    line1: 'Building reliable',
    highlight: 'business software.',
  },
  description:
    'Full Stack Developer focused on building production business applications, ERP, CRM, HRMS, dashboards and full-stack web applications using React.js, JavaScript, Node.js, Express.js and MongoDB.',
  ctas: {
    primary: {
      label: 'View My Work',
      href: '#projects',
    },
    secondary: {
      label: 'GitHub',
      href: 'https://github.com/Sahin15',
    },
    tertiary: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sahinmondal7',
    },
  },
  floatingCards: [
    {
      id: 'erp-hrms',
      title: 'ERP & HRMS',
      subtitle: 'Employees, Attendance, Salary',
      icon: 'Users',
    },
    {
      id: 'crm-platforms',
      title: 'CRM & Dashboards',
      subtitle: 'Leads, Workflows, Reporting',
      icon: 'BarChart3',
    },
    {
      id: 'saas-apps',
      title: 'Full-Stack Web Apps',
      subtitle: 'React.js, REST APIs, MongoDB',
      icon: 'Layers',
    },
  ],
  snapshotItems: [
    {
      id: 'location',
      title: 'Kolkata, India',
      subtitle: null,
      icon: 'MapPin',
    },
    {
      id: 'role',
      title: 'Senior Software Engineer',
      subtitle: 'Full Stack Developer',
      icon: 'Briefcase',
    },
    {
      id: 'software',
      title: 'Business Applications',
      subtitle: 'ERP, CRM, HRMS & Dashboards',
      icon: 'Monitor',
    },
    {
      id: 'stack',
      title: 'Core Stack',
      subtitle: 'React.js · Node.js · Express.js · MongoDB',
      icon: 'Layers',
    },
  ],
};

export const aboutContent = {
  eyebrow: 'ABOUT ME',
  headline: {
    line1: 'Building software that solves',
    highlight: 'real business problems',
  },
  paragraphs: [
    'I am a Senior Software Engineer and Full Stack Developer with 2+ years of professional software development experience, building and maintaining production business applications that help teams manage everyday operations.',
    'My work spans enterprise ERP and CRM applications, REST APIs, dashboards and e-commerce applications—from responsive React.js interfaces to Node.js and Express.js APIs, MongoDB database operations, production debugging and application maintenance.',
  ],
  workflowSteps: ['Requirements', 'Architecture', 'Development', 'Deployment'],
  pillars: [
    {
      number: '01',
      title: 'Business Platforms',
      body: 'ERP, CRM, HRMS modules and internal tools structured around real operational workflows.',
      icon: 'Building2',
    },
    {
      number: '02',
      title: 'Full Stack Development',
      body: 'Application development across React.js, Node.js, Express.js and MongoDB.',
      icon: 'Code2',
    },
    {
      number: '03',
      title: 'Production Delivery',
      body: 'Taking features from business requirements through development, deployment, debugging and maintenance.',
      icon: 'Rocket',
    },
  ],
};

export const journeyHeader = {
  eyebrow: 'CAREER JOURNEY',
  headline: {
    line1: 'From engineering fundamentals',
    line2: 'and field execution',
    highlight: 'to full-stack software development',
  },
  description:
    'My background in civil engineering shaped how I approach complex systems: understand the requirements, plan the structure and execute reliably. Today, I apply that discipline as a Senior Software Engineer building business software.',
  progressionArc: [
    'Engineering Foundation',
    'Project Execution',
    'Software Transition',
    'Frontend Development',
    'Senior Software Engineer',
  ],
};

export const journeyTimeline = [
  {
    stage: '01',
    year: '2015 – 2019',
    phase: 'Engineering Foundation',
    title: 'B.Tech in Civil Engineering',
    organization: 'Aliah University',
    description:
      'Built a foundation in analytical problem-solving, project planning and structured execution.',
    focus: [],
    variant: 'foundation',
    icon: 'Compass',
  },
  {
    stage: '02',
    year: '2019 – 2023',
    phase: 'Project Execution',
    title: 'Site Engineer & Civil Site Engineer',
    organization: 'Asoka Projects Pvt. Ltd. · Vega Power Pvt. Ltd.',
    description:
      'Supervised construction activities, coordinated contractors and project stakeholders, monitored progress and resources, and prepared project reports and schedules.',
    focus: [
      'Project Coordination',
      'Planning & Scheduling',
      'Site Supervision',
      'Reporting',
      'Stakeholder Coordination',
    ],
    variant: 'foundation',
    icon: 'HardHat',
  },
  {
    stage: '03',
    year: '2023 – 2024',
    phase: 'Career Pivot',
    title: 'Transition into Software Development',
    organization: 'JavaScript & Web Development',
    description:
      'Transitioned into software development, focusing on JavaScript, React.js, Node.js, Express.js and MongoDB to build web applications.',
    focus: ['JavaScript', 'React.js', 'Node.js & Express.js', 'MongoDB'],
    variant: 'transition',
    icon: 'GitBranch',
  },
  {
    stage: '04',
    year: 'Jan 2024 – Jul 2025',
    phase: 'Frontend Development',
    title: 'Frontend Developer',
    organization: 'G4GAME.IN',
    description:
      'Developed responsive web applications with React.js, JavaScript, Tailwind CSS and Bootstrap, integrating REST APIs and working with MongoDB-based backends.',
    focus: [
      'React.js',
      'Tailwind CSS',
      'REST API Integration',
      'Performance',
      'Cross-Browser Testing',
    ],
    variant: 'software',
    icon: 'Code2',
  },
  {
    stage: '05',
    year: 'Oct 2025 – Present',
    phase: 'Current Role',
    title: 'Senior Software Engineer',
    organization: 'We Alll',
    isCurrent: true,
    description:
      'Joined We Alll as a Full Stack Developer in October 2025 and moved into the Senior Software Engineer role in April 2026, developing and maintaining enterprise ERP and CRM applications.',
    focus: [
      'Full Stack Development',
      'ERP & CRM',
      'REST APIs',
      'Dashboards',
      'React Native',
      'Production Support',
    ],
    variant: 'current',
    icon: 'Layers',
  },
];

export const experienceHeader = {
  eyebrow: 'EXPERIENCE',
  headline: {
    line1: 'Building, shipping and',
    highlight: 'maintaining production software',
  },
  description:
    '2+ years of professional software development experience across enterprise ERP and CRM applications, business dashboards and responsive web applications.',
};

export const experienceItems = [
  {
    id: 'wealll-senior-se',
    company: 'We Alll',
    role: 'Senior Software Engineer',
    duration: 'Apr 2026 – Present',
    isCurrent: true,
    description:
      'Developing and maintaining enterprise ERP and CRM applications that support internal business operations and employee workflows.',
    achievements: [
      'Building responsive dashboards and business interfaces using React.js and reusable components',
      'Developing backend services and REST APIs using Node.js, Express.js and JavaScript',
      'Designing and managing MongoDB data structures, database operations and application-level business logic',
      'Developing modules for employee management, attendance, salary processing, asset management, reimbursement, CRM workflows, dashboards and operational reporting',
      'Contributing to React Native development to extend internal business workflows to mobile',
      'Investigating and resolving production issues to improve application reliability and performance',
      'Working with business teams to translate operational workflows into practical software features',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'React Native',
    ],
  },
  {
    id: 'wealll-full-stack-dev',
    company: 'We Alll',
    role: 'Full Stack Developer',
    duration: 'Oct 2025 – Mar 2026',
    isCurrent: false,
    description:
      'Developed and maintained full-stack business applications using React.js, Node.js, Express.js, JavaScript and MongoDB.',
    achievements: [
      'Built reusable React components and responsive interfaces for internal business applications',
      'Developed and integrated REST APIs to support application workflows and data processing',
      'Worked with MongoDB for database operations, data management and business logic',
      'Integrated frontend applications with backend services to deliver end-to-end business features',
      'Debugged application issues and supported production maintenance and feature improvements',
      'Deployed and maintained applications on Hostinger-based infrastructure',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Hostinger',
    ],
  },
  {
    id: 'g4game-frontend-dev',
    company: 'G4GAME.IN',
    role: 'Frontend Developer',
    duration: 'Jan 2024 – Jul 2025',
    isCurrent: false,
    description:
      'Developed responsive web applications using React.js, JavaScript, Tailwind CSS and Bootstrap.',
    achievements: [
      'Built reusable React components and integrated REST APIs for dynamic, data-driven features',
      'Worked with backend APIs and MongoDB-based applications to support end-to-end feature development',
      'Improved frontend performance through component structure, code optimization and efficient rendering',
      'Performed debugging, testing and cross-browser compatibility checks',
      'Used Git and GitHub for source control and collaborative development',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Bootstrap',
      'REST APIs',
      'Git & GitHub',
    ],
  },
];

export const projectsHeader = {
  eyebrow: 'SELECTED WORK',
  headline: {
    line1: 'Building software for',
    highlight: 'real business operations',
  },
  description:
    'Three full-stack case studies covering internal ERP/HRMS/CRM software, a customer-facing travel and CRM platform, and a multi-vertical SaaS ecosystem.',
};

export const projects = [
  {
    slug: 'business-management-platform',
    number: '01',
    featured: true,
    title: 'Business Management Platform',
    category: 'ERP · HRMS · CRM',
    capabilityLabel: 'Core Modules',
    description:
      'An internal business platform built to manage employee records, attendance, leave requests, CRM leads, tasks and company assets in one role-based system.',
    technicalFocus:
      'Developed React.js interfaces, Node.js and Express.js REST APIs, MongoDB schemas, JWT authentication and Role-Based Access Control across core operational modules.',
    businessImpact:
      'Brought employee records, attendance, leave approvals, CRM leads and asset tracking into a single role-based platform instead of disconnected spreadsheets.',
    capabilities: [
      'Employee Management',
      'Attendance & Leave',
      'Payroll Workflows (In Progress)',
      'CRM & Lead Management',
      'Project & Work Management',
      'Asset Management',
      'Role-Based Access Control',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    role: 'Senior Software Engineer · Full Stack',
    visualType: 'erp-dashboard',
    links: { live: '', github: '' },
    nextProject: {
      title: 'Indian Tours & Travels',
      category: 'Travel Platform · CRM · Booking Management',
      slug: 'indian-tours-and-travels',
    },
    caseStudy: {
      heroLabel: 'CASE STUDY · ERP / HRMS / CRM',
      headline: {
        line1: 'Business Management',
        highlight: 'Platform',
      },
      heroDescription:
        'An integrated full-stack platform designed to organize internal operations across HR, attendance, payroll workflows, CRM, projects and company assets.',
      heroTags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Role-Based Access Control'],
      role: 'Senior Software Engineer (Full Stack)',
      gallery: {
        label: 'PRODUCT IN ACTION',
        headline: {
          line1: 'Sanitized interface views',
          highlight: 'across core platform modules',
        },
        description:
          'Clearly labeled, sanitized product previews based on the application interfaces across operations overview, employee management, attendance, CRM, payroll workflows and role-based access.',
        items: [
          {
            id: 'bmp-dashboard',
            title: 'Dashboard Overview',
            category: 'Operations Workspace · Implemented',
            badge: 'Implemented · Sanitized Preview',
            badgeTone: 'blue',
            size: 'featured',
            description:
              'A high-level overview of the business platform connecting HR, attendance, payroll workflows, CRM, projects and company assets.',
            alt: 'Sanitized Dashboard Overview interface of the Business Management Platform showing connected HR, attendance, payroll and CRM workspace panels',
            routePath: '/app/dashboard',
            accent: 'blue',
            metrics: [
              { label: 'Active Modules', value: 'HR · Attendance · CRM · Assets' },
              { label: 'Session Security', value: 'JWT + Role-Based Access' },
              { label: 'Data Layer', value: 'MongoDB Document Store' },
            ],
            rows: [
              { col1: 'Workforce & Department Directory', col2: 'HRMS Module', status: 'Implemented' },
              { col1: 'Daily Attendance & Leave Queue', col2: 'Attendance & Leave', status: 'Implemented' },
              { col1: 'Lead Pipeline & Asset Records', col2: 'CRM & Operations', status: 'Implemented' },
              { col1: 'Salary & Payroll Processing Workflows', col2: 'Payroll Module', status: 'In Progress' },
            ],
          },
          {
            id: 'bmp-employees',
            title: 'Employee Management',
            category: 'HRMS Module · Implemented',
            badge: 'Implemented · Sanitized Preview',
            badgeTone: 'blue',
            size: 'medium',
            description:
              'Employee records and workforce management interface with department, designation and role assignment.',
            alt: 'Sanitized Employee Management interface displaying structured workforce profiles, department filters and role scopes without personal employee data',
            routePath: '/app/hrms/employees',
            accent: 'indigo',
            metrics: [
              { label: 'Directory Scope', value: 'Departments & Designations' },
              { label: 'Access Policy', value: 'HR & Admin Protected' },
            ],
            rows: [
              { col1: 'EMP-104 · Engineering Department', col2: 'Full Stack Role', status: 'Active Profile' },
              { col1: 'EMP-108 · Operations Department', col2: 'Operations Coordinator', status: 'Active Profile' },
              { col1: 'EMP-115 · Finance & Admin', col2: 'Admin Role', status: 'Verified' },
            ],
          },
          {
            id: 'bmp-attendance',
            title: 'Attendance & Leave',
            category: 'Workforce Operations · Implemented',
            badge: 'Implemented · Sanitized Preview',
            badgeTone: 'blue',
            size: 'medium',
            description:
              'Attendance tracking, shift records and leave request approval workflows.',
            alt: 'Sanitized Attendance and Leave management interface showing daily check-in logs, shift schedules and leave approval statuses',
            routePath: '/app/attendance-leave',
            accent: 'purple',
            metrics: [
              { label: 'Module Scope', value: 'Attendance Logs & Leave Requests' },
              { label: 'Approval Flow', value: 'Manager → HR Review' },
            ],
            rows: [
              { col1: 'Daily Attendance Log · Shift A', col2: 'Check-In / Check-Out', status: 'Recorded' },
              { col1: 'Leave Request · Annual Leave', col2: 'Manager Approval', status: 'Approved' },
              { col1: 'Monthly Attendance Summary', col2: 'HRMS Records', status: 'Updated' },
            ],
          },
          {
            id: 'bmp-crm',
            title: 'CRM & Leads',
            category: 'Sales & Client Workflows · Implemented',
            badge: 'Implemented · Sanitized Preview',
            badgeTone: 'blue',
            size: 'standard',
            description:
              'Lead management, follow-up tracking and customer relationship workflow interface.',
            alt: 'Sanitized CRM and Lead Management interface displaying enquiry stages, assigned sales owners and follow-up schedules',
            routePath: '/app/crm/leads',
            accent: 'blue',
            metrics: [
              { label: 'Lead Stages', value: 'Enquiry → Qualified → Closed' },
              { label: 'Role Visibility', value: 'Sales & Admin Scope' },
            ],
            rows: [
              { col1: 'LEAD-402 · Business Account Enquiry', col2: 'Qualification Stage', status: 'Follow-up' },
              { col1: 'LEAD-409 · Service Proposal', col2: 'Proposal Stage', status: 'Active' },
            ],
          },
          {
            id: 'bmp-payroll',
            title: 'Payroll Workflows',
            category: 'Payroll Module · In Progress',
            badge: 'In Progress · Sanitized Preview',
            badgeTone: 'amber',
            size: 'standard',
            description:
              'Supporting salary structure configuration and attendance-linked payroll processing workflows.',
            alt: 'Sanitized Payroll workflow interface showing salary components and payroll processing records in development',
            routePath: '/app/payroll',
            accent: 'indigo',
            metrics: [
              { label: 'Module Status', value: 'Developing / In Progress' },
              { label: 'Access Control', value: 'Finance & Admin Scope' },
            ],
            rows: [
              { col1: 'Salary Structure & Component Setup', col2: 'Payroll Configuration', status: 'In Progress' },
              { col1: 'Attendance-Linked Payroll Records', col2: 'Payroll Workflow', status: 'Developing' },
            ],
          },
          {
            id: 'bmp-rbac',
            title: 'Access & Permissions',
            category: 'Security & RBAC · Implemented',
            badge: 'Implemented · Sanitized Preview',
            badgeTone: 'emerald',
            size: 'standard',
            description:
              'Role-Based Access Control governing route visibility and actions across organizational roles.',
            alt: 'Sanitized Role-Based Access Control matrix interface showing permission boundaries for Admin, HR, Finance and Employee roles',
            routePath: '/app/settings/roles-permissions',
            accent: 'purple',
            metrics: [
              { label: 'Auth Mechanism', value: 'JWT + Express Middleware' },
              { label: 'Access Scope', value: 'Role-Based Route Protection' },
            ],
            rows: [
              { col1: 'Administrator & HR Role Scope', col2: 'Workforce & System Config', status: 'Full Access' },
              { col1: 'Employee Role Scope', col2: 'Attendance, Leave & Tasks', status: 'Scoped' },
            ],
          },
        ],
      },
      challenge: {
        label: 'THE CHALLENGE',
        headline: {
          line1: 'Managing business operations',
          highlight: 'across disconnected workflows',
        },
        paragraphs: [
          'Internal business operations involve multiple connected workflows—employee management, attendance, leave approvals, payroll records, customer leads, project tasks and company assets.',
          'Handling these workflows across disconnected spreadsheets and separate tools creates fragmented records, manual handoffs and limited visibility.',
          'The goal was to bring these operational modules together into a single role-based web application.',
        ],
        painPoints: [
          {
            title: 'Fragmented Operational Data',
            detail: 'Employee records, attendance logs, payroll records and client leads stored in separate tools.',
          },
          {
            title: 'Repetitive Manual Handoffs',
            detail: 'Reconciling attendance, leave approvals and task records manually across teams.',
          },
          {
            title: 'Role & Access Boundaries',
            detail: 'Need for clear role-based visibility across HR, finance, sales and staff members.',
          },
        ],
      },
      solution: {
        label: 'THE SOLUTION',
        headline: {
          line1: 'One connected platform',
          highlight: 'for everyday operations',
        },
        intro:
          'The platform organizes internal workflows into role-aware application modules backed by a shared Node.js, Express.js and MongoDB backend.',
        modules: [
          {
            number: '01',
            title: 'HR & Employee Management',
            description: 'Employee records, department structure and workforce management.',
            icon: 'Users',
            status: 'IMPLEMENTED',
          },
          {
            number: '02',
            title: 'Attendance & Leave',
            description: 'Daily attendance tracking, shift records and leave approval workflows.',
            icon: 'CalendarCheck',
            status: 'IMPLEMENTED',
          },
          {
            number: '03',
            title: 'Payroll Workflows',
            description: 'Supporting salary structure records and payroll processing workflows.',
            icon: 'CreditCard',
            status: 'IN PROGRESS',
          },
          {
            number: '04',
            title: 'CRM & Lead Management',
            description: 'Managing customer leads, follow-ups and sales pipelines.',
            icon: 'Briefcase',
            status: 'IMPLEMENTED',
          },
          {
            number: '05',
            title: 'Project & Work Management',
            description: 'Organizing internal projects, task assignments and work tracking.',
            icon: 'FolderKanban',
            status: 'IMPLEMENTED',
          },
          {
            number: '06',
            title: 'Asset Management',
            description: 'Tracking and managing company equipment and assigned assets.',
            icon: 'Boxes',
            status: 'IMPLEMENTED',
          },
          {
            number: '07',
            title: 'Role-Based Access Control',
            description: 'Controlling route access and actions based on user roles and permissions.',
            icon: 'ShieldCheck',
            status: 'IMPLEMENTED',
          },
        ],
      },
      contributions: {
        label: 'MY CONTRIBUTION',
        headline: {
          line1: 'Building features across',
          highlight: 'the full application stack',
        },
        intro:
          'As a Senior Software Engineer working across the full stack, I contributed to React.js interfaces, Node.js and Express.js APIs, MongoDB data models, authentication and VPS deployment.',
        items: [
          {
            area: 'Frontend Development',
            text: 'Developed module interfaces and dashboards using React.js',
          },
          {
            area: 'Backend Services',
            text: 'Built REST APIs and controller logic using Node.js and Express.js',
          },
          {
            area: 'Data Modeling',
            text: 'Designed and maintained MongoDB schemas using Mongoose',
          },
          {
            area: 'Authentication',
            text: 'Implemented user authentication using JWT',
          },
          {
            area: 'Access Control',
            text: 'Implemented Role-Based Access Control and protected routes',
          },
          {
            area: 'Operational Modules',
            text: 'Built workflows across HR, attendance, leave, CRM, assets and payroll modules',
          },
          {
            area: 'API Integration',
            text: 'Connected React.js frontend views with backend REST APIs',
          },
          {
            area: 'Production Deployment',
            text: 'Managed deployment and server processes using Linux VPS, Nginx and PM2',
          },
        ],
      },
      architecture: {
        label: 'SYSTEM ARCHITECTURE',
        headline: {
          line1: 'How the platform',
          highlight: 'is structured',
        },
        intro:
          'Structured as a modular MERN application with a clear separation between React.js client views, authenticated Express.js API routes, business logic controllers and MongoDB models.',
        layers: [
          {
            step: '01',
            title: 'Users',
            subtitle: 'Employees · HR · Finance · Sales · Administrators',
            detail: 'Role-specific access to operational workspaces',
          },
          {
            step: '02',
            title: 'React.js Frontend',
            subtitle: 'Component UI · Protected Routes · State Management',
            detail: 'Interactive dashboards, forms, tables and workflow views',
          },
          {
            step: '03',
            title: 'REST API Layer',
            subtitle: 'Node.js + Express.js',
            detail: 'Structured HTTP endpoints, request validation and routing',
          },
          {
            step: '04',
            title: 'Authentication',
            subtitle: 'JWT + Role-Based Access Control',
            detail: 'Token verification, session handling and role permission checks',
          },
          {
            step: '05',
            title: 'Business Logic Layer',
            subtitle: 'Connected Application Modules',
            detail: 'Core operational controllers and cross-module workflows',
            modules: ['HRMS', 'Attendance', 'Payroll', 'CRM', 'Projects', 'Assets'],
          },
          {
            step: '06',
            title: 'MongoDB',
            subtitle: 'Mongoose Schemas & Document Store',
            detail: 'Document models across employees, attendance, payroll, leads and assets',
          },
        ],
      },
      engineeringFocus: {
        label: 'ENGINEERING FOCUS',
        headline: {
          line1: 'The systems behind',
          highlight: 'the workflows',
        },
        cards: [
          {
            title: 'Authentication & Security',
            description: 'JWT-based authentication and protected application routes.',
            icon: 'Lock',
          },
          {
            title: 'Role-Based Access Control',
            description: 'Controlling module visibility and actions based on user roles.',
            icon: 'ShieldCheck',
          },
          {
            title: 'Business Workflows',
            description: 'Structuring backend controllers and database models for connected operations.',
            icon: 'Workflow',
          },
          {
            title: 'Production Deployment',
            description: 'Deploying and maintaining the application on a Linux VPS with Nginx and PM2.',
            icon: 'Terminal',
          },
        ],
      },
      techStackGroups: {
        label: 'TECHNOLOGY STACK',
        headline: {
          line1: 'Technologies used to build',
          highlight: 'and run the platform',
        },
        groups: [
          {
            category: 'Frontend',
            items: ['React.js', 'JavaScript', 'Tailwind CSS'],
          },
          {
            category: 'Backend',
            items: ['Node.js', 'Express.js', 'REST APIs'],
          },
          {
            category: 'Database',
            items: ['MongoDB', 'Mongoose'],
          },
          {
            category: 'Security',
            items: ['JWT', 'Role-Based Access Control'],
          },
          {
            category: 'Infrastructure',
            items: ['Linux / VPS', 'Nginx', 'PM2'],
          },
        ],
      },
      learnings: {
        label: 'ENGINEERING LEARNINGS',
        headline: {
          line1: 'What building a multi-module',
          highlight: 'business system taught me',
        },
        items: [
          'Designing application modules around real internal workflows',
          'Managing data relationships across HR, attendance, payroll and CRM records',
          'Keeping frontend and backend responsibilities clearly separated',
          'Enforcing Role-Based Access Control across both UI routes and API endpoints',
          'Writing maintainable Express.js APIs and reusable React.js components',
          'Managing production builds and process monitoring with Nginx and PM2',
        ],
      },
    },
    highlights: [
      'Developed modular React.js interfaces for HR, attendance, leave, CRM and asset workflows.',
      'Built REST APIs with Node.js, Express.js, JWT authentication and Role-Based Access Control.',
      'Designed MongoDB schemas supporting employee records, attendance logs, CRM leads, assets and payroll workflows.',
    ],
    sections: [
      {
        heading: 'Challenge',
        body: 'Managing employee attendance, leave approvals, payroll workflows, customer leads and company assets across separate tools created fragmented records and manual handoffs.',
      },
      {
        heading: 'Architecture & Approach',
        body: 'Built a full-stack MERN platform with dedicated modules for HRMS, Attendance, Payroll, CRM, Projects and Asset Management, protected by Role-Based Access Control.',
      },
      {
        heading: 'Operational Value',
        body: 'Provided a centralized internal platform for managing workforce records, attendance, leads and company assets.',
      },
    ],
  },
  {
    slug: 'indian-tours-and-travels',
    number: '02',
    featured: false,
    title: 'Indian Tours & Travels',
    category: 'Travel Platform · CRM · Booking Management',
    capabilityLabel: 'Core Modules',
    description:
      'A full-stack travel platform connecting customer tour discovery and enquiries with internal CRM lead tracking, booking workflows and administrative management.',
    technicalFocus:
      'Built the customer-facing React.js portal, internal CRM and admin dashboards, Node.js and Express.js REST APIs, MongoDB data models and Linux VPS deployment.',
    businessImpact:
      'Connected public tour discovery and customer enquiries with an internal travel CRM, booking coordination workflows and administrative dashboard.',
    capabilities: [
      'Tour Package Catalog',
      'Customer Enquiry Flow',
      'Lead Management & CRM',
      'Booking Workflows',
      'Employee & Admin Dashboards',
      'GST Billing (Planned / In Progress)',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    role: 'Senior Software Engineer · Full Stack',
    visualType: 'travel-platform',
    links: { live: '', github: '' },
    prevProject: {
      title: 'Business Management Platform',
      slug: 'business-management-platform',
    },
    nextProject: {
      title: 'ApexBuild SaaS Ecosystem',
      slug: 'apexbuild-saas-ecosystem',
    },
    caseStudy: {
      variant: 'travel-platform',
      heroLabel: 'CASE STUDY · TRAVEL PLATFORM',
      headline: {
        line1: 'Indian Tours',
        highlight: '& Travels',
      },
      heroDescription:
        'A full-stack travel platform connecting public tour package discovery and customer enquiries with internal CRM lead tracking, booking workflows and admin management.',
      heroTags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Role-Based Access Control'],
      role: 'Senior Software Engineer (Full Stack)',
      roleNote: 'Contributed across requirements analysis, full-stack MERN development and VPS deployment',
      secondaryHeroAction: {
        label: 'Explore the Platform Architecture',
        href: '#platform-architecture',
      },
      gallery: {
        label: 'PRODUCT IN ACTION',
        headline: {
          line1: 'Connected customer and internal',
          highlight: 'travel platform interfaces',
        },
        description:
          'Sanitized product previews showing the implemented customer-facing travel discovery and enquiry flows alongside the internal CRM lead management and admin dashboard.',
        items: [
          {
            id: 'itt-homepage',
            title: 'Customer Homepage',
            category: 'Public Website · Implemented',
            badge: 'Implemented · Sanitized Preview',
            badgeTone: 'emerald',
            size: 'featured',
            description:
              'Customer-facing travel discovery interface presenting destination highlights, tour packages and enquiry actions.',
            alt: 'Sanitized Customer Homepage interface of Indian Tours & Travels featuring curated tour circuits, destination search and enquiry entry points',
            routePath: '/',
            accent: 'blue',
            metrics: [
              { label: 'Surface Type', value: 'Public React.js Customer Portal' },
              { label: 'Core Flows', value: 'Discovery → Package View → Enquiry' },
              { label: 'Status', value: 'Implemented' },
            ],
            rows: [
              { col1: 'Featured Circuit · Himalayan Scenic Trail', col2: '6 Days / Custom & Group', status: 'Published' },
              { col1: 'Coastal & Backwater Heritage Package', col2: '5 Days / Guided Itinerary', status: 'Published' },
              { col1: 'Royal Rajasthan Cultural Expedition', col2: '7 Days / Multi-City Route', status: 'Published' },
              { col1: 'Direct Custom Travel Enquiry CTA', col2: 'Connected to Lead CRM', status: 'Implemented' },
            ],
          },
          {
            id: 'itt-package-discovery',
            title: 'Package Discovery',
            category: 'Catalog UI · Implemented',
            badge: 'Implemented · Sanitized Preview',
            badgeTone: 'emerald',
            size: 'medium',
            description:
              'Travel package browsing interface with destination filtering, duration tags and route overviews.',
            alt: 'Sanitized Travel Package Discovery catalog interface displaying tour cards, durations, route stops and enquiry triggers',
            routePath: '/packages',
            accent: 'indigo',
            metrics: [
              { label: 'Catalog Data', value: 'MongoDB Package Schemas' },
              { label: 'Filtering', value: 'Destination · Duration · Type' },
            ],
            rows: [
              { col1: 'PKG-HIM-01 · Shimla – Manali – Solang', col2: '6D / 5N Itinerary', status: 'Enquiry Open' },
              { col1: 'PKG-KER-04 · Kochi – Munnar – Alleppey', col2: '5D / 4N Itinerary', status: 'Enquiry Open' },
              { col1: 'PKG-GOA-02 · Coastal Leisure Circuit', col2: '4D / 3N Itinerary', status: 'Enquiry Open' },
            ],
          },
          {
            id: 'itt-package-details',
            title: 'Package Details',
            category: 'Itinerary View · Implemented',
            badge: 'Implemented · Sanitized Preview',
            badgeTone: 'emerald',
            size: 'medium',
            description:
              'Day-by-day itinerary breakdown, travel inclusions and package enquiry submission.',
            alt: 'Sanitized Package Details interface showing day-by-day travel itinerary schedules, route highlights and enquiry submission callout',
            routePath: '/packages/himalayan-scenic-circuit',
            accent: 'purple',
            metrics: [
              { label: 'Structured Content', value: 'Day-Wise Itinerary & Inclusions' },
              { label: 'Lead Context', value: 'Links Package Reference to Enquiry' },
            ],
            rows: [
              { col1: 'Day 01–02 · Arrival & Mountain Transit', col2: 'Transport & Stay Details', status: 'Itinerary' },
              { col1: 'Day 03–04 · Guided Valley Excursion', col2: 'Sightseeing & Activities', status: 'Itinerary' },
              { col1: 'Day 05–06 · Return Transfer & Departure', col2: 'Custom Group Options', status: 'Enquire Now' },
            ],
          },
          {
            id: 'itt-enquiry-flow',
            title: 'Enquiry Flow',
            category: 'Customer-to-CRM · Implemented',
            badge: 'Implemented · Sanitized Preview',
            badgeTone: 'emerald',
            size: 'standard',
            description:
              'Customer enquiry submission workflow capturing travel dates, group size and package preferences.',
            alt: 'Sanitized Customer Enquiry Submission form interface validating travel preferences and sending lead payloads to the Express REST API',
            routePath: '/enquire',
            accent: 'blue',
            metrics: [
              { label: 'API Endpoint', value: 'POST /api/enquiries' },
              { label: 'Data Privacy', value: 'Sanitized Placeholder Fields' },
            ],
            rows: [
              { col1: 'Selected Package & Travel Window', col2: 'Validated Input Payload', status: 'Captured' },
              { col1: 'MongoDB Lead Record Creation', col2: 'Saved to Internal CRM', status: 'Implemented' },
            ],
          },
          {
            id: 'itt-crm-leads',
            title: 'CRM Lead Management',
            category: 'Internal CRM · Implemented',
            badge: 'Implemented · Sanitized Preview',
            badgeTone: 'emerald',
            size: 'standard',
            description:
              'Internal lead tracking interface for organizing incoming enquiries and customer follow-ups.',
            alt: 'Sanitized Internal CRM Lead Management interface listing captured website enquiries, follow-up stages and staff assignments',
            routePath: '/admin/crm/leads',
            accent: 'indigo',
            metrics: [
              { label: 'Lead Stages', value: 'New → Contacted → Booking' },
              { label: 'Access Scope', value: 'Authenticated Staff & Admin' },
            ],
            rows: [
              { col1: 'ENQ-2041 · Himalayan Circuit Enquiry', col2: 'Assigned: Travel Desk', status: 'Follow-up' },
              { col1: 'ENQ-2042 · Coastal Heritage Enquiry', col2: 'Assigned: Operations', status: 'In Review' },
            ],
          },
          {
            id: 'itt-admin-dashboard',
            title: 'Admin Dashboard',
            category: 'Operations Console · Implemented',
            badge: 'Implemented · Sanitized Preview',
            badgeTone: 'emerald',
            size: 'standard',
            description:
              'Internal management interface for managing tour packages, enquiries and operational records.',
            alt: 'Sanitized Admin Dashboard interface for managing tour package listings, incoming lead queues and employee access',
            routePath: '/admin/dashboard',
            accent: 'purple',
            metrics: [
              { label: 'Core Controls', value: 'Packages · Enquiries · Bookings' },
              { label: 'Billing Module', value: 'GST Invoices (Planned / In Progress)' },
            ],
            rows: [
              { col1: 'Tour Package Catalog & Content Management', col2: 'Implemented Module', status: 'Implemented' },
              { col1: 'GST Billing & Invoice Workflow', col2: 'Planned / In Progress', status: 'In Progress' },
            ],
          },
        ],
      },
      challenge: {
        label: 'THE CHALLENGE',
        headline: {
          line1: 'From scattered enquiries',
          highlight: 'to connected travel operations',
        },
        paragraphs: [
          'Travel businesses often handle enquiries across disconnected channels—website forms, phone calls, package lists, follow-up notes and booking records.',
          'When customer-facing package discovery is separated from internal lead tracking, enquiries are harder to organize and follow through consistently.',
          'The goal was to build a single platform where public travel enquiries flow directly into internal CRM and admin workflows.',
        ],
        channels: [
          'Website enquiries',
          'Phone enquiries',
          'Travel package information',
          'Customer follow-ups',
          'Booking requests',
          'Employee operations',
          'Internal records',
        ],
        painPoints: [
          {
            title: 'Multi-Channel Enquiry Fragmentation',
            detail:
              'Incoming website and phone enquiries needed a single structured entry point instead of manual tracking.',
          },
          {
            title: 'Disconnected Package & Lead Context',
            detail:
              'Linking the specific tour package a visitor viewed directly to the internal lead and follow-up record.',
          },
          {
            title: 'Coordination Across Internal Roles',
            detail:
              'Giving administrators and staff organized workspaces to manage packages, follow-ups and booking workflows.',
          },
        ],
      },
      solution: {
        label: 'THE SOLUTION',
        headline: {
          line1: 'One platform connecting',
          highlight: 'customers and operations',
        },
        intro:
          'The platform pairs a customer-facing travel portal with internal CRM and admin tools backed by a shared Node.js, Express.js and MongoDB backend.',
        modules: [
          {
            number: '01',
            title: 'Customer Website',
            description: 'Travel packages, destination views and customer enquiry forms.',
            icon: 'Globe',
            status: 'IMPLEMENTED',
          },
          {
            number: '02',
            title: 'Lead Management',
            description: 'Capturing and organizing incoming customer enquiries.',
            icon: 'Compass',
            status: 'IMPLEMENTED',
          },
          {
            number: '03',
            title: 'CRM Workflow',
            description: 'Tracking lead status and customer follow-up notes.',
            icon: 'Briefcase',
            status: 'IMPLEMENTED',
          },
          {
            number: '04',
            title: 'Booking Workflows',
            description: 'Supporting internal booking progression and coordination.',
            icon: 'CalendarCheck',
            status: 'IMPLEMENTED',
          },
          {
            number: '05',
            title: 'Admin Dashboard',
            description: 'Managing tour packages, enquiries, operational records and content.',
            icon: 'LayoutDashboard',
            status: 'IMPLEMENTED',
          },
          {
            number: '06',
            title: 'Employee Workspace',
            description: 'Role-protected internal access for handling assigned enquiries and follow-ups.',
            icon: 'Users',
            status: 'IMPLEMENTED',
          },
          {
            number: '07',
            title: 'Billing & Invoices',
            description: 'Planned GST-compliant billing and invoice workflow currently in development.',
            icon: 'Receipt',
            status: 'PLANNED / IN PROGRESS',
          },
        ],
      },
      userFlow: {
        label: 'PRODUCT FLOW',
        headline: {
          line1: 'From discovery',
          highlight: 'to internal operations',
        },
        intro:
          'A structured journey connecting visitors exploring travel packages with internal CRM follow-ups, booking workflows and administrative management.',
        steps: [
          {
            step: '01',
            title: 'Visitor',
            surface: 'Public Web',
            detail: 'Arrives on the customer-facing travel website',
          },
          {
            step: '02',
            title: 'Explore Travel Packages',
            surface: 'Catalog UI',
            detail: 'Browses destinations, durations & itinerary details',
          },
          {
            step: '03',
            title: 'Submit Enquiry',
            surface: 'Enquiry Flow',
            detail: 'Submits travel preferences & package interest',
          },
          {
            step: '04',
            title: 'Lead Created',
            surface: 'REST API + DB',
            detail: 'Structured lead record saved in MongoDB',
          },
          {
            step: '05',
            title: 'CRM / Follow-up',
            surface: 'Internal CRM',
            detail: 'Staff tracks enquiry status & customer follow-ups',
          },
          {
            step: '06',
            title: 'Booking Workflow',
            surface: 'Operations',
            detail: 'Coordinates itinerary & booking progression',
          },
          {
            step: '07',
            title: 'Internal Management',
            surface: 'Admin Console',
            detail: 'Centralized oversight of packages, leads & records',
          },
        ],
      },
      contributions: {
        label: 'MY CONTRIBUTION',
        headline: {
          line1: 'Taking business requirements',
          highlight: 'into a working platform',
        },
        intro:
          'As a Senior Software Engineer working across the full stack, I contributed to requirements analysis, customer-facing React.js views, Express.js APIs, MongoDB schemas and Linux VPS deployment.',
        items: [
          {
            area: 'Requirements & Flows',
            text: 'Contributed to translating business requirements into application workflows',
          },
          {
            area: 'Customer Frontend',
            text: 'Developed customer-facing interfaces using React.js',
          },
          {
            area: 'Backend APIs',
            text: 'Built REST APIs using Node.js and Express.js',
          },
          {
            area: 'Database Design',
            text: 'Designed MongoDB data models for packages, enquiries and leads',
          },
          {
            area: 'Lead & Enquiry Module',
            text: 'Developed lead capture and CRM follow-up functionality',
          },
          {
            area: 'Internal Dashboards',
            text: 'Built admin and employee management interfaces',
          },
          {
            area: 'Auth & Permissions',
            text: 'Implemented JWT authentication and Role-Based Access Control',
          },
          {
            area: 'API Integration',
            text: 'Connected React.js frontend views with backend REST APIs',
          },
          {
            area: 'Production Setup',
            text: 'Worked on deployment and server setup using Linux VPS, Nginx and PM2',
          },
        ],
      },
      architecture: {
        label: 'SYSTEM ARCHITECTURE',
        headline: {
          line1: 'Connecting the public website',
          highlight: 'with the business platform',
        },
        intro:
          'Structured as a unified MERN application where the public React.js website and protected internal dashboards communicate through a shared Node.js and Express.js REST API layer backed by MongoDB.',
        diagramType: 'dual-surface-mern',
        actors: [
          {
            role: 'VISITORS',
            surface: 'React.js Customer Website',
            detail: 'Package discovery, itinerary browsing & enquiry submission',
          },
          {
            role: 'ADMIN & EMPLOYEES',
            surface: 'Internal Admin & Staff Portal',
            detail: 'JWT-authenticated access for lead follow-ups, package management & operations',
          },
        ],
        apiLayer: {
          title: 'REST APIs',
          subtitle: 'Node.js + Express.js',
          detail: 'Request validation, public enquiry capture & JWT / Role-Based Access protected routes',
        },
        businessLayer: {
          title: 'Business Logic Layer',
          subtitle: 'Connected Domain Workflows',
          branches: [
            {
              title: 'CRM / Leads',
              items: ['Enquiry Capture', 'Lead Assignment', 'Follow-up Tracking', 'Booking Workflows'],
            },
            {
              title: 'Admin System',
              items: ['Tour Package Catalog', 'Destination Content', 'Role Access', 'Operational Records'],
            },
          ],
        },
        databaseLayer: {
          title: 'MongoDB',
          subtitle: 'Mongoose Data Models',
          detail: 'Document schemas for tour packages, enquiries, leads, bookings and internal users',
        },
      },
      engineeringFocus: {
        label: 'ENGINEERING CHALLENGES',
        headline: {
          line1: 'Building connected workflows',
          highlight: 'across different user experiences',
        },
        cards: [
          {
            title: 'Customer-to-CRM Flow',
            description: 'Connecting public website enquiries directly with internal lead management records.',
            icon: 'Workflow',
          },
          {
            title: 'Data Modeling',
            description: 'Structuring MongoDB schemas for tour packages, enquiries, leads and booking workflows.',
            icon: 'Database',
          },
          {
            title: 'Role-Based Access Control',
            description: 'Separating access permissions for administrators and internal staff members.',
            icon: 'ShieldCheck',
          },
          {
            title: 'Production Deployment',
            description: 'Deploying and maintaining the application on a Linux VPS with Nginx and PM2.',
            icon: 'Terminal',
          },
        ],
      },
      techStackGroups: {
        label: 'TECHNOLOGY STACK',
        headline: {
          line1: 'Core technologies powering',
          highlight: 'the travel platform',
        },
        groups: [
          {
            category: 'Frontend',
            items: ['React.js', 'JavaScript', 'Vite', 'Tailwind CSS'],
          },
          {
            category: 'Backend',
            items: ['Node.js', 'Express.js', 'REST APIs'],
          },
          {
            category: 'Database',
            items: ['MongoDB', 'Mongoose'],
          },
          {
            category: 'Authentication',
            items: ['JWT', 'Role-Based Access Control'],
          },
          {
            category: 'Infrastructure',
            items: ['Linux / VPS', 'Nginx', 'PM2'],
          },
        ],
      },
      learnings: {
        label: 'ENGINEERING LEARNINGS',
        headline: {
          line1: 'What building a customer-facing',
          highlight: 'business platform taught me',
        },
        items: [
          'Translating travel business requirements into clear technical workflows',
          'Designing customer-facing and internal admin interfaces around shared data models',
          'Managing data flow between public enquiry forms and protected CRM routes',
          'Structuring a growing MERN codebase cleanly',
          'Designing admin workflows around everyday operational tasks',
          'Planning incremental module rollouts such as billing and invoice workflows',
        ],
      },
      projectStatus: {
        label: 'PROJECT STATUS',
        headline: 'Core platform implemented, with billing workflows in progress.',
        description:
          'Customer-facing package discovery, enquiry capture, CRM lead tracking, booking workflows and administrative management interfaces are implemented, while GST-compliant billing and invoice workflows are planned and currently in development.',
        implementedSummary: [
          'Customer travel package catalog & enquiry flows',
          'Lead management & CRM follow-up workflows',
          'Admin dashboard & internal employee workspace',
          'REST API architecture, JWT auth & MongoDB models',
        ],
        inProgressSummary: [
          'GST-compliant billing & invoice workflows (Planned / In Progress)',
          'Ongoing operational workflow refinements',
        ],
      },
    },
    highlights: [
      'Built tour package catalogs and customer enquiry workflows using React.js.',
      'Developed an internal travel CRM for lead capture, follow-ups and booking workflows.',
      'Implemented admin and staff workspaces backed by Node.js, Express.js and MongoDB.',
    ],
    sections: [
      {
        heading: 'Challenge',
        body: 'Travel operations required coordinating tour package catalogs, incoming customer enquiries, follow-ups and staff workflows that were previously handled across separate channels.',
      },
      {
        heading: 'Architecture & Approach',
        body: 'Built a full-stack MERN platform combining a public customer portal with an internal CRM, employee workspace and admin dashboard.',
      },
      {
        heading: 'Operational Value',
        body: 'Connected customer tour enquiries directly with internal CRM follow-up and booking management workflows.',
      },
    ],
  },
  {
    slug: 'apexbuild-saas-ecosystem',
    number: '03',
    featured: false,
    title: 'ApexBuild SaaS Ecosystem',
    category: 'Multi-Vertical SaaS Platform',
    capabilityLabel: 'Ecosystem Products',
    description:
      'A multi-vertical SaaS platform designed to support contractor, supplier, diagnostics and distributor businesses through dedicated operating systems and centralized administration.',
    technicalFocus:
      'Contributing to full-stack development across specialized vertical operating systems, Superadmin account management, Node.js and Express.js APIs and MongoDB models.',
    businessImpact:
      'Structured a multi-vertical SaaS ecosystem pairing four industry-specific operating systems with a shared Superadmin Control Tower.',
    capabilities: [
      'Superadmin Control Tower',
      'Contractor OS (Completed)',
      'Supplier OS (~90% Complete)',
      'Diagnostics OS (~85% Complete)',
      'Distributor OS (~75% Complete)',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    role: 'Senior Software Engineer',
    visualType: 'saas-ecosystem',
    links: { live: '', github: '' },
    prevProject: {
      title: 'Indian Tours & Travels',
      slug: 'indian-tours-and-travels',
    },
    nextProject: null,
    finalContactCta: {
      prompt: 'Interested in working together?',
      buttonLabel: "Let's Connect",
      href: '/#contact',
    },
    caseStudy: {
      variant: 'saas-ecosystem',
      heroLabel: 'CASE STUDY · MULTI-VERTICAL SAAS',
      headline: {
        line1: 'ApexBuild',
        highlight: 'SaaS Ecosystem',
      },
      heroDescription:
        'A multi-vertical business software platform designed to support different industries through specialized operating systems managed from a shared administrative foundation.',
      heroTags: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      role: 'Senior Software Engineer',
      roleNote:
        'Contributing to the architecture and full-stack development of specialized vertical operating systems and shared platform administration.',
      secondaryHeroAction: {
        label: 'Explore the Product Architecture',
        href: '#platform-architecture',
      },
      gallery: {
        label: 'PRODUCT IN ACTION',
        headline: {
          line1: 'Visualizing the multi-vertical',
          highlight: 'software ecosystem',
        },
        description:
          'Sanitized product previews across the Superadmin Control Tower, business account administration and specialized vertical operating systems, clearly labeled by current development status.',
        items: [
          {
            id: 'ab-control-tower',
            title: 'Superadmin Control Tower',
            category: 'Central Platform Administration',
            badge: 'Product Preview',
            badgeTone: 'blue',
            size: 'featured',
            description:
              'Central platform administration for managing business accounts, vertical operating system access, subscriptions and pricing.',
            alt: 'Sanitized Superadmin Control Tower interface showing centralized governance across Contractor OS, Supplier OS, Diagnostics OS and Distributor OS',
            routePath: '/superadmin/control-tower',
            accent: 'blue',
            metrics: [
              { label: 'Control Scope', value: 'All 4 Vertical Operating Systems' },
              { label: 'Administration', value: 'Accounts · Access · Subscriptions' },
              { label: 'Architecture', value: 'Shared Administrative Core' },
            ],
            rows: [
              { col1: 'Contractor OS · Contractor Business Workflows', col2: 'Vertical System 01', status: 'Completed' },
              { col1: 'Supplier OS · Supplier Business Workflows', col2: 'Vertical System 02', status: '~90% Complete' },
              { col1: 'Diagnostics OS · Diagnostics Business Workflows', col2: 'Vertical System 03', status: '~85% Complete' },
              { col1: 'Distributor OS · Distributor Business Workflows', col2: 'Vertical System 04', status: '~75% Complete' },
            ],
          },
          {
            id: 'ab-business-accounts',
            title: 'Business Accounts',
            category: 'Platform Control · /superadmin/business-accounts',
            badge: 'Product Preview',
            badgeTone: 'blue',
            size: 'medium',
            description:
              'Managing business accounts, platform access, subscriptions and pricing from a central administrative interface.',
            alt: 'Sanitized Business Accounts management interface at /superadmin/business-accounts showing business accounts, subscription plans and platform access controls',
            routePath: '/superadmin/business-accounts',
            accent: 'indigo',
            metrics: [
              { label: 'Route', value: '/superadmin/business-accounts' },
              { label: 'Capabilities', value: 'Accounts · Subscriptions · Pricing' },
            ],
            rows: [
              { col1: 'ACC-CTR-104 · Contractor Business Account', col2: 'Contractor OS Access', status: 'Enabled' },
              { col1: 'ACC-SUP-208 · Supplier Business Account', col2: 'Supplier OS Access', status: 'Enabled' },
              { col1: 'ACC-DGN-312 · Diagnostics Business Account', col2: 'Diagnostics OS Access', status: 'Configured' },
            ],
          },
          {
            id: 'ab-contractor-os',
            title: 'Contractor OS',
            category: 'Specialized Vertical · Completed',
            badge: 'Completed · Product Preview',
            badgeTone: 'emerald',
            size: 'medium',
            description:
              'Specialized operational workflows designed for contractor businesses.',
            alt: 'Sanitized Contractor OS interface showing contractor operational workflows and project workspaces',
            routePath: '/contractor-os/dashboard',
            accent: 'emerald',
            metrics: [
              { label: 'Vertical Focus', value: 'Contractor Business Workflows' },
              { label: 'Development Status', value: 'Completed' },
            ],
            rows: [
              { col1: 'Contractor Operational Workflows', col2: 'Core Vertical System', status: 'Completed' },
              { col1: 'Role-Based Contractor Workspace Access', col2: 'Protected Area', status: 'Implemented' },
            ],
          },
          {
            id: 'ab-supplier-os',
            title: 'Supplier OS',
            category: 'Specialized Vertical · ~90% Complete',
            badge: 'In Development · Product Preview',
            badgeTone: 'amber',
            size: 'standard',
            description:
              'Specialized operational workflows designed for supplier businesses.',
            alt: 'Sanitized Supplier OS product preview interface showing supplier operational workflows in development',
            routePath: '/supplier-os/workspace',
            accent: 'blue',
            metrics: [
              { label: 'Vertical Focus', value: 'Supplier Business Workflows' },
              { label: 'Development Status', value: 'Approximately 90% complete' },
            ],
            rows: [
              { col1: 'Supplier Operational Workflows', col2: 'Core Flows Built', status: '~90% Complete' },
              { col1: 'Remaining Module Refinements', col2: 'Active Development', status: 'In Development' },
            ],
          },
          {
            id: 'ab-diagnostics-os',
            title: 'Diagnostics OS',
            category: 'Specialized Vertical · ~85% Complete',
            badge: 'In Development · Product Preview',
            badgeTone: 'amber',
            size: 'standard',
            description:
              'Specialized operational workflows designed for diagnostics businesses.',
            alt: 'Sanitized Diagnostics OS product preview interface showing diagnostics business workflows in development',
            routePath: '/diagnostics-os/workspace',
            accent: 'purple',
            metrics: [
              { label: 'Vertical Focus', value: 'Diagnostics Business Workflows' },
              { label: 'Development Status', value: 'Approximately 85% complete' },
            ],
            rows: [
              { col1: 'Diagnostics Operational Workflows', col2: 'Core Structure Built', status: '~85% Complete' },
              { col1: 'Remaining Workflow Refinements', col2: 'Active Development', status: 'In Development' },
            ],
          },
          {
            id: 'ab-distributor-os',
            title: 'Distributor OS',
            category: 'Specialized Vertical · ~75% Complete',
            badge: 'In Development · Product Preview',
            badgeTone: 'amber',
            size: 'standard',
            description:
              'Specialized operational workflows designed for distributor businesses.',
            alt: 'Sanitized Distributor OS product preview interface displaying distributor business workflows in development',
            routePath: '/distributor-os/workspace',
            accent: 'indigo',
            metrics: [
              { label: 'Vertical Focus', value: 'Distributor Business Workflows' },
              { label: 'Development Status', value: 'Approximately 75% complete' },
            ],
            rows: [
              { col1: 'Distributor Operational Workflows', col2: 'Foundation Built', status: '~75% Complete' },
              { col1: 'Remaining Workflow Modules', col2: 'Active Development', status: 'In Development' },
            ],
          },
        ],
      },
      challenge: {
        label: 'THE CHALLENGE',
        headline: {
          line1: 'Different industries. Different workflows.',
          highlight: 'One shared foundation',
        },
        paragraphs: [
          'Different business domains require different operational workflows. A contractor business operates differently from a supplier, diagnostics provider or distributor.',
          'Building completely separate, unrelated systems for each vertical duplicates administrative work, account management and access control.',
          'The goal was to structure a multi-vertical software ecosystem where industry-specific operating systems share a central administrative foundation.',
        ],
        painPoints: [
          {
            title: 'Specialized Operating Systems',
            detail:
              'Each business vertical gets a dedicated operating system tailored to its operational model.',
          },
          {
            title: 'Industry-Specific Workflows',
            detail:
              'Each vertical maintains workflows suited to its domain while sharing core platform patterns.',
          },
          {
            title: 'Centralized Platform Administration',
            detail:
              'Central administration manages business accounts, subscriptions and platform access from one control layer.',
          },
        ],
      },
      solution: {
        label: 'THE SOLUTION',
        headline: {
          line1: 'A shared ecosystem',
          highlight: 'with specialized operating systems',
        },
        intro:
          'At the top sits the ApexBuild Platform and the Superadmin Control Tower, governing four specialized operating systems built for distinct business verticals.',
        ecosystemDiagram: {
          platformTitle: 'APEXBUILD PLATFORM',
          controlTowerTitle: 'SUPERADMIN CONTROL TOWER',
          systems: [
            {
              number: '01',
              title: 'Contractor OS',
              description: 'Specialized operational workflows designed for contractor businesses.',
              status: 'Completed',
              icon: 'HardHat',
              completed: true,
            },
            {
              number: '02',
              title: 'Supplier OS',
              description: 'Specialized operational workflows designed for supplier businesses.',
              status: 'Approximately 90% complete',
              icon: 'PackageCheck',
              completed: false,
            },
            {
              number: '03',
              title: 'Diagnostics OS',
              description: 'Specialized operational workflows designed for diagnostics businesses.',
              status: 'Approximately 85% complete',
              icon: 'Stethoscope',
              completed: false,
            },
            {
              number: '04',
              title: 'Distributor OS',
              description: 'Specialized operational workflows designed for distributor businesses.',
              status: 'Approximately 75% complete',
              icon: 'Truck',
              completed: false,
            },
          ],
        },
        modules: [],
      },
      controlTowerSection: {
        label: 'PLATFORM CONTROL',
        headline: {
          line1: 'One place to manage',
          highlight: 'the entire ecosystem',
        },
        intro:
          'The Superadmin Control Tower provides a central administrative layer to manage business accounts, platform access, subscriptions, pricing and business-level administration across the ecosystem.',
        routePath: '/superadmin/business-accounts',
        capabilities: [
          'Business Accounts',
          'Platform Access',
          'Subscriptions',
          'Pricing',
          'Business-Level Administration',
        ],
        sanitizedAccounts: [
          {
            accountCode: 'ACC-CTR-104',
            businessType: 'Contractor OS Workspace',
            planTier: 'Subscription Active',
            accessState: 'Platform Access Enabled',
          },
          {
            accountCode: 'ACC-SUP-208',
            businessType: 'Supplier OS Workspace',
            planTier: 'Subscription Active',
            accessState: 'Platform Access Enabled',
          },
          {
            accountCode: 'ACC-DGN-312',
            businessType: 'Diagnostics OS Workspace',
            planTier: 'Subscription Configured',
            accessState: 'Role Scope Assigned',
          },
          {
            accountCode: 'ACC-DST-419',
            businessType: 'Distributor OS Workspace',
            planTier: 'Onboarding Tier',
            accessState: 'Admin Managed',
          },
        ],
      },
      architecture: {
        label: 'PRODUCT ARCHITECTURE',
        headline: {
          line1: 'Shared control.',
          highlight: 'Specialized workflows',
        },
        intro:
          'The platform pairs a shared administrative layer with dedicated vertical operating systems so each business domain has tailored workflows without duplicating core account administration.',
        diagramType: 'multi-vertical-saas',
        topChain: [
          {
            step: '01',
            title: 'SUPERADMIN',
            subtitle: 'Ecosystem Oversight & Administration',
          },
          {
            step: '02',
            title: 'PLATFORM CONTROL',
            subtitle: 'Access, Subscriptions, Pricing & Configuration',
          },
          {
            step: '03',
            title: 'BUSINESS ACCOUNTS',
            subtitle: 'Account Management & Vertical Access',
          },
        ],
        verticals: [
          {
            name: 'CONTRACTOR OS',
            scope: 'Specialized contractor business workflows',
            icon: 'HardHat',
          },
          {
            name: 'SUPPLIER OS',
            scope: 'Specialized supplier business workflows',
            icon: 'PackageCheck',
          },
          {
            name: 'DIAGNOSTICS OS',
            scope: 'Specialized diagnostics business workflows',
            icon: 'Stethoscope',
          },
          {
            name: 'DISTRIBUTOR OS',
            scope: 'Specialized distributor business workflows',
            icon: 'Truck',
          },
        ],
        bottomNote: 'Industry-specific workflows and modules',
      },
      operatingSystemsSection: {
        label: 'SPECIALIZED PRODUCTS',
        headline: {
          line1: 'Different business models',
          highlight: 'need different software',
        },
        intro:
          'Each operating system is designed around the operational needs of its business vertical while connecting to the shared ApexBuild administrative foundation.',
        items: [
          {
            number: '01',
            name: 'Contractor OS',
            focus: 'Specialized operational workflows designed for contractor businesses.',
            status: 'Completed',
            icon: 'HardHat',
            completed: true,
          },
          {
            number: '02',
            name: 'Supplier OS',
            focus: 'Specialized operational workflows designed for supplier businesses.',
            status: 'Approximately 90% complete',
            icon: 'PackageCheck',
            completed: false,
          },
          {
            number: '03',
            name: 'Diagnostics OS',
            focus: 'Specialized operational workflows designed for diagnostics businesses.',
            status: 'Approximately 85% complete',
            icon: 'Stethoscope',
            completed: false,
          },
          {
            number: '04',
            name: 'Distributor OS',
            focus: 'Specialized operational workflows designed for distributor businesses.',
            status: 'Approximately 75% complete',
            icon: 'Truck',
            completed: false,
          },
        ],
      },
      contributions: {
        label: 'MY CONTRIBUTION',
        headline: {
          line1: 'Engineering a growing',
          highlight: 'software ecosystem',
        },
        intro:
          'As a Senior Software Engineer, I contributed across the specialized operating systems, React.js interfaces, Node.js and Express.js APIs, MongoDB data models and administrative workflows.',
        items: [
          {
            area: 'Multi-Vertical Frontend',
            text: 'Contributing to frontend development across specialized operating systems',
          },
          {
            area: 'React.js Workflows',
            text: 'Building React.js interfaces and operational workflows',
          },
          {
            area: 'Backend Services',
            text: 'Developing backend REST APIs using Node.js and Express.js',
          },
          {
            area: 'Data Modeling',
            text: 'Designing and maintaining MongoDB data models',
          },
          {
            area: 'Admin Interfaces',
            text: 'Building administrative and business account management interfaces',
          },
          {
            area: 'Shared Workflows',
            text: 'Connecting application modules through shared platform patterns',
          },
          {
            area: 'Access & Security',
            text: 'Working on Role-Based Access Control and protected application areas',
          },
          {
            area: 'Product Evolution',
            text: 'Supporting the ongoing development of multiple vertical operating systems',
          },
        ],
      },
      engineeringFocus: {
        label: 'ENGINEERING FOCUS',
        headline: {
          line1: 'Designing for multiple',
          highlight: 'business models',
        },
        cards: [
          {
            title: 'Shared Administration',
            description:
              'Creating a central administrative layer for managing business accounts, subscriptions and platform access.',
            icon: 'LayoutDashboard',
          },
          {
            title: 'Specialized Workflows',
            description:
              'Designing application modules around the operational needs of each business vertical.',
            icon: 'Workflow',
          },
          {
            title: 'Modular Product Structure',
            description:
              'Organizing the platform so multiple vertical operating systems share consistent administrative patterns.',
            icon: 'Layers',
          },
          {
            title: 'Access & Permissions',
            description:
              'Managing protected application routes and Role-Based Access Control across accounts.',
            icon: 'ShieldCheck',
          },
        ],
      },
      techStackGroups: {
        label: 'TECHNOLOGY STACK',
        headline: {
          line1: 'Technologies behind',
          highlight: 'the ecosystem',
        },
        groups: [
          {
            category: 'Frontend',
            items: ['React.js', 'JavaScript', 'Vite', 'Tailwind CSS'],
          },
          {
            category: 'Backend',
            items: ['Node.js', 'Express.js', 'REST APIs'],
          },
          {
            category: 'Database',
            items: ['MongoDB', 'Mongoose'],
          },
          {
            category: 'Security',
            items: ['JWT', 'Role-Based Access Control'],
          },
        ],
      },
      learnings: {
        label: 'ENGINEERING LEARNINGS',
        headline: {
          line1: 'What building across',
          highlight: 'multiple business domains taught me',
        },
        items: [
          'Different business domains require tailored operational workflow models',
          'Shared administrative patterns reduce duplication across vertical products',
          'Clear module boundaries become more important as a platform grows',
          'Reusable React.js and Express.js patterns speed up multi-product development',
          'Role-Based Access Control is essential when managing multiple business accounts',
          'Consistent API and schema conventions keep multi-vertical codebases maintainable',
        ],
      },
      projectStatus: {
        label: 'PROJECT STATUS',
        headline: 'ApexBuild is an actively evolving multi-vertical software ecosystem.',
        description:
          'Contractor OS is completed, while Supplier OS, Diagnostics OS and Distributor OS are in active development alongside the shared Superadmin Control Tower.',
        verticalStatuses: [
          {
            name: 'Contractor OS',
            status: 'Completed',
            completed: true,
          },
          {
            name: 'Supplier OS',
            status: 'Approximately 90% complete',
            completed: false,
          },
          {
            name: 'Diagnostics OS',
            status: 'Approximately 85% complete',
            completed: false,
          },
          {
            name: 'Distributor OS',
            status: 'Approximately 75% complete',
            completed: false,
          },
        ],
      },
    },
    highlights: [
      'Contributed to a centralized Superadmin Control Tower governing multiple vertical operating systems.',
      'Worked on specialized vertical workspaces across Contractor OS, Supplier OS, Diagnostics OS and Distributor OS.',
      'Built REST APIs and MongoDB data models using Node.js, Express.js and Mongoose.',
    ],
    sections: [
      {
        heading: 'Challenge',
        body: 'Different business verticals—contractors, suppliers, diagnostics providers and distributors—each require specialized operational workflows while sharing account and platform administration.',
      },
      {
        heading: 'Architecture & Approach',
        body: 'Developed a multi-vertical SaaS ecosystem using React.js, Node.js, Express.js and MongoDB, pairing vertical operating systems with a Superadmin Control Tower.',
      },
      {
        heading: 'Operational Value',
        body: 'Provided a shared administrative foundation for managing business accounts, subscriptions and specialized vertical operating systems.',
      },
    ],
  },
];

export const skillsHeader = {
  eyebrow: 'TECHNICAL TOOLKIT',
  headline: {
    line1: 'The technologies behind',
    highlight: 'the products I build',
  },
  description:
    'My work spans React.js frontend development, Node.js and Express.js backend APIs, MongoDB database operations and production deployment.',
  architectureLayers: [
    'Frontend Interfaces',
    'APIs & Backend',
    'Database & Models',
    'Tools & Deployment',
  ],
};

export const skillGroups = [
  {
    number: '01',
    title: 'Frontend Engineering',
    description: 'Building responsive, maintainable and user-focused web interfaces.',
    icon: 'Layout',
    featured: false,
    skills: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'React Native',
    ],
  },
  {
    number: '02',
    title: 'Backend & APIs',
    description: 'Building backend services, REST APIs and application workflows.',
    icon: 'Server',
    featured: false,
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'Role-Based Access Control',
      'API Integration',
      'Business Logic',
    ],
  },
  {
    number: '03',
    title: 'Database & Data',
    description: 'Designing document schemas and managing application data with MongoDB.',
    icon: 'Database',
    featured: false,
    skills: ['MongoDB', 'Database Management', 'Schema Design', 'Data Modeling'],
  },
  {
    number: '04',
    title: 'Tools & Deployment',
    description: 'Version control, API testing, deployment and production maintenance.',
    icon: 'Terminal',
    featured: false,
    skills: [
      'Git & GitHub',
      'Postman',
      'Hostinger',
      'Production Deployment',
      'Production Debugging',
      'Responsive Web Development',
    ],
  },
  {
    number: '05',
    title: 'Product Domains',
    description: 'Applying full-stack development to business operations and internal workflows.',
    icon: 'Layers',
    featured: true,
    skills: [
      'ERP Systems',
      'HRMS',
      'CRM Platforms',
      'SaaS Applications',
      'Internal Business Tools',
      'Admin Dashboards',
    ],
  },
];

export const contactContent = {
  eyebrow: 'GET IN TOUCH',
  headline: {
    line1: 'Let’s build something',
    highlight: 'meaningful',
    line2Suffix: 'together.',
  },
  description:
    'I’m always open to discussing software engineering opportunities, interesting products and meaningful technical challenges. If you think my experience could be a good fit for your team, I’d be happy to connect.',
  email: 'sahinmondal7@gmail.com',
  whatsappNumber: '918768916367',
  methods: [
    {
      id: 'email',
      label: 'Email',
      value: 'sahinmondal7@gmail.com',
      href: 'mailto:sahinmondal7@gmail.com',
      icon: 'Mail',
      external: false,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sahinmondal7',
      href: 'https://www.linkedin.com/in/sahinmondal7',
      icon: 'Linkedin',
      external: true,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/Sahin15',
      href: 'https://github.com/Sahin15',
      icon: 'Github',
      external: true,
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Kolkata, India',
      href: null,
      icon: 'MapPin',
      external: false,
    },
  ],
};
