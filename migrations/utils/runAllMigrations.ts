import chalk from 'chalk';
import { migrateAnnouncements } from '../MigrationFiles/announcements.ts';
import { migrateTenders } from '../MigrationFiles/tenders.ts';
import { migrateFaculties } from '../MigrationFiles/faculty_profile.ts';
import { deleteAllDocuments } from './deleteAllDocuments.ts';
import { migrateContactData } from '../MigrationFiles/contact_info.ts';

function log(message: string, color: chalk.Chalk = chalk.blue) {
  console.log(color.bold(message));
}

async function runAllMigrations() {
  try {
    log('Deleting existing data...');
    const documentsDeleted = await deleteAllDocuments();

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
      {
        name: 'contact_info',
        task: migrateContactData,
      },
    ];
    
    if (documentsDeleted) {
      log('\nStarting migrations...');
      for (let i = 0; i < migrationTasks.length; i++) {
        const { name, task } = migrationTasks[i];

        log(
          `[${i + 1}/${migrationTasks.length}] Starting ${name} migration...`
        );
        console.time(`${name} migration`);
        await task();
        // logUpdate.done();
        console.timeEnd(`${name} migration`);
        log(
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
