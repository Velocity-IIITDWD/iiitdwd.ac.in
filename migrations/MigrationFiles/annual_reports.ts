import { client } from '../utils/sanity';
import { annualReports } from '../../data/annual_reports';

export const migrateAnnualReports = async () => {
  const transaction = client.transaction();

  for (const report of annualReports) {
    transaction.create({
      _type: 'annualReport',
      issueUrl: report.issueUrl,
      displayText: report.displayText,
      previewImg: report.previewImg,
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} annual report documents in a single transaction.`);
};
