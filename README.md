# Embratur Skills Marketplace

O **Marketplace de Skills da Embratur** é um registry seguro e validado de capabilities para agentes de IA de codificação profissional. Estenda o **Claude Code**, **Cursor**, **Copilot** e mais com absoluta confiança.

## O que são Skills?

Skills são instruções e recursos empacotados que estendem as capacidades de agentes de IA. Pense nelas como **plugins para seu assistente de IA** — elas ensinam seu agente novos fluxos de trabalho, padrões e conhecimento especializado.

## Segurança e Confiança

A segurança do seu ambiente é nossa prioridade máxima. Diferente de marketplaces abertos, o **Embratur Skills** é uma biblioteca gerenciada e blindada: 100% open source (sem binários), análise estática no CI/CD, integridade imutável via lockfiles e hashing de conteúdo, e prompts curados por humanos.

## Agentes Suportados

- **Claude Code**
- **Cursor**
- **GitHub Copilot**
- **Lovable**
- **Replit Agent**
- **Qualquer outro agente que siga o padrão SKILL.md**

## Catálogo de Skills

### 🧑‍💼 Personas (A Fábrica)

Skills que representam times temáticos com personas especializadas.

| Skill                   | Descrição                                  |
| ----------------------- | ------------------------------------------ |
| `squad-arquitetura`     | Desenhar feature antes de codar            |
| `squad-backend`         | Implementar API, banco, lógica de servidor |
| `squad-frontend`        | Construir telas, componentes, UX           |
| `squad-plataforma`      | Cloud, CI/CD, observabilidade              |
| `squad-qualidade`       | Testes, segurança, regressão               |
| `squad-produto`         | Escopo, priorização, lançamento            |
| `squad-documentacao`    | README, ADR, OpenAPI, demos                |
| `squad-conteudo-ux`     | Microcopy, voz, naming, taxonomia          |
| `squad-metricas`        | Tracking, KPIs, A/B, DORA                  |
| `squad-revisao-critica` | Pre-mortem, red team, debate               |

### 🛠️ Processo (O Fluxo)

Skills que organizam o ciclo de vida do desenvolvimento.

| Skill                   | Descrição                                 |
| ----------------------- | ----------------------------------------- |
| `onboarding-de-projeto` | Primeira vez em um projeto                |
| `mapa-arquitetural`     | Antes de refatorações grandes             |
| `spec-rastreavel`       | Antes de codar feature não-trivial        |
| `modelo-de-ameacas`     | Antes de feature sensível (auth, PII)     |
| `mesa-de-personas`      | Tarefa que precisa de múltiplas personas  |
| `aceite-contra-spec`    | Depois de implementar                     |
| `revisao-pre-pr`        | Antes de PR                               |
| `auditoria-do-setup`    | Auditoria do setup do projeto             |
| `evolucao-semanal`      | Escolhe uma capacidade nova pra construir |

## Início Rápido

### Instalar Skills no Seu Projeto

```bash
npx @embratur/agent-skills
```

Isso lança um assistente interativo:

1. **Escolha Ação** — "Instalar skills" ou "Atualizar skills instaladas"
2. **Navegue e Selecione** — Filtre por categoria ou pesquise
3. **Escolha os agentes** — Selecione os agentes alvo (Cursor, Claude Code, etc.)
4. **Método de instalação** — Copiar (recomendado) ou Symlink
5. **Escopo** — Global (home do usuário) ou Local (apenas no projeto)

### Opções da CLI

```bash
# Modo interativo (padrão)
npx @embratur/agent-skills

# Listar skills disponíveis
embratur-skills list

# Instalar uma skill específica
embratur-skills install -s squad-backend

# Instalar múltiplas skills
embratur-skills install -s squad-backend squad-frontend

# Instalar globalmente
embratur-skills install -s my-skill -g
```

### Instalação Global (Opcional)

```bash
npm install -g @embratur/agent-skills
embratur-skills
```

## Estrutura do Projeto

```
marketplace-skills-embratur/
├── packages/
│   ├── skills-catalog/       # Catálogo de skills
│   │   └── skills/
│   │       ├── (personas)/   # Skills de personas
│   │       └── (processo)/   # Skills de processo
│   └── agent-skills/         # CLI para gerenciar skills
├── package.json
├── nx.json
└── README.md
```

## Como Contribuir

Veja [`CONTRIBUTING.md`](CONTRIBUTING.md) para adicionar uma skill nova, propor mudança ou reportar bug.

## Guia Operacional

Para o manual de uso do dia a dia, veja [`GUIA.md`](GUIA.md).

## Licença

MIT — veja [`LICENSE`](LICENSE).
