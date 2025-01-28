import { client } from '../utils/sanity';
import { linksdata as n } from '../../data/nirf';

export const migrateNirft = async () => {
  const transaction = client.transaction();
  for (const nirf of n) {
    transaction.create({
      _type: 'nirf',
      curr_year: nirf.curr_year,
      Overall_Report_curr: nirf.Overall_Report_curr,
      Engineering_Report_curr: nirf.Engineering_Report_curr,
      prev_year: nirf.prev_year,
      Overall_Report_prev: nirf.Overall_Report_prev,
      Engineering_Report_prev: nirf.Engineering_Report_prev
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} nirf in a transaction.`);
}