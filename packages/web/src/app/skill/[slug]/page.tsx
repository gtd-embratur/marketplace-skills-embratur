import CopyInstallButton from '@/components/CopyInstallButton';
import type { Skill } from '@/types/skill';
import { registry } from '@embratur/skills-catalog';
import * as fs from 'fs';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as path from 'path';
import ReactMarkdown from 'react-markdown';

const skills = registry as Skill[];

export function generateStaticParams() {
  return skills.map((s) => ({ slug: s.name }));
}

export const dynamicParams = false;

async function getSkillContent(slug: string) {
  const skill = skills.find((s) => s.name === slug);
  if (!skill) return null;

  const contentPath = path.join(process.cwd(), '..', 'skills-catalog', skill.path);

  try {
    const content = fs.readFileSync(contentPath, 'utf-8');
    const rawMarkdown = content.replace(/^---\n[\s\S]*?\n---\n/, '');
    return { skill, content: rawMarkdown };
  } catch {
    return { skill, content: 'Conteúdo não disponível no momento.' };
  }
}

export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getSkillContent(slug);

  if (!data) {
    notFound();
  }

  const isPersona = data.skill.category === 'personas';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        <Link href="/" className="hover:text-embratur-500 transition-colors">
          Catálogo
        </Link>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-neutral-900 dark:text-neutral-50 font-medium">{data.skill.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`chip ${isPersona ? 'chip-embratur' : 'chip-neutral'}`}>
            {data.skill.category}
          </span>
        </div>
        <h1 className="text-display-sm text-neutral-900 dark:text-neutral-50 mb-3">
          {data.skill.name}
        </h1>
        <p className="text-text-lg text-neutral-500 dark:text-neutral-400">
          {data.skill.description}
        </p>
      </div>

      {/* Content */}
      <div className="card p-8 mb-8">
        <div
          className="prose prose-neutral dark:prose-invert max-w-none
          prose-headings:text-neutral-900 dark:prose-headings:text-neutral-50 prose-headings:font-semibold
          prose-h1:text-display-xs prose-h2:text-display-xs prose-h3:text-display-xs
          prose-p:text-text-md prose-p:text-neutral-600 dark:prose-p:text-neutral-300
          prose-code:text-embratur-600 dark:prose-code:text-embratur-300 prose-code:bg-embratur-50 dark:prose-code:bg-embratur-950/40 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-neutral-900 dark:prose-pre:bg-neutral-800 prose-pre:text-neutral-100 prose-pre:rounded-radius-lg
          prose-a:text-embratur-600 dark:prose-a:text-embratur-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-neutral-900 dark:prose-strong:text-neutral-50
          prose-li:text-neutral-600 dark:prose-li:text-neutral-300
          prose-ul:marker:text-embratur-500
          prose-ol:marker:text-embratur-500
          prose-hr:border-neutral-200 dark:prose-hr:border-neutral-800
          prose-blockquote:border-embratur-500 prose-blockquote:text-neutral-600 dark:prose-blockquote:text-neutral-300"
        >
          <ReactMarkdown>{data.content}</ReactMarkdown>
        </div>
      </div>

      {/* Install CTA */}
      <div className="card p-6 bg-neutral-50 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-text-md font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
              Instalar esta skill
            </h3>
            <p className="text-text-sm text-neutral-500 dark:text-neutral-400">
              Execute o comando abaixo no seu terminal.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-neutral-900 dark:bg-neutral-800 dark:border dark:border-neutral-700 text-neutral-100 px-4 py-2.5 rounded-radius-lg font-mono text-sm">
            <code className="flex-1">npx @embratur/agent-skills install -s {data.skill.name}</code>
            <CopyInstallButton skillName={data.skill.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
