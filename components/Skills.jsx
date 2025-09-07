import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Settings, Globe, Database, TestTube, Cloud } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        "JavaScript",
        "TypeScript",
        "SQL",
        "PL/SQL",
        "PHP",
        "Java",
        "Kotlin",
        "Solidity",
      ],
    },
    {
      icon: Globe,
      title: "Frontend & JS Frameworks",
      skills: [
        "React.js",
        "Next.js",
        "Vanilla JS",
        "Tailwind CSS",
        "Bun.js",
        "Figma (design-to-dev)",
        "HTML",
        "CSS",
      ],
    },
    {
      icon: Database,
      title: "Backend & Web Frameworks",
      skills: [
        "Node.js",
        "Express.js",
        "Spring Boot",
        "Nestjs",
        "RESTful APIs",
        "WebSockets / real-time systems",
      ],
    },
    {
      icon: Database,
      title: "Databases & Data / ETL",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "SQL (advanced queries)",
        "Oracle Database Administration",
        "PL/SQL (Oracle)",
        "Pentaho Data Integration (PDI)",
      ],
    },
    {
      icon: Settings,
      title: "DevOps, CI/CD & Infra",
      skills: [
        "Docker",
        "Docker Compose",
        "Kubernetes",
        "CI/CD (Jenkins, GitHub Actions)",
        "Git",
        "Terraform",
        "Containerization & image tooling",
        "Agile workflows",
      ],
    },
    {
      icon: Settings,
      title: "Architecture & Systems",
      skills: [
        "Microservices architecture",
        "Event-driven architecture",
        "Kafka",
        "Kafka Streams",
        "Scalable backend design",
        "Message-driven & async patterns",
        "Cloud-native patterns (container-first design)",
      ],
    },
    {
      icon: Cloud,
      title: "Blockchain & Web3",
      skills: [
        "Solidity (smart contracts)",
        "Chainlink / decentralized oracles",
        "Running Chainlink node",
      ],
    },
    {
      icon: Cloud,
      title: "BaaS / Cloud Services & Tools",
      skills: ["Supabase", "Firebase", "Vercel", "Netlify"],
    },
    {
      icon: Code,
      title: "Mobile & Other",
      skills: [
        "Android (XML layouts)",
        "Jetpack Compose (learning)",
        "Kotlin",
        "UI/UX fundamentals",
      ],
    },
    {
      icon: Code,
      title: "Design Patterns & Principles",
      skills: [
        "SOLID principles",
        "Creational design patterns",
        "Software architecture best practices",
        "Clean code practices",
        "Code reviews & refactoring",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern development stack with focus
            on scalable web applications and DevOps practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
