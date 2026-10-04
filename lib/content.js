export const shell = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export const profile = {
  name: "Abdelaziz Hachemi",
  role: "Software engineer",
  email: "az.hachemi@esi-sba.dz",
  phone: "+213 798 460 964",
  phoneHref: "tel:+213798460964",
  location: "Sidi Bel Abbès, Algeria",
  github: "https://github.com/AbdelazizHachemi",
  linkedin: "https://www.linkedin.com/in/abdelaziz-hachemi-1b4069249/",
  resume: "/AbdelazizResume.pdf",
  site: "https://portfolio-mauve-two-33.vercel.app/",
};

export const siteMeta = {
  title: "Abdelaziz Hachemi — Software engineer",
  description:
    "Full-stack and platform engineer in Sidi Bel Abbès. Web products, event-driven services, and the pipelines that ship them. Open to remote roles and client work.",
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Software Engineer",
  email: profile.email,
  telephone: "+213798460964",
  url: profile.site,
  sameAs: [profile.github, profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sidi Bel Abbès",
    addressCountry: "DZ",
  },
};

export const nav = [
  { id: "work", label: "Work" },
  { id: "practice", label: "Practice" },
  { id: "path", label: "Path" },
  { id: "contact", label: "Contact" },
];

export const ticker = [
  "Next.js",
  "React",
  "TypeScript",
  "NestJS",
  "Spring Boot",
  "Kafka",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Terraform",
  "Trivy",
];

export const facts = [
  { label: "School", value: "ESI-SBA, information systems and web" },
  { label: "Based", value: "Sidi Bel Abbès, Algeria" },
  { label: "Working", value: "Remote — roles and clients" },
];

export const roles = [
  "Software engineer",
  "DevOps engineer",
  "Infrastructure engineer",
  "Backend engineer",
  "Platform engineer",
  "Full-stack engineer",
];

export const heroPills = [
  { label: "Next.js", tone: "green" },
  { label: "NestJS", tone: "blue" },
  { label: "Kubernetes", tone: "pink" },
  { label: "Kafka", tone: "amber" },
];

export const projects = [
  {
    id: "devlearnops",
    index: "01",
    title: "DevLearnOps",
    kind: "Product",
    hint: "Labs",
    year: "2026",
    summary:
      "A challenge platform for DevOps practice. You pick a lab, get an isolated environment, and work in a browser terminal until the check passes.",
    proof:
      "Built for Kubernetes, Docker, and Terraform. Scored like a challenge, not taught like a course.",
    steps: ["Pick a lab", "Isolated environment", "Browser terminal", "Score"],
    stack: ["Kubernetes", "Docker", "Terraform", "k3s"],
    links: [{ label: "devlearnops.me", href: "https://devlearnops.me" }],
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "DevLearnOps is a challenge platform for DevOps, closer to a scored lab than a video course. You pick a challenge in Kubernetes, Docker, or Terraform. The platform gives you an isolated environment and a browser terminal. A check at the end tells you whether the work is done.",
          "The point is practice on a real cluster shape: a namespace, a terminal, a validator, and a score. If the lab feels fake, it is not worth opening.",
        ],
      },
      {
        heading: "What production means here",
        paragraphs: [
          "Each lab has to stay inside its own boundary. A learner should not be able to see another learner’s namespace, and a finished check should be the same check every time, not a screenshot of a happy path.",
          "The product site is devlearnops.me. I am building it as the thing I ship, next to the pipeline I use to show how a service rolls out.",
        ],
      },
    ],
  },
  {
    id: "zero-downtime",
    index: "02",
    title: "Zero-downtime pipeline",
    kind: "Pipeline",
    hint: "Kubernetes",
    year: "2026",
    summary:
      "One NestJS API on Kubernetes. A green CI run on main builds a git-SHA image, rolls it with no replica removed early, smokes the probes, and undoes the rollout if that fails.",
    proof:
      "On 29 September 2026, a second SHA rollout on one k3d node answered 466 requests, 10 per second. All of them returned HTTP 200.",
    steps: ["Lint and test", "SHA image", "Rolling deploy", "Smoke or undo"],
    stack: ["NestJS", "PostgreSQL", "Docker", "k3d", "GitHub Actions", "GHCR", "Trivy"],
    links: [
      {
        label: "Source",
        href: "https://github.com/AbdelazizHachemi/zero-downtime-pipeline",
      },
    ],
    sections: [
      {
        heading: "The contract",
        paragraphs: [
          "One NestJS API and Postgres. A pull request never touches the cluster. A green CI run on main is what starts the deploy: lint, test, a Trivy filesystem scan, and kubeconform. The image is tagged with the git SHA and pushed to GHCR. The Deployment does not use a moving :latest tag.",
          "Staging and production are the same namespace, zdp, on one k3d cluster. Production is a GitHub Environment approval plus a second smoke, not a second cluster.",
        ],
      },
      {
        heading: "Why the rollout does not drop traffic",
        paragraphs: [
          "The Deployment runs three replicas with maxUnavailable 0 and maxSurge 1. Kubernetes only puts a pod in the Service after the readiness probe passes. Readiness calls GET /ready, which runs SELECT 1 against Postgres. Liveness calls GET /health and does not touch the database, so a database blip does not restart every pod.",
          "If the new pod never becomes ready, the old pods stay in the Service. A failed smoke runs kubectl rollout undo and smokes the previous SHA.",
        ],
      },
      {
        heading: "What I measured",
        paragraphs: [
          "On 29 September 2026, on one k3d node, a second SHA rollout answered 466 requests to /version at 10 per second. Every response was HTTP 200. The first body was the old SHA. The last body was the new one.",
          "A failure demo set READY_FAIL=true so /ready returned 503 before it touched the database. The new pod stayed unready. The old pods kept serving. Rollback brought back the previous SHA.",
        ],
      },
    ],
  },
  {
    id: "adhahi",
    index: "03",
    title: "Adhahi Monitor",
    kind: "Tool",
    hint: "Extension + bot",
    year: "2026",
    summary:
      "A Chrome extension and a Telegram bot that watch sheep-booking quotas on adhahi.dz. Pick a wilaya. It tells you when a slot opens.",
    proof:
      "Subscriptions live in Redis. The bot has a health check, and a home relay for when the site is slow from the cloud.",
    steps: ["Choose a wilaya", "Watch the quota", "Notify", "Open booking"],
    stack: ["Chrome", "JavaScript", "Telegram", "Node.js", "Redis"],
    links: [
      {
        label: "Source",
        href: "https://github.com/AbdelazizHachemi/adhahi-monitor-chrome-extension",
      },
    ],
    sections: [
      {
        heading: "The job",
        paragraphs: [
          "Adhahi Monitor watches booking quotas on adhahi.dz. Slots open and fill. The useful product is a ping when your wilaya has a place, not a dashboard you have to stare at.",
          "There are two clients. A Chrome extension for someone at a computer, and a Telegram bot for everyone else. Both use the same idea: pick a wilaya, check on an interval, notify, link to the registration page.",
        ],
      },
      {
        heading: "What has to stay up",
        paragraphs: [
          "Subscriptions live in Upstash Redis so a restart does not forget who asked to be notified. The bot exposes a health check. The default port is 3847 so it does not collide with other local apps, and on a host that sets PORT the health server follows that.",
          "adhahi.dz is slow from some networks. The bot can fall back from curl to Node’s HTTPS client, and it can call a small relay at home when the cloud cannot reach the site. The Telegram token stays in the host environment. It is not committed.",
        ],
      },
    ],
  },
  {
    id: "patient-system",
    index: "04",
    title: "Patient Management System",
    kind: "Services",
    hint: "Spring · Kafka",
    year: "2026",
    summary:
      "A Patient Management System built with Spring Boot services for a clinic workflow: patients, billing, and analytics. Patient data sits in Postgres. Analytics is wired to Kafka. One Compose file starts the stack.",
    proof:
      "Patient service on Postgres, analytics pointed at Kafka, billing in its own process. The shared API contracts live in their own module.",
    steps: ["Patient API", "Postgres", "Kafka", "Billing and analytics"],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker Compose", "Microservices", "AWS"],
    links: [
      {
        label: "Source",
        href: "https://github.com/AbdelazizHachemi/patient-management-system",
      },
    ],
    sections: [
      {
        heading: "The split",
        paragraphs: [
          "Three Spring Boot services: patients, billing, and analytics, plus a shared API contracts module. Patient data sits in Postgres. Analytics is wired to Kafka. Billing is its own process. One Compose file starts Postgres, Kafka, and the three services.",
          "The patient service gets its database URL from the environment and waits on Postgres. Analytics waits until Kafka is healthy. That is the production habit: a service does not pretend to be ready before the thing it depends on is up.",
        ],
      },
      {
        heading: "Why it is split",
        paragraphs: [
          "Billing and analytics do not need to share the patient service’s database. The contracts module is the agreement between them. Kafka is there so a change in the clinic workflow can be recorded without a synchronous chain of HTTP calls for every event.",
        ],
      },
    ],
  },
  {
    id: "delivery-platform",
    index: "05",
    title: "Delivery platform",
    kind: "Services",
    hint: "Microservices",
    year: "2026",
    summary:
      "A delivery backend split into discovery, a gateway, and services for orders, users, payments, and tracking. The parts that can wait talk through Kafka.",
    proof:
      "Each service owns its data and can be deployed on its own. Orders, payments, and delivery do not share one database.",
    steps: ["Gateway", "Orders", "Kafka", "Pay and track"],
    stack: ["Java", "Spring Boot", "Node.js", "Kafka", "PostgreSQL", "MongoDB", "Docker"],
    links: [
      {
        label: "Source",
        href: "https://github.com/AbdelazizHachemi/Delivery-Management-Platform-Backend",
      },
    ],
    sections: [
      {
        heading: "The split",
        paragraphs: [
          "A delivery backend with a discovery server, an API gateway, and services for orders, users, payments, and tracking. Orders publish what happened. Payment and delivery consume those events instead of blocking the request that created the order.",
          "The stack is Spring Boot for the core services, Node on some of them, Postgres and MongoDB, and Docker around the processes. Each service is meant to own its data and to be deployable on its own.",
        ],
      },
      {
        heading: "What matters in production",
        paragraphs: [
          "The gateway is the only door a client should know. Discovery is how the services find each other when a replica moves. Kafka is the boundary between the work that has to finish now and the work that can finish next.",
          "A payment that is slow should not freeze order creation. An order that exists should still be trackable if the payment service is restarting. That is the reason for the split, not the number of repositories.",
        ],
      },
    ],
  },
];

export const practice = [
  {
    title: "Interfaces",
    items: "Next.js, React, TypeScript, Tailwind CSS",
  },
  {
    title: "Services",
    items: "Node.js, NestJS, Spring Boot, Kafka, REST",
  },
  {
    title: "Data",
    items: "PostgreSQL, MongoDB, SQL, Oracle, PL/SQL",
  },
  {
    title: "Platform",
    items: "Docker, Kubernetes, GitHub Actions, Terraform, Trivy",
  },
  {
    title: "Also",
    items: "Solidity, Chainlink, Android, Kotlin, Pentaho",
  },
];

export const path = [
  {
    when: "Now",
    title: "DevLearnOps",
    place: "Independent · remote",
    text: "A labs product for DevOps practice: isolated environments, a browser terminal, and a score. Next to it, a deployment pipeline that shows how a service rolls out without dropping requests.",
    stack: "Kubernetes, Docker, Terraform, NestJS, GitHub Actions",
  },
  {
    when: "2024 — now",
    title: "Freelance web developer",
    place: "Private clients · remote",
    text: "Sites and web apps for small businesses, including a legal consultations site. Responsive interfaces, payments and integrations, and the upkeep after launch.",
    stack: "Next.js, React, Tailwind, Supabase, Node.js",
  },
  {
    when: "2024",
    title: "Intern",
    place: "Algérie Télécom · Sidi Bel Abbès",
    text: "Telecom systems and internal tools. Feature work, troubleshooting, and documentation with the engineers on the team.",
    stack: "PL/SQL, SQL, Docker, Bash, Git",
  },
  {
    when: "2021 — 2026",
    title: "Information systems and web",
    place: "ESI-SBA · École Supérieure en Informatique",
    text: "Engineering program in Sidi Bel Abbès, focused on information systems and web technologies.",
  },
];
