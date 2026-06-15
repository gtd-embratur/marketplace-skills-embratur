import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as yaml from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SkillManifest {
  name: string;
  description: string;
  category: string;
  path: string;
}

function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  return yaml.parse(match[1]) || {};
}

export function generateRegistry() {
  const skillsDir = path.join(__dirname, '..', 'skills');
  const categories = fs
    .readdirSync(skillsDir)
    .filter((file) => fs.statSync(path.join(skillsDir, file)).isDirectory());
  const registry: SkillManifest[] = [];

  for (const category of categories) {
    const categoryPath = path.join(skillsDir, category);
    const skills = fs
      .readdirSync(categoryPath)
      .filter((file) => fs.statSync(path.join(categoryPath, file)).isDirectory());

    for (const skill of skills) {
      const skillPath = path.join(categoryPath, skill, 'SKILL.md');
      if (fs.existsSync(skillPath)) {
        const content = fs.readFileSync(skillPath, 'utf-8');
        const frontmatter = parseFrontmatter(content);

        registry.push({
          name: frontmatter.name || skill,
          description: frontmatter.description || `Skill: ${skill}`,
          category: category.replace(/[()]/g, ''),
          path: `skills/${category}/${skill}/SKILL.md`,
        });
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, '..', 'registry.json'), JSON.stringify(registry, null, 2));
  console.log(`Registry generated with ${registry.length} skills.`);
}

if (process.argv[1] && process.argv[1].endsWith('generate-registry.ts')) {
  generateRegistry();
}
