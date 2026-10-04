import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/site/ProjectArticle";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Abdelaziz Hachemi`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) notFound();
  return <ProjectArticle project={project} />;
}
