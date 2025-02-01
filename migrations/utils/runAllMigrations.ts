import chalk from 'chalk';
import { migrateAnnouncements } from '../MigrationFiles/announcements.ts';
import { migrateTenders } from '../MigrationFiles/tenders.ts';
import { migrateFaculties } from '../MigrationFiles/faculty_profile.ts';
import { deleteAllDocuments } from './deleteAllDocuments.ts';
import { migrateContactData } from '../MigrationFiles/contact_info.ts';
import { migrateAnnualReports } from '../MigrationFiles/annual_reports.ts';
import { migrateAbout } from '../MigrationFiles/about.ts';
import { migrateAcademics } from '../MigrationFiles/academics.ts';
import { migrateSeatMatrix } from '../MigrationFiles/admission.ts';
import { migrateFormer } from '../MigrationFiles/former.ts';
import { migrateGalleryImages } from '../MigrationFiles/gallery.ts';
import { migrateHomePage } from '../MigrationFiles/homePage.ts';
import { migrateJobs } from '../MigrationFiles/jobs.ts';
import { migrateMagazines } from '../MigrationFiles/magazines.ts';
import { migrateClubs } from '../MigrationFiles/clubs.ts';
import { migrateNirf } from '../MigrationFiles/nirf.ts';
import { migrateCampus } from '../MigrationFiles/campus.ts';
import { migrateAllProfiles } from '../MigrationFiles/profiles.ts';

function log(message: string, color: chalk.Chalk = chalk.blue) {
  console.log(color.bold(message));
}

async function runAllMigrations() {
  try {
    log('Deleting existing data...');
    const documentsDeleted = await deleteAllDocuments();

    const migrationTasks = [      
      {
        name: 'about',
        task: migrateAbout,
      },
      {
        name: 'academics',
        task: migrateAcademics,
      },
      {
        name: 'admission',
        task: migrateSeatMatrix,
      },
      {
        name: 'announcements',
        task: migrateAnnouncements,
      },
      {
        name: 'annual_reports',
        task: migrateAnnualReports,
      },
      {
        name: 'campus',
        task: migrateCampus,
      },
      {
        name: 'clubs',
        task: migrateClubs,
      },
      {
        name: 'contact_info',
        task: migrateContactData,
      },
      {
        name: 'faculties',
        task: migrateFaculties,
      },
      {
        name: 'former',
        task: migrateFormer,
      },
      {
        name: 'homepage',
        task: migrateHomePage,
      },
      {
        name: 'jobs',
        task: migrateJobs,
      },
      {
        name: 'magazines',
        task: migrateMagazines,
      },
      {
        name: 'nirf',
        task: migrateNirf,
      },
      {
        name: 'profiles',
        task: migrateAllProfiles,
      },
      {
        name: 'tenders',
        task: migrateTenders,
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
