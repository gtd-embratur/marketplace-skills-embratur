'use client';

import { useState } from 'react';

export default function InstallPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const CopyButton = ({ text, id }: { text: string; id: string }) => (
    <button
      onClick={() => copyToClipboard(text, id)}
      className="p-2 text-neutral-400 hover:text-white dark:hover:text-neutral-100 transition-colors"
      title="Copiar"
    >
      {copied === id ? (
        <svg
          className="w-4 h-4 text-embratur-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      )}
    </button>
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-embratur-50 to-white dark:from-embratur-950/40 dark:to-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="chip-embratur mb-6">Guia de Instalação</div>
          <h1 className="text-display-md text-neutral-900 dark:text-neutral-50 mb-4">
            Instalar Skills
          </h1>
          <p className="text-text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl">
            Comece a usar as skills da Embratur em minutos. Escolha o método que melhor se adapta ao
            seu fluxo.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* CLI Section */}
          <div className="card overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-embratur-500 rounded-radius-lg flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h2 className="text-display-xs text-neutral-900 dark:text-neutral-50">Via CLI</h2>
                  <p className="text-text-sm text-neutral-500 dark:text-neutral-400">
                    Método recomendado
                  </p>
                </div>
              </div>

              <p className="text-text-md text-neutral-600 dark:text-neutral-300 mb-6">
                Nossa CLI interativa permite listar, buscar e instalar skills diretamente no seu
                terminal.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 block">
                    Instalação global
                  </label>
                  <div className="flex items-center bg-neutral-900 dark:bg-neutral-800 dark:border dark:border-neutral-700 rounded-radius-lg overflow-hidden">
                    <code className="flex-1 p-4 text-sm font-mono text-neutral-100 overflow-x-auto">
                      npm install -g @embratur/agent-skills
                    </code>
                    <CopyButton text="npm install -g @embratur/agent-skills" id="global" />
                  </div>
                </div>

                <div>
                  <label className="text-text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 block">
                    Ou execute diretamente
                  </label>
                  <div className="flex items-center bg-neutral-900 dark:bg-neutral-800 dark:border dark:border-neutral-700 rounded-radius-lg overflow-hidden">
                    <code className="flex-1 p-4 text-sm font-mono text-neutral-100 overflow-x-auto">
                      npx @embratur/agent-skills
                    </code>
                    <CopyButton text="npx @embratur/agent-skills" id="npx" />
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-embratur-50 border border-embratur-200 dark:bg-embratur-950/40 dark:border-embratur-800 rounded-radius-lg p-4 flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-embratur-500 dark:text-embratur-400 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-text-sm text-embratur-700 dark:text-embratur-300">
                  A CLI guiará você por um assistente interativo para escolher as skills e o agente
                  de destino.
                </p>
              </div>
            </div>
          </div>

          {/* CLI Commands */}
          <div className="card p-8">
            <h2 className="text-display-xs text-neutral-900 dark:text-neutral-50 mb-6">
              Comandos Disponíveis
            </h2>
            <div className="space-y-4">
              {[
                { cmd: 'embratur-skills list', desc: 'Listar todas as skills disponíveis' },
                {
                  cmd: 'embratur-skills install -s squad-backend',
                  desc: 'Instalar uma skill específica',
                },
                {
                  cmd: 'embratur-skills install -s squad-backend squad-frontend',
                  desc: 'Instalar múltiplas skills',
                },
                { cmd: 'embratur-skills install -s my-skill -g', desc: 'Instalar globalmente' },
              ].map((item) => (
                <div
                  key={item.cmd}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                >
                  <code className="bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 px-3 py-1.5 rounded-radius-md text-sm font-mono whitespace-nowrap">
                    {item.cmd}
                  </code>
                  <span className="text-text-sm text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Manual Section */}
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-radius-lg flex items-center justify-center text-neutral-600 dark:text-neutral-300 font-bold text-lg">
                2
              </div>
              <div>
                <h2 className="text-display-xs text-neutral-900 dark:text-neutral-50">
                  Instalação Manual
                </h2>
                <p className="text-text-sm text-neutral-500 dark:text-neutral-400">
                  Copie os arquivos diretamente
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 block">
                  Claude Code / Cursor
                </label>
                <div className="flex items-center bg-neutral-900 dark:bg-neutral-800 dark:border dark:border-neutral-700 rounded-radius-lg overflow-hidden">
                  <code className="flex-1 p-4 text-sm font-mono text-neutral-100 overflow-x-auto whitespace-pre">
                    {`git clone https://github.com/gtd-embratur/marketplace-skills-embratur.git
cp -r marketplace-skills-embratur/packages/skills-catalog/skills/* .claude/skills/`}
                  </code>
                  <CopyButton
                    text={`git clone https://github.com/gtd-embratur/marketplace-skills-embratur.git\ncp -r marketplace-skills-embratur/packages/skills-catalog/skills/* .claude/skills/`}
                    id="manual-cc"
                  />
                </div>
              </div>

              <div>
                <label className="text-text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 block">
                  Lovable
                </label>
                <p className="text-text-sm text-neutral-600 dark:text-neutral-300">
                  Copie o conteúdo do arquivo{' '}
                  <code className="bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 px-1.5 py-0.5 rounded-md text-xs font-mono">
                    SKILL.md
                  </code>{' '}
                  e cole no editor de skills do Lovable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
