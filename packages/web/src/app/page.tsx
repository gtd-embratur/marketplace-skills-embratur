import SkillsCatalog from '@/components/SkillsCatalog';
import type { Skill } from '@/types/skill';
import { registry } from '@embratur/skills-catalog';
import Link from 'next/link';

export default function Home() {
  const skills = registry as Skill[];

  return (
    <div>
      <section className="bg-gradient-to-b from-embratur-50 to-white dark:from-embratur-950/40 dark:to-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="chip-embratur mb-6">Marketplace de IA</div>
            <h1 className="text-display-lg text-neutral-900 dark:text-neutral-50 mb-4">
              Embratur Skills
            </h1>
            <p className="text-text-lg text-neutral-500 dark:text-neutral-400 mb-8 max-w-2xl">
              Extenda seus agentes de codificação com skills validadas, seguras e prontas para
              produção.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/install" className="btn-primary">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Instalar Skills
              </Link>
              <a
                href="https://github.com/gtd-embratur/marketplace-skills-embratur"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <SkillsCatalog skills={skills} />
    </div>
  );
}
