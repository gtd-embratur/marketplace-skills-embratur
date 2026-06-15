'use client';

import type { Skill } from '@/types/skill';
import Link from 'next/link';

export default function SkillCard({ skill }: { skill: Skill }) {
  const isPersona = skill.category === 'personas';

  return (
    <Link
      href={`/skill/${skill.name}`}
      className="group card p-5 hover:shadow-shadow-md hover:border-embratur-200 dark:hover:border-embratur-700 transition-all duration-200 flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`chip ${isPersona ? 'chip-embratur' : 'chip-neutral'}`}>
          {skill.category}
        </span>
        <svg
          className="w-4 h-4 text-neutral-300 dark:text-neutral-600 group-hover:text-embratur-500 dark:group-hover:text-embratur-400 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <h3 className="text-text-md font-semibold text-neutral-900 dark:text-neutral-50 group-hover:text-embratur-600 dark:group-hover:text-embratur-400 transition-colors mb-2">
        {skill.name}
      </h3>
      <p className="text-text-sm text-neutral-500 dark:text-neutral-400 line-clamp-3 flex-grow">
        {skill.description}
      </p>
    </Link>
  );
}
