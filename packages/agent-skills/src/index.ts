import { getSkillByName, registry } from '@embratur/skills-catalog';
import chalk from 'chalk';
import { Command } from 'commander';
import * as fs from 'fs-extra';
import inquirer from 'inquirer';
import * as path from 'path';

const program = new Command();

program
  .name('embratur-skills')
  .description('CLI para gerenciar skills da Embratur para agentes de IA')
  .version('0.0.0');

program
  .command('list')
  .alias('ls')
  .description('Listar todas as skills disponíveis')
  .action(() => {
    console.log(chalk.bold('\nSkills Disponíveis:\n'));

    const categories = [...new Set(registry.map((s: any) => s.category))];

    for (const category of categories) {
      console.log(chalk.cyan.underline(`\n[${category}]`));
      const skills = registry.filter((s: any) => s.category === category);
      skills.forEach((skill: any) => {
        console.log(`  - ${chalk.green(skill.name)}: ${skill.description}`);
      });
    }
    console.log('');
  });

program
  .command('install')
  .alias('i')
  .description('Instalar uma skill')
  .option('-s, --skill <name>', 'Nome da skill para instalar')
  .option('-a, --agent <agent>', 'Agente alvo (claude-code, cursor, etc.)')
  .option('-g, --global', 'Instalar globalmente')
  .action(async (options) => {
    let skillName = options.skill;

    if (!skillName) {
      const { selectedSkill } = await inquirer.prompt([
        {
          type: 'list',
          name: 'selectedSkill',
          message: 'Selecione a skill para instalar:',
          choices: registry.map((s: any) => ({
            name: `${s.name} - ${s.description}`,
            value: s.name,
          })),
        },
      ]);
      skillName = selectedSkill;
    }

    const skill = getSkillByName(skillName);
    if (!skill) {
      console.error(chalk.red(`Skill '${skillName}' não encontrada.`));
      return;
    }

    console.log(chalk.green(`\nInstalando skill: ${skill.name}...\n`));

    // Determinar destino
    let targetDir = '';
    if (options.global) {
      targetDir = path.join(process.env.HOME || '~', '.embratur-skills');
    } else {
      targetDir = path.join(process.cwd(), '.embratur-skills');
    }

    await fs.ensureDir(targetDir);
    const sourcePath = path.join(__dirname, '..', 'skills-catalog', skill.path);
    const destPath = path.join(targetDir, skill.name);

    if (fs.existsSync(sourcePath)) {
      await fs.copy(sourcePath, destPath);
      console.log(chalk.green(`✓ Skill instalada em: ${destPath}`));
    } else {
      console.error(chalk.red('Arquivo da skill não encontrado no catálogo.'));
    }
  });

program.parse(process.argv);
