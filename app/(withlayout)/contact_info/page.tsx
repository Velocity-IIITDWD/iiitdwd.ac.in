import ContactTable from '@/components/contactInfo/ContactTable';
import { contactCategories, ContactData, Contact , contacts } from '@/data/contactInfo';
import { Metadata } from 'next';

import { client } from '@/lib/sanity/client';

const query = '*[_type == "contactData"]';

async function getData() {
  const contactData = (await client.fetch(query));
  console.log(contactData);

  const fullContacts: ContactData = contactData!=null ? {
    generalQueries: [...contacts.generalQueries, ...contactData.generalQueries],
    hostelRelatedQueries: [...contacts.hostelRelatedQueries, ...contactData.hostelRelatedQueries],
    academicQueries: [...contacts.academicQueries, ...contactData.academicQueries],
    careerGuidanceCell: [...contacts.careerGuidanceCell, ...contactData.careerGuidanceCell],
    feeRelatedQueries: [...contacts.feeRelatedQueries, ...contactData.feeRelatedQueries],
    scholarshipLoansQueries: [...contacts.scholarshipLoansQueries, ...contactData.scholarshipLoansQueries]
  } : contacts;
  return fullContacts;
}

const ContactInfo = async () => {

 const fullContacts = await getData();
  
  return (
    <div className="w-full flex justify-center items-center flex-col p-2">
      <span className="text-dwd-primary text-4xl font-bold mb-4">
        Contact Information
      </span>
      <ContactTable
        contactInfo={fullContacts}
        contactCategories={contactCategories}
      />
    </div>
  );
};

export default ContactInfo;

export const metadata: Metadata = {
  title: 'Contact Info',
};
