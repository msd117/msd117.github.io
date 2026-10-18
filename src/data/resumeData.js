// All site content lives here. Edit this file to update the page — no layout code needed.

const resumeData = {
  name: "Mohd Sohel Deshmukh",
  firstLine: "Mohd Sohel",
  secondLine: "Deshmukh",
  title: "Senior Software Engineer",
  company: "Biz4Solutions",
  location: "Pune, Maharashtra, India",
  shortLocation: "Pune",
  email: "deshmukh.sohel@yahoo.com",
  // Phone is hidden from the public site. To show it again, set e.g.
  // phone: "+91 00000 00000", phoneHref: "tel:+910000000000"
  phone: null,
  phoneHref: null,
  resumePdf: "/mohdsoheldeshmukh.pdf",
  photo: "/me.jpg",
  formspreeEndpoint: "https://formspree.io/f/mzdyozrv",

  social: [
    { name: "GitHub", url: "https://github.com/msd117", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/deshmukhmohdsohel", icon: "linkedin" },
    { name: "Stack Overflow", url: "https://stackoverflow.com/users/7755864/msd", icon: "stackoverflow" },
  ],

  navLinks: [
    { label: "Career", href: "#work" },
    { label: "AI", href: "#ai" },
    { label: "Stack", href: "#stack" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  // Shown in the code card at the top of the page
  profileCode: {
    web: ["React", "Angular", "Ext JS"],
    mobile: ["Ionic", "React Native", "Sencha Touch"],
    scripting: ["Python"],
    ai: ["Claude", "Cursor", "Superpowers", "BMAD"],
  },

  marquee: ["React", "Angular", "Ionic", "React Native", "Sencha Touch", "Ext JS", "Python"],

  careerStats: [
    { label: "Shipping since", value: "2017" },
    { label: "Promotions", value: "2" },
    { label: "Platforms", value: "Web + Mobile" },
  ],

  // Career, newest first. Dates are "YYYY-MM"; end: null means present.
  // tech: technologies; hot: technologies to highlight; domains: business domains.
  experience: [
    {
      id: "sse",
      role: "Senior Software Engineer",
      company: "Biz4Solutions Private Limited",
      companyShort: "Biz4Solutions",
      start: "2025-04",
      end: null,
      tag: "tag: v3 · HEAD → main",
      text: "Leading front-end and mobile work on enterprise products: React and Angular on the web, Ionic and React Native on mobile. Currently migrating a legacy-framework app to React Native, with Claude driving design and code.",
      tech: ["React Native", "React", "Angular", "Ionic", "Python", "Claude", "Cursor"],
      hot: ["React Native", "React"],
      domains: [],
    },
    {
      id: "sp",
      role: "Senior Programmer",
      company: "Biz4Solutions Private Limited",
      companyShort: "Biz4Solutions",
      start: "2022-04",
      end: "2025-06",
      tag: "tag: v2",
      text: "Built and maintained enterprise applications in Ionic, Angular, Sencha Touch and Ext JS, from data-heavy grids and forms to mobile apps in the field.",
      tech: ["Ionic", "Angular", "Sencha Touch", "Ext JS"],
      hot: [],
      domains: [],
    },
    {
      id: "p",
      role: "Programmer",
      company: "Biz4Solutions Private Limited",
      companyShort: "Biz4Solutions",
      start: "2019-07",
      end: "2022-04",
      tag: "merge",
      text: "Developed full-stack applications across web and mobile and integrated third-party and in-house APIs.",
      tech: ["Angular", "Ionic", "REST APIs"],
      hot: [],
      domains: [],
    },
    {
      id: "se",
      role: "Software Engineer",
      company: "Softworx Technologies",
      companyShort: "Softworx",
      start: "2017-03",
      end: "2019-07",
      tag: "init",
      text: "Mobile banking and UPI payment apps for the banking domain, built on Ionic v1 and Cordova: the UI in HTML5 and CSS3, all mobile-side code and the banking API integration.",
      tech: ["Ionic v1", "AngularJS", "Cordova", "HTML5 & CSS3"],
      hot: [],
      domains: ["Banking", "Mobile banking", "UPI payments"],
    },
  ],

  // The dashed branch on the career graph
  currentProject: {
    id: "rn",
    role: "React Native migration",
    company: "Biz4Solutions · current project",
    branch: "feat/react-native-migration",
    start: "2026-01",
    datesLabel: "2026 — in progress",
    lengthLabel: "AI-led",
    text: "Moving an existing app from a legacy framework to React Native. Claude drives the new design and much of the code; Superpowers and BMAD workflows keep planning, tests and review disciplined.",
    tech: ["React Native", "Claude", "Cursor", "Superpowers", "BMAD"],
    domains: [],
  },

  ai: {
    heading: "Built with AI.",
    headingMuted: "Owned by an engineer.",
    intro: "AI agents sit inside my workflow — brainstorming, planning, design, code and review. The judgment and the shipping stay mine.",
    utilities: {
      title: "Utilities built entirely with AI",
      text: "Internal tools taken from idea to working software end‑to‑end with AI agents — spec, code, tests and fixes.",
    },
    toolkit: [
      { name: "Claude", use: "Design and code" },
      { name: "Cursor", use: "AI-first editor" },
      { name: "Superpowers", use: "Agent skills workflow" },
      { name: "BMAD Method", use: "Agentic planning & delivery" },
    ],
    workflow: [
      { step: "brainstorm", text: "Shape the problem and the design with Claude" },
      { step: "plan", text: "Spec and stories with the BMAD agents" },
      { step: "build", text: "Test-first implementation with Superpowers skills in Cursor" },
      { step: "review", text: "Agent code review, then mine" },
      { step: "ship", text: "Verified, merged, released" },
    ],
  },

  stack: [
    { id: "react", title: "React & React Native", text: "One component model for the web and for native iOS and Android apps.", art: "tree", tone: "light" },
    { id: "angular", title: "Angular", text: "Large, structured web applications with typed modules that stay maintainable.", art: "window", tone: "light" },
    { id: "ionic", title: "Ionic & Cordova", text: "Hybrid apps since 2017 — from Ionic v1 mobile banking and UPI apps to today’s enterprise mobile.", art: "phones", tone: "dark" },
    { id: "sencha", title: "Sencha Touch & Ext JS", text: "Data-heavy enterprise interfaces — grids, forms and dashboards built to be used all day.", art: "grid", tone: "light" },
    { id: "python", title: "Python", text: "Scripts, services and automation behind the interfaces.", art: "terminal", tone: "light" },
    { id: "apis", title: "APIs & architecture", text: "Integrating complex APIs and shaping enterprise apps so web and mobile share one backend.", art: "nodes", tone: "accent" },
  ],

  education: [
    {
      period: "2013 — 2016",
      degree: "M.Tech, Computer Science & Engineering",
      school: "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad",
    },
    {
      period: "2008 — 2012",
      degree: "B.E., Information Technology",
      school: "P.E.S. College of Engineering, Aurangabad",
    },
  ],

  // Quote of the day: one is picked per calendar day. Add your own lines here.
  quotes: [
    { text: "Simplicity is prerequisite for reliability.", by: "Edsger W. Dijkstra" },
    { text: "First, solve the problem. Then, write the code.", by: "John Johnson" },
    { text: "Make it work, make it right, make it fast.", by: "Kent Beck" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", by: "Harold Abelson" },
    { text: "The best way to predict the future is to invent it.", by: "Alan Kay" },
    { text: "Talk is cheap. Show me the code.", by: "Linus Torvalds" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", by: "Martin Fowler" },
  ],
};

export default resumeData;
