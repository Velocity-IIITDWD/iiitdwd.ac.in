import ContactTable from '@/components/contactInfo/ContactTable';
import { contactCategories, ContactData } from '@/data/contactInfo';
import { Metadata } from 'next';

import { FetchSanity } from '@/lib/sanity/client';
import { GetContactInfo } from '@/lib/sanity/Queries';

async function getData() {
  const contactData: ContactData = await FetchSanity(GetContactInfo);
  if (!contactData) {
    return {
      generalQueries: [],
      hostelRelatedQueries: [],
      academicQueries: [],
      careerGuidanceCell: [],
      feeRelatedQueries: [],
      scholarshipLoansQueries: [],
    };
  }
  return contactData;
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
