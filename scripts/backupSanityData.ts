import fs from 'fs';
import path from 'path';
import { FetchSanity } from '../lib/sanity/client';
import * as sanityScripts from '../lib/sanity/Queries';

const BACKUPS_DIR = path.join(process.cwd(), 'backups');

function ensureDirectoryExists(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function backupData() {
  const timestamp = new Date().toUTCString().replace(/[:.]/g, '-');
  const backupFolder = path.join(BACKUPS_DIR, `sanity-backup-${timestamp}`);
  const responseMap: Record<string, any> = {};
  console.log(`Saving backup data to ${backupFolder}`)

  ensureDirectoryExists(backupFolder);

  // Define parameterized queries
  const parameterizedQueries = [
    {
      queryKey: 'GetFacultyDetails',
      parameterSourceKey: 'GetAllFaculties',
      parameterKey: 'id',
      fetchKey: 'id'
    },
    {
      queryKey: 'queryEventById',
      parameterSourceKey: 'queryEventIds',
      parameterKey: 'eventId',
      fetchKey: 'id'
    },
  ];

  const parameterizedQueryKeys = parameterizedQueries.map((pq) => pq.queryKey);

  // Fetch non-parameterized queries
  for (const [key, query] of Object.entries(sanityScripts)) {
    if (parameterizedQueryKeys.includes(key)) continue;

    try {
      console.log(`Fetching data for query: ${key}`);
      const data = await FetchSanity(query);
      responseMap[key] = data;

      const fileName = `${key}-data.json`;
      const filePath = path.join(backupFolder, fileName);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(`Error fetching data for query "${key}":`, error);
    }
  }

  // Process parameterized queries
  for (const {
    queryKey,
    parameterSourceKey,
    parameterKey,
    fetchKey
  } of parameterizedQueries) {
    try {
      console.log(`Processing parameterized query: ${queryKey}`);
      const parameters = responseMap[parameterSourceKey];
      if (
        !parameters ||
        !Array.isArray(parameters) ||
        parameters.length === 0
      ) {
        console.warn(`No parameters found for query: ${queryKey}`);
        continue;
      }

      const data = await Promise.all(

        parameters.map(async (param: any) => {
          const query = sanityScripts[queryKey as keyof typeof sanityScripts];
          return await FetchSanity(query, {
            [fetchKey]: param[parameterKey],
          });
        })

      );
      responseMap[queryKey] = data.flat();

      const fileName = `${queryKey}-data.json`;
      const filePath = path.join(backupFolder, fileName);
      fs.writeFileSync(filePath, JSON.stringify(responseMap[queryKey], null, 2));
    } catch (error) {
      console.error(
        `Error processing parameterized query "${queryKey}":`,
        error
      );
    }
  }

  console.log('Backup process completed.');
}

backupData().catch((error) => {
  console.error('Error during backup process:', error);
  process.exit(1);
});
