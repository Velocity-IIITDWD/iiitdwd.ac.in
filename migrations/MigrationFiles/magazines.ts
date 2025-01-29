import { client } from '../utils/sanity';
import { issues, about, facultyAdvisors, teams } from '../../data/magazine';

export const migrateMagazines = async () => {
  const transaction = client.transaction();

  transaction.create({
    _type: 'about',
    description: about.description,
  });

  for (const issue of issues) {
    transaction.create({
      _type: 'issue',
      issueUrl: issue.issueUrl,
      id: issue.id,
      displayText: issue.displayText,
      previewImg: issue.previewImg,
    });
  }

  for (const advisor of facultyAdvisors) {
    transaction.create({
      _type: 'facultyAdvisor',
      id: advisor.id,
      name: advisor.name,
      role: advisor.role,
    });
  }

  for (const team of teams) {
    transaction.create({
      _type: 'team',
      teamId: team.teamId,
      teamName: team.teamName,
      members: team.members,
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} magazine-related documents in a transaction.`);
};
