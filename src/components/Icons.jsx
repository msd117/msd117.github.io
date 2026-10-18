// Stroke icons drawn in one consistent weight. All decorative: callers supply accessible labels.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

export const ArrowUpRight = ({ size = 15, width = 2.2 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth={width}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const ArrowRight = ({ size = 17, width = 2.2 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth={width}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const Mail = ({ size = 18 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth={2}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const Download = ({ size = 17 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth={2}>
    <path d="M12 4v11" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 20h14" />
  </svg>
);

export const Wrench = ({ size = 34 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.7}>
    <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 1.3-1.3a4 4 0 0 0-5-5L3 10l8-8 3 3z" />
  </svg>
);

export const Check = ({ size = 12, color = "#B8E986" }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth={3} stroke={color}>
    <path d="m5 12 5 5 9-10" />
  </svg>
);

export const Spark = () => (
  <svg aria-hidden="true" focusable="false" width="0.5em" height="0.5em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c.6 6.5 5.5 11.4 12 12-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0z" />
  </svg>
);

const GitHub = ({ size = 20 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

const LinkedIn = ({ size = 19 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const StackOverflow = ({ size = 19 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8}>
    <path d="M5 15v5h13v-5" />
    <path d="M8.5 16.5h7" />
    <path d="m8.8 13.2 6.9 1.4" />
    <path d="m9.8 9.7 6.4 3" />
    <path d="m11.8 6.4 5.4 4.5" />
    <path d="m15 3.4 4 5.6" />
  </svg>
);

const socialIcons = { github: GitHub, linkedin: LinkedIn, stackoverflow: StackOverflow };

export const SocialIcon = ({ name }) => {
  const Icon = socialIcons[name];
  return Icon ? <Icon /> : null;
};
