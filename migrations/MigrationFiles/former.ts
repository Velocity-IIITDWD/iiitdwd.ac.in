import { client } from '../utils/sanity';
import profileData from '../../data/profile/director/former';

export const migrateProfileData = async () => {
  const transaction = client.transaction();

  profileData.forEach((group) => {
    group.profiles.forEach((profile) => {
      transaction.create({
        _type: 'profileGroup',
        title: group.title,
        profiles: [
          {
            _type: 'profile',
            title: profile.title,
            content: profile.content,
            imageURL: profile.imageURL,
          },
        ],
      });
    });
  });

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} profile group documents in a single transaction.`);
};
