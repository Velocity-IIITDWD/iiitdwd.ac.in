import { client } from '../utils/sanity';
import { images, ProgramCardDetails, Programs } from '../../data/homePage';

export const migrateHomePage = async () => {
  const transaction = client.transaction();

  for (const image of images) {
    transaction.create({
      _type: 'mainCarouselImage',
      url: image.url,
      caption: image.caption,
      link: image.link || '',
    });
  }

  for (const programCard of ProgramCardDetails) {
    transaction.create({
      _type: 'programCard',
      image: programCard.image,
      link: programCard.link,
      header1: programCard.Header1,
      header2: programCard.Header2,
    });
  }

  for (const program of Programs) {
    transaction.create({
      _type: 'program',
      image: program.image,
      title: program.title,
      description: program.description,
      link: program.link,
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} documents in a single transaction.`);
};
