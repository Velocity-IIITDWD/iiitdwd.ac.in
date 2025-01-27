import { client } from '../utils/sanity';
import { GalleryImages } from '../../data/gallery';

export const migrateGalleryImages = async () => {
  const transaction = client.transaction();

  for (const image of GalleryImages) {
    transaction.create({
      _type: 'galleryImage',
      url: image.url,
      caption: image.caption,
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} gallery image documents in a single transaction.`);
};