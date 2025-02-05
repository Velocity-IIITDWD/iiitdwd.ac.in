import { client } from '../utils/sanity';
import { jobsData } from '../../data/jobs';

export const migrateJobs = async () => {
  const transaction = client.transaction();
  
  for (const job of jobsData) {
    transaction.create({
      _type: 'job',
      title: job.title,
      category: job.category,
      details: job.details,
      lastDate: job.lastDate,
      generalInstructions: job.generalInstructions,
      application: job.application,
      extraInfo: job.extraInfo,
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} job-related documents in a transaction.`);
};
