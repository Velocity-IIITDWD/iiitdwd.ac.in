import { client } from '../utils/sanity';
import { cardData } from '../../data/campus/data';
import { facilities } from '@/data/campus/facilities';

const migrateCampusData = async () => {
  const transaction = client.transaction();

  for (const data of cardData) {
    transaction.create({
      _type: 'campusData',
      title: data.title,
      href: data.href,
      imageUrl: data.imageUrl,
    });
  }

  const results = await transaction.commit();
  console.log(
    `Created ${results.results.length} campus data entries in a transaction.`
  );
};

const migrateFacilities = async () => {
  const transaction = client.transaction();

  for (const data of facilities) {
    transaction.create({
      _type: 'facility',
      title: data.title,
      blockName: data.blockName,
      items: data.items,
      imageUrl: data.imageUrl,      
    });
  }

  const results = await transaction.commit();
  console.log(
    `Created ${results.results.length} facility data entries in a transaction.`
  );
};

export const migrateCampus = async () => {
  await migrateCampusData();
  await migrateFacilities();
}