import { client } from '../utils/sanity';
import { links,descriptions,seatMatrix } from '../../data/admissions';


export const migrateSeatMatrix = async () => {
  const transaction = client.transaction();

  transaction.create({
    _type: 'seatMatrix',
    instituteCode: seatMatrix.instituteCode,
    instituteName: seatMatrix.instituteName,
    programs: seatMatrix.programs.map(program => ({
      _type: 'program',
      code: program.code,
      name: program.name,
      seatPoolQuota: program.seatPoolQuota.map(quota => ({
        _type: 'seatPoolQuota',
        name: quota.name,
        seatPoolGender: quota.seatPoolGender.map(gender => ({
          _type: 'seatPoolGender',
          name: gender.name,
          open: gender.open,
          open_pwd: gender.open_pwd,
          gen_ews: gender.gen_ews,
          gen_ews_pwd: gender.gen_ews_pwd,
          sc: gender.sc,
          sc_pwd: gender.sc_pwd,
          st: gender.st,
          st_pwd: gender.st_pwd,
          obc_ncl: gender.obc_ncl,
          obc_ncl_pwd: gender.obc_ncl_pwd,
          total: gender.total,
        })),
        seatCapacity: quota.seatCapacity,
        femaleSupernumerary: quota.femaleSupernumerary,
      })),
    })),
    total: seatMatrix.total.map(total => ({
      _type: 'total',
      id: total.id,
      qty: total.qty,
    })),
  });

  for (const linkCategory of links) {
    transaction.create({
      _type: 'links',
      type: linkCategory.type,
      links: linkCategory.links.map(link => ({
        _type: 'link',
        link: link.link,
        displayText: link.displayText,
      })),
    });
  }

  for (const description of descriptions) {
    transaction.create({
      _type: 'description',
      heading: description.heading,
      description: description.description,
    });
  }

  const results = await transaction.commit();
  console.log(`Created ${results.results.length} documents in a single transaction.`);
};
