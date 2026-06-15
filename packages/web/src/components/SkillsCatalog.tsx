'use client';

import SkillCard from '@/components/SkillCard';
import type { Skill } from '@/types/skill';
import { useState } from 'react';

export default function SkillsCatalog({ skills }: { skills: Skill[] }) {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [...new Set(skills.map((s) => s.category))];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeFilter === 'todos' || skill.category === activeFilter;
    const matchesSearch =
      searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filterOptions = [
    { value: 'todos', label: 'Todos', count: skills.length },
    ...categories.map((cat) => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
      count: skills.filter((s) => s.category === cat).length,
    })),
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-radius-lg overflow-x-auto">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`px-4 py-2 text-sm font-medium rounded-radius-md whitespace-nowrap transition-all ${
                activeFilter === opt.value
                  ? 'bg-white text-neutral-900 shadow-shadow-xs dark:bg-neutral-800 dark:text-neutral-50'
                  : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
              }`}
            >
              {opt.label}
              <span
                className={`ml-1.5 text-xs ${
                  activeFilter === opt.value
                    ? 'text-embratur-500'
                    : 'text-neutral-400 dark:text-neutral-500'
                }`}
              >
                {opt.count}
              </span>
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Buscar skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10"
          />
        </div>
      </div>

      {filteredSkills.length === 0 ? (
        <div className="text-center py-16">
          <svg
            className="w-12 h-12 text-neutral-300 dark:text-neutral-700 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-text-lg text-neutral-500 dark:text-neutral-400">
            Nenhuma skill encontrada.
          </p>
          <p className="text-text-sm text-neutral-400 dark:text-neutral-500 mt-1">
            Tente ajustar os filtros ou a busca.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      )}
    </section>
  );
}
