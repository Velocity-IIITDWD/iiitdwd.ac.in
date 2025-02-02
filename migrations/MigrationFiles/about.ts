import { client } from '../utils/sanity';
import { aboutData } from '../../data/about';

export const migrateAbout = async () => {
  const transaction = client.transaction();

  transaction.create({
    _type: 'about',
    aboutText: aboutData.aboutText,
    director: {
      _type: 'profile',
      title: aboutData.director.title,
      imageURL: aboutData.director.imageURL,
      content: aboutData.director.content,
    },
    directorsMessage: {
      _type: 'directorsMessage',
      heading: aboutData.directorsMessage.heading,
      text1: aboutData.directorsMessage.text1,
      text2: aboutData.directorsMessage.text2,
      text3: aboutData.directorsMessage.text3,
    },
    briefProfile: aboutData.briefProfile,
    vision: aboutData.vision,
    missions: aboutData.missions.map((mission) => ({
      _type: 'mission',
      id: mission.id,
      text: mission.text,
    })),
    coreValues: aboutData.coreValues.map((value) => ({
      _type: 'coreValue',
      id: value.id,
      text: value.text,
    })),
    campusTour: aboutData.campusTour,
    mainGate: {
      _type: 'imageUsed',
      name: aboutData.mainGate.name,
      imageURL: aboutData.mainGate.imageURL,
    },
  });

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} about documents in a single transaction.`);
};
