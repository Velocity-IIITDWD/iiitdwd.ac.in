import { client } from '../utils/sanity';
import { nirfReports } from '../../data/nirf';

export const migrateNirf = async () => {
  const transaction = client.transaction();

  for (const nirf of nirfReports) {
    transaction.create({
      _type: 'nirf',
      year: nirf.year,
      overallReport: nirf.overallReport,
      engineeringReport: nirf.engineeringReport,
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} NIRF entries in a transaction.`);
};
