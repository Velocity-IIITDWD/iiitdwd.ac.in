import chalk from 'chalk';
import logUpdate from 'log-update';
import { migrateAnnouncements } from '../announcements.ts';
import { migrateTenders } from '../tenders.ts';

async function runAllMigrations() {
  try {
    logUpdate(chalk.bold.blue('Starting migrations...\n'));

    // Run announcements migration
    logUpdate(chalk.bold.blue('Starting announcements migration...'));
    await migrateAnnouncements();
    logUpdate(
      chalk.bold.green('Announcements migration completed successfully!\n')
    );

    // Run tenders migration
    logUpdate(chalk.bold.blue('Starting tenders migration...'));
    await migrateTenders();
    logUpdate(chalk.bold.green('Tenders migration completed successfully!\n'));

    logUpdate(chalk.bold.green('All migrations completed successfully!'));
  } catch (error) {
    logUpdate(chalk.bold.red('Error running migrations:'));
    console.error(error);
  } finally {
    logUpdate.done(); // Stop dynamic updates
  }
}

runAllMigrations();
