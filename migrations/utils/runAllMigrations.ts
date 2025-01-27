import chalk from 'chalk';
import logUpdate from 'log-update';
import { migrateAnnouncements } from '../MigrationFiles/announcements.ts';
import { migrateTenders } from '../MigrationFiles/tenders.ts';
import { migrateFaculties } from '../MigrationFiles/faculty_profile.ts';
import { deleteAllDocuments } from './deleteAllDocuments.ts';

function logStep(message: string, color: chalk.Chalk = chalk.blue) {
  logUpdate(color.bold(message));
}

async function runAllMigrations() {
  try {
    logStep('Deleting existing data...');
    const documentsDeleted = await deleteAllDocuments();

    logStep('Starting migrations...');

    const migrationTasks = [
      {
        name: 'announcements',
        task: migrateAnnouncements,
      },
      {
        name: 'tenders',
        task: migrateTenders,
      },
      {
        name: 'faculties',
        task: migrateFaculties,
      },
    ];

    if (documentsDeleted) {
      for (let i = 0; i < migrationTasks.length; i++) {
        const { name, task } = migrationTasks[i];

        logStep(
          `[${i + 1}/${migrationTasks.length}] Starting ${name} migration...`
        );
        console.time(`${name} migration`);
        await task();
        logUpdate.done();
        console.timeEnd(`${name} migration`);
        console.log(
          chalk.green(
            `[${i + 1}/${migrationTasks.length}] ${name} migration completed successfully!\n`
          )
        );
      }

      console.log(chalk.green('All migrations completed successfully!'));
    }
  } catch (error) {
    console.error(chalk.red('Error running migrations:'));
    console.error(chalk.red(error instanceof Error ? error.message : error));
    process.exit(1);
  } finally {
    process.exit();
  }
}

runAllMigrations();
