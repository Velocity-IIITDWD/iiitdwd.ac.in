import ContactTable from '@/components/contactInfo/ContactTable';
import { contactCategories, ContactData, Contact , contacts } from '@/data/contactInfo';
import { Metadata } from 'next';

import { client } from '@/lib/sanity/client';

const query = `*[_type == "contactData"][0] {
  generalQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          id,
          category
      }
  },
  hostelRelatedQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          id,
          category
      }
  },
  academicQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          id,
          category
      }
  },
  careerGuidanceCell[]->{
      name,
      designation,
      contactNumber,
      category->{
          id,
          category
      }
  },
  feeRelatedQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          id,
          category
      }
  },
  scholarshipLoansQueries[]->{
      name,
      designation,
      contactNumber,
      category->{
          id,
          category
      }
  }
}`;

async function getData() {
  const contactData = (await client.fetch(query)) as ContactData;
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
  // console.log('contactData:'+(contactData));
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
