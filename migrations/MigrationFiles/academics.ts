import { client } from '../utils/sanity';
import { ECEDetails, CSEDetails, DSAIDetails, CSEStructure, DSAIStrcutre, ECEStructure } from '../../data/academics';

export const migrateCourseDetails = async () => {
  const transaction = client.transaction();

  for (const detail of ECEDetails) {
    transaction.create({
      _type: 'courseDetail',
      course: detail.course,
      credits: detail.credits,
    });
  }

  for (const detail of CSEDetails) {
    transaction.create({
      _type: 'courseDetail',
      course: detail.course,
      credits: detail.credits,
    });
  }

  for (const detail of DSAIDetails) {
    transaction.create({
      _type: 'courseDetail',
      course: detail.course,
      credits: detail.credits,
    });
  }

  for (const structure of CSEStructure) {
    structure.forEach((course) => {
      transaction.create({
        _type: 'courseStructure',
        code: course.code,
        title: course.title,
        credit: course.credit,
        preReq: course.preReq,
      });
    });
  }

  for (const structure of DSAIStrcutre) {
    structure.forEach((course) => {
      transaction.create({
        _type: 'courseStructure',
        code: course.code,
        title: course.title,
        credit: course.credit,
        preReq: course.preReq,
      });
    });
  }

  for (const structure of ECEStructure) {
    structure.forEach((course) => {
      transaction.create({
        _type: 'courseStructure',
        code: course.code,
        title: course.title,
        credit: course.credit,
        preReq: course.preReq,
      });
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} course documents in a single transaction.`);
};
