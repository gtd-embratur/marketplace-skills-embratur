import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const registryPath = path.join(__dirname, '..', 'registry.json');

if (!fs.existsSync(registryPath)) {
  throw new Error('Registry not found. Run generate:registry first.');
}

export const registry = JSON.parse(fs.readFileSync(registryPath, 'utf-8'));

export function getSkillByName(name: string) {
  return registry.find((skill: any) => skill.name === name);
}

export function getSkillsByCategory(category: string) {
  return registry.filter((skill: any) => skill.category === category);
}
